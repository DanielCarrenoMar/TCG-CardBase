<script lang="ts">
  import { onMount } from "svelte";
  import { getCardsByName, getCardFromQuery, getCardFromId } from "$lib/api/cards";
  import { Query, type CardResume } from "@tcgdex/sdk";
  import SelectButton from "$lib/components/SelectButton.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import GeneralButton from "$lib/components/General-button.svelte";
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
  let selectedCardFull: any = null;
  let loadingCard = false;

  // Variables para el ordenamiento
  let sortBy: 'id' | 'name' = 'id';
  let sortOrder: 'asc' | 'desc' = 'asc';

  // para ordenar las cartas
  function sortCards(cardsToSort: CardResume[]): CardResume[] {
    if (!cardsToSort || cardsToSort.length === 0) return cardsToSort;

    // console.log(cardsToSort);

    return [...cardsToSort].sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'id') {
        // Ordenar por ID (asumiendo que son strings numéricos)
        comparison = a.name.localeCompare(b.name, 'es', { 
          sensitivity: 'base',
          numeric: true 
        });
      } else if (sortBy === 'name') {
        // Ordenar por nombre 
        comparison = a.name.localeCompare(b.name, 'es', { 
          sensitivity: 'base',
          numeric: true 
        });
      }

      return sortOrder === 'asc' ? comparison : -comparison;                // Aplicar el orden (ascendente o descendente)
    });
  }

  // para cambiar el ordenamiento
  function changeSort(newSortBy: 'id' | 'name') {
    if (sortBy === newSortBy) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';               // Si es el mismo campo, cambiar el orden
    } else {
      // Si es un campo diferente, establecer el nuevo campo y orden ascendente por defecto
      sortBy = newSortBy;
      sortOrder = 'asc';
    }
    
    filteredCards = sortCards(cards);         // Reordenar las cartas actuales
  }

  //  obtener el estado de seleccion de un boton
  function isButtonSelected(buttonSortBy: 'id' | 'name'): boolean {
    return sortBy === buttonSortBy;
  }

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
      // Aplicar ordenamiento despues de obtener las cartas
      filteredCards = sortCards(cards);
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
        // console.log('cartas by name desde componente', reset);        
      }
      if (reset) {
        cards = result;
      } else {
        const ids = new Set(cards.map(c => c.id));
        cards = [...cards, ...result.filter(c => !ids.has(c.id))];
      }
      // Aplicar ordenamiento despues de obtener las cartas
      filteredCards = sortCards(cards);
      hasMore = result.length === 20;
    } catch (e) {
      error = "Error al buscar cartas";
      cards = [];
      filteredCards = [];
      hasMore = false;
    }
    loading = false;
  }

  // Reactive statement para reordenar cuando cambie el ordenamiento
  $: if (cards.length > 0) {
    filteredCards = sortCards(cards);
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
    selectedCardFull = cardFull;
    loadingCard = false;
  }
</script>

<section class="bg-white">
  <div class="mx-auto container py-4">
    <h2 class="text-2xl">Buscar por nombre</h2>
    <SearchBar
      bind:value={search}
      placeholder="Buscar..."
    />
  </div>
  <AcancedSearchDropdown />
</section>
<main>
  <section class="bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100 ">
    <div class="mx-auto container py-4">
      <header class="flex flex-col gap-4 py-4 md">
        <h3 class="text-xl text-white">Ordenar por</h3>
        <span class="flex gap-2">
          <SelectButton 
            selected={isButtonSelected('id')} 
            onClick={() => changeSort('id')}
          >
            Id {sortBy === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </SelectButton>
          <SelectButton 
            selected={isButtonSelected('name')} 
            onClick={() => changeSort('name')}
          >
            Nombre {sortBy === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
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
            <button
              type="button"
              class="bg-white rounded-lg shadow-lg p-2 w-48 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              on:click={() => handleCardClick(card)}
              aria-label={`Ver detalles de la carta ${card.name}`}
            >
              <img
                src={ card.image || card.image + '/low.webp'} 
                alt={card.name}
                class="w-full h-64 object-contain rounded mb-2 border border-gray-200"
                loading="lazy"
              />
              <div class="text-center">
                <div class="font-semibold text-lg">{card.name}</div>
                <div class="text-xs text-gray-500">ID: {card.id}</div>
              </div>
            </button>
          {/each}
        </div>
        {#if hasMore && !loading}
          <div class="flex justify-center">
            <GeneralButton isLoading={loading} onClick={cargarMas}>
              Cargar más
            </GeneralButton>
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
