
<script lang="ts">
import { onMount } from 'svelte';
import { getCardsBySet, getRandomCard } from '$lib/api/cards';

// Expansiones disponibles (puedes ajustar según sets reales)
const expansions = [
  { id: 'swsh1', name: 'Scarlet & Violet' },
  { id: 'sm1', name: 'Sun & Moon' },
  { id: 'xy1', name: 'XY' },
  { id: 'bw1', name: 'Black & White' }
];

let selectedExpansions: string[] = [];
let generatedDeck: any[] = [];
let loading = false;

// Genera una baraja según las reglas oficiales
async function generateDeck() {
  loading = true;
  generatedDeck = [];

  // Helper para limitar copias
  function addWithLimit(deck: any[], card: any, max: number) {
    const count = deck.filter(c => c.id === card.id).length;
    if (count < max) deck.push(card);
  }

  // Obtener cartas de las expansiones seleccionadas
  let allCards: any[] = [];
  for (const setId of selectedExpansions) {
    const cards = await getCardsBySet(setId, 0, 50); // Obtener suficientes cartas
    allCards = [...allCards, ...cards];
  }

  // Si no hay expansiones seleccionadas, usar cartas random
  if (allCards.length === 0) {
    const card = await getRandomCard();
    if (card) allCards = [card];
  }

  // Filtrar por tipo
  const pokemons = allCards.filter(c => c.types && c.types.length > 0);
  const trainers = allCards.filter(c => c.rarity && c.rarity.toLowerCase().includes('trainer'));
  const energies = allCards.filter(c => c.name && c.name.toLowerCase().includes('energy'));

  // Seleccionar Pokémon (15-20, al menos 1 básico)
  let deckPokemons: any[] = [];
  let basicPokemon = pokemons.find(c => c.attacks && c.attacks.length > 0 && c.hp && c.hp > 0);
  if (basicPokemon) addWithLimit(deckPokemons, basicPokemon, 4);
  for (const p of pokemons) {
    if (deckPokemons.length >= 20) break;
    addWithLimit(deckPokemons, p, 4);
  }
  deckPokemons = deckPokemons.slice(0, Math.max(15, Math.min(20, deckPokemons.length)));

  // Seleccionar Entrenadores (25-30)
  let deckTrainers: any[] = [];
  for (const t of trainers) {
    if (deckTrainers.length >= 30) break;
    addWithLimit(deckTrainers, t, 4);
  }
  deckTrainers = deckTrainers.slice(0, Math.max(25, Math.min(30, deckTrainers.length)));

  // Seleccionar Energías (10-15, sin límite de copias)
  let deckEnergies: any[] = [];
  let energyCard = energies[0];
  if (energyCard) {
    for (let i = 0; i < 15; i++) {
      deckEnergies.push(energyCard);
    }
  }
  deckEnergies = deckEnergies.slice(0, 15);

  // Unir todo y ajustar a 60 cartas
  let deck = [...deckPokemons, ...deckTrainers, ...deckEnergies];
  deck = deck.slice(0, 60);
  generatedDeck = deck;
  loading = false;
}
</script>


<main class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Configuración -->
  <section class="bg-gray-800 rounded-lg p-6 text-white flex flex-col gap-4">
    <h2 class="text-xl font-bold mb-2">Configuración</h2>
    <div>
      <div class="mb-2">Expansiones Disponibles</div>
      {#each expansions as exp}
        <label class="flex items-center gap-2 mb-1">
          <input type="checkbox" bind:group={selectedExpansions} value={exp.id} />
          {exp.name}
        </label>
      {/each}
    </div>
    <button class="bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition" on:click={generateDeck} disabled={loading}>
      {loading ? 'Generando...' : 'Generar'}
    </button>
    <div class="mt-4 text-sm">
      <strong>Resumen de la Baraja:</strong><br>
      Total de cartas: {generatedDeck.length}<br>
      Pokémon, Entrenadores, Energías
    </div>
  </section>

  <!-- Baraja Generada -->
  <section class="md:col-span-2 bg-gray-900 rounded-lg p-6 text-white">
    <h2 class="text-xl font-bold mb-4">Baraja Generada</h2>
    {#if generatedDeck.length === 0}
      <div class="text-gray-400">No se ha generado ninguna baraja aún.</div>
    {:else}
      <div class="grid gap-4">
        {#each generatedDeck as card}
          <div class="bg-gray-800 rounded p-4 flex items-center gap-4 shadow">
            {#if card.imageUrl}
              <img src={card.imageUrl} alt={card.name} class="w-16 h-24 object-contain rounded" />
            {/if}
            <div>
              <div class="font-bold text-lg">{card.name}</div>
              <div class="text-xs text-gray-300">{card.types ? card.types.join(', ') : ''}</div>
              <div class="text-xs text-gray-400">HP: {card.hp} | Rareza: {card.rarity}</div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </section>

  <!-- Reglas -->
  <section class="md:col-span-3 bg-gray-800 rounded-lg p-6 text-white mt-8">
    <h2 class="text-lg font-bold mb-2">Reglas de Pokemon TCG</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <strong>Composición de la Baraja:</strong><br>
        • Exactamente 60 cartas<br>
        • Máximo 4 copias de cualquier carta<br>
        • Energías básicas sin límite<br>
        • Al menos 1 Pokémon básico
      </div>
      <div>
        <strong>Distribución Típica:</strong><br>
        • Pokémon: 15-20 cartas<br>
        • Entrenadores: 25-30 cartas<br>
        • Energías: 10-15 cartas<br>
        • Balance según estrategia
      </div>
    </div>
  </section>
</main>
