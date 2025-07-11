<script lang="ts">
  // Estado para el filtro de visualización
  let deckFilter: "all" | "pokemon" | "trainers" | "energy" = "all";

  // Función para filtrar el mazo generado según el tipo
  function getFilteredDeck() {
    if (deckFilter === "pokemon") return basicPokemon;
    if (deckFilter === "trainers") return trainersCards;
    if (deckFilter === "energy") return energyCards;
    return generatedDeck;
  }
  import { onMount } from "svelte";
  import {
    getCardFromQuery,
    getTrainerCards,
    getRandomEnergyCards,
    getPokemonWithBasic,
    type CleanCardResume,
  } from "$lib/api/cards";
  import { Query } from "@tcgdex/sdk";
    import SelectButton from "$lib/components/Select-button.svelte";
  import { pageTexts } from "$lib/constants/allTexts";
import { pageLanguage } from "$lib/language/languajeHandler";

  // Expansiones disponibles: se obtienen dinámicamente de la API
  let allSets: { id: string; name: string }[] = [];

  onMount(async () => {
    try {
      // Obtener todos los sets desde la API tcgdex
      const sets = await import("$lib/api/api").then((mod) =>
        mod.tcgdex.set.list(),
      );
      allSets = sets.map((set: any) => ({ id: set.id, name: set.name }));
    } catch (error) {
      console.error("Error obteniendo sets:", error);
    }
  });

  let selectedSets: string[] = [];
  let generatedDeck: CleanCardResume[] = [];
  let trainersCards: CleanCardResume[] = [];
  let energyCards: CleanCardResume[] = [];
  let basicPokemon: CleanCardResume[] = [];
  let loading = false;

  // Genera una baraja según las reglas oficiales usando getCardFromQuery
  async function generateDeck() {
    loading = true;
    console.log("Generando baraja...");
    trainersCards = [];
    basicPokemon = [];

    // Pedir 20 de cada set y juntar todo
    for (const set of selectedSets) {
      const trainers = await getTrainerCards(0, 20, set);
      trainersCards.push(...trainers);
      const pokemons = await getPokemonWithBasic(18, set);
      basicPokemon.push(...pokemons);
    }
    // Mezclar aleatoriamente y limitar a 20
    trainersCards = shuffleArray(trainersCards).slice(0, 20);
    basicPokemon = shuffleArray(basicPokemon).slice(0, 18);
    energyCards = await getRandomEnergyCards(6);
    console.log("Sets seleccionados:", selectedSets);
    generatedDeck = [...trainersCards, ...energyCards, ...basicPokemon]; // Esto sí actualiza el state
    console.log("Baraja generada:", generatedDeck);
    loading = false;
  }

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
</script>


