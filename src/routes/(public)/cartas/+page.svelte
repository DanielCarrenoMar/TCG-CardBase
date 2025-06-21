<script lang="ts">
  import { onMount } from "svelte";
  import { getCardsByName, getCardFromQuery, getCardFromId } from "$lib/api/cards";
  import { Query, type CardResume } from "@tcgdex/sdk";
  import SelectButton from "$lib/components/SelectButton.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import AppGeneralButton from "$lib/components/app-general-button.svelte";
  import AcancedSearchDropdown from "./_components/AvancedSearchDropdown.svelte";
  import DropdownCard from "$lib/components/DropdownCard.svelte";

  let cards: CardResume[] = [];
  let filteredCards: CardResume[] = [];
  let search = "";
  let loading = true;
  let error = "";

  let lastSearch = "";
  let page = 0;
  let hasMore = true;

  let showDialog = false;
  let selectedCardFull = null;
  let loadingCard = false;

  async function fetchCards(reset = true) {
    loading = true;
    error = "";
    if (reset) {
      cards = [];
      filteredCards = [];
      page = 0;
      hasMore = true;
    }
    try {
      const result = await getCardFromQuery(Query.create(), page);
      if (reset) {        
        cards = result;        
      } else {


        
        const ids = new Set(cards.map(c => c.id));
        cards = [...cards, ...result.filter(c => !ids.has(c.id))];
      }
      filteredCards = cards;
      hasMore = result.length === 20;
    } catch (e) {
      error = "Error al cargar cartas";
    }
    loading = false;
  }

  async function fetchFilteredCards(name: string, reset = true) {
    loading = true;
    error = "";
    if (reset) {
      cards = [];
      filteredCards = [];
      page = 0;
      hasMore = true;
    }
    try {
      let result;
      if (!name) {
        result = await getCardFromQuery(Query.create(), page);
      } else {
        result = await getCardsByName(name, page);
      }
      if (reset) {
        cards = result;
      } else {
        
        const ids = new Set(cards.map(c => c.id));
        cards = [...cards, ...result.filter(c => !ids.has(c.id))];
      }
      filteredCards = cards;
      hasMore = result.length === 20;
    } catch (e) {
      error = "Error al buscar cartas";
      cards = [];
      filteredCards = [];
      hasMore = false;
    }
    loading = false;
  }

  
  $: if (search !== lastSearch) {
    lastSearch = search;
    page = 0;
    fetchFilteredCards(search, true);
  }

  function cargarMas() {
    page += 1;
    
    if (search && search.trim() !== "") {
      fetchFilteredCards(search, false);
    } else {
      fetchCards(false);
    }
  }

  onMount(() => fetchCards(true));

  async function handleCardClick(card) {
    showDialog = true;
    loadingCard = true;
    selectedCardFull = null;
    // Espera la info completa de la carta
    const cardFull = await getCardFromId(card.id);
    console.log(cardFull); // <-- Aquí ves el objeto completo en consola
    selectedCardFull = cardFull;
    loadingCard = false;
  }
</script>

<section class="bg-white">
  <div class="mx-auto container py-4">
    <h2 class="text-2xl">Buscar por nombre</h2>
    <SearchBar
      bind:value={search}
      items={[]} 
      key="name"
      placeholder="Buscar..."
    />
  </div>
  <AcancedSearchDropdown />
</section>
<main>
  <section class="bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100 ">
    <div class="mx-auto container py-4">
      <header class="flex flex-col gap-4 py-4 md">
        <h3 class="text-xl">Ordenar por</h3>
        <span class="flex">
          <SelectButton selected={false} onClick={() => {}}>Id</SelectButton>
          <SelectButton selected={false} onClick={() => {}}>
            Nombre
          </SelectButton>
        </span>
      </header>

      {#if loading && filteredCards.length === 0}
        <div class="text-center py-10">Cargando cartas...</div>
      {:else if error}
        <div class="text-red-500">{error}</div>
      {:else if search && filteredCards.length === 0}
        <div class="text-center py-10 text-white font-semibold">No se ha encontrado la carta.</div>
      {:else}
        <div class="flex flex-wrap gap-6 justify-center">
          {#each filteredCards as card}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
              class="bg-white rounded-lg shadow-lg p-2 w-48 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
              on:click={() => handleCardClick(card)}
            >
            <!--aca  -->
              <img
                src={ card.image} 
                alt={card.name}
                class="w-full h-64 object-contain rounded mb-2 border border-gray-200"
                loading="lazy"
              />
              <div class="text-center">
                <div class="font-semibold text-lg">{card.name}</div>
                <div class="text-xs text-gray-500">ID: {card.id}</div>
              </div>
            </div>
          {/each}
        </div>
        {#if hasMore && !loading}
          <div class="flex justify-center">
            <AppGeneralButton isLoading={loading} onClick={cargarMas}>
              Cargar más
            </AppGeneralButton>
          </div>
        {/if}
        {#if loading && filteredCards.length > 0}
          <div class="text-center py-4">Cargando más cartas...</div>
        {/if}
      {/if}
    </div>
  </section>
</main>

<DropdownCard
  open={showDialog}
  card={selectedCardFull}
  loading={loadingCard}
  on:close={() => showDialog = false}
/>