<main class="text-white bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100">
  <div class="mx-auto container flex flex-col flex-grow gap-8">
    <!-- Filtros de visualización -->
    <section class="w-full flex gap-4 mb-4 justify-center">
      <SelectButton
          selected={deckFilter === "all"}
          onClick={() => (deckFilter = "all")}
        >
          {pageTexts[pageLanguage].deckGeneratorFilterAll}
      </SelectButton>

      <SelectButton
          selected={deckFilter === "pokemon"}
          onClick={() => (deckFilter = "pokemon")}
      >
          {pageTexts[pageLanguage].deckGeneratorFilterPokemon}
      </SelectButton>

      <SelectButton
          selected={deckFilter === "trainers"}
          onClick={() => (deckFilter = "trainers")}
      >
          {pageTexts[pageLanguage].deckGeneratorFilterTrainers}
      </SelectButton>

      <SelectButton
          selected={deckFilter === "energy"}
          onClick={() => (deckFilter = "energy")}
      >
          {pageTexts[pageLanguage].deckGeneratorFilterEnergy}
      </SelectButton>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Configuración -->
      <section class="bg-gray-800 rounded-lg p-6 text-white flex flex-col gap-4 md:col-span-1">
        <h2 class="text-xl font-bold mb-2">{pageTexts[pageLanguage].deckGeneratorConfigTitle}</h2>
        <div>
          <div class="mb-2">{pageTexts[pageLanguage].deckGeneratorAvailableExpansions}</div>
          <div class="max-h-48 overflow-y-auto pr-2 custom-scroll">
            {#each allSets as exp}
              <label class="flex items-center gap-2 mb-1">
                <input type="checkbox" bind:group={selectedSets} value={exp.id} />
                {exp.name}
              </label>
            {/each}
          </div>
        </div>
        <button class="bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition" on:click={generateDeck} disabled={loading || selectedSets.length === 0}>
          {loading ? pageTexts[pageLanguage].deckGeneratorLoading : pageTexts[pageLanguage].deckGeneratorButtonGen}
        </button>
        <div class="mt-4 text-sm">
          <strong>{pageTexts[pageLanguage].deckGeneratorSummaryTitle}</strong><br />
          {pageTexts[pageLanguage].deckGeneratorSummaryTotal} {generatedDeck.length}<br />
          {pageTexts[pageLanguage].deckGeneratorSummaryPokemon} {basicPokemon.length}, {pageTexts[pageLanguage].deckGeneratorSummaryTrainers} {trainersCards.length}, {pageTexts[pageLanguage].deckGeneratorSummaryEnergy} {energyCards.length}
        </div>
      </section>

      <!-- Baraja Generada -->
      <section class="bg-gray-900 rounded-lg p-6 text-white md:col-span-2">
        <h2 class="text-xl font-bold mb-4">{pageTexts[pageLanguage].deckGeneratorGeneratedTitle}</h2>
        {#if getFilteredDeck().length === 0}
          <div class="text-gray-400">{pageTexts[pageLanguage].deckGeneratorNoDeck}</div>
        {:else}
          <div class="max-h-[32rem] overflow-y-auto pr-2 grid gap-4 custom-scroll">
            {#each getFilteredDeck() as card}
              <div class="bg-gray-800 rounded p-4 flex items-center gap-4 shadow">
                {#if card.image}
                  <img src={card.image} alt={card.name} class="w-16 h-24 object-contain rounded" />
                {/if}
                <div>
                  <div class="font-bold text-lg">{card.name}</div>
                  <div class="text-xs text-gray-400">{pageTexts[pageLanguage].deckGeneratorCardName} {card.name} | Id: {card.id}</div>
                </div>
              </div>
            {/each}
          </div>
        {/if}
<style>
  .custom-scroll::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  .custom-scroll::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
  .custom-scroll {
    scrollbar-width: thin;
    scrollbar-color: #444 #222;
  }
</style>
      </section>
    </div>

    <!-- Reglas -->
    <section class="bg-gray-800 rounded-lg p-6 text-white mt-8">
      <h2 class="text-lg font-bold mb-2">{pageTexts[pageLanguage].deckGeneratorRulesTitle}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <strong>{pageTexts[pageLanguage].deckGeneratorRulesCompositionTitle}</strong><br />
          • {pageTexts[pageLanguage].deckGeneratorRulesComposition1}<br />
          • {pageTexts[pageLanguage].deckGeneratorRulesComposition2}<br />
          • {pageTexts[pageLanguage].deckGeneratorRulesComposition3}<br />
          • {pageTexts[pageLanguage].deckGeneratorRulesComposition4}
        </div>
        <div>
          <strong>{pageTexts[pageLanguage].deckGeneratorRulesDistributionTitle}</strong><br />
          • {pageTexts[pageLanguage].deckGeneratorRulesDistribution1}<br />
          • {pageTexts[pageLanguage].deckGeneratorRulesDistribution2}<br />
          • {pageTexts[pageLanguage].deckGeneratorRulesDistribution3}<br />
          • {pageTexts[pageLanguage].deckGeneratorRulesDistribution4}
        </div>
      </div>
    </section>
  </div>
</main>
