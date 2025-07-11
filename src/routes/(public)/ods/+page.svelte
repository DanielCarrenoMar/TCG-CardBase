<script lang="ts">
  import { POKEMON_TYPE_ODS_MAPPING, getTypeImagePath } from '$lib/constants/pokemon-ods-mapping';
  import { getCardsByType } from '$lib/api/cards';
  import { onMount } from 'svelte';
  import { pageLanguage } from '$lib/language/languajeHandler';
  import { pageTexts } from '$lib/constants/allTexts';

  let selectedType = '';
  let cardsOfType: any[] = [];
  let loading = false;

  async function showCardsByType(type: string) {
    selectedType = type;
    loading = true;
    try {
      const result = await getCardsByType(type, 0);
      cardsOfType = result || [];
    } catch (error) {
      console.error('Error al cargar cartas por tipo:', error);
      cardsOfType = [];
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Relación Tipos Pokémon - ODS | TCG CardBase</title>
  <meta name="description" content="Descubre cómo los tipos de Pokémon se relacionan con los Objetivos de Desarrollo Sostenible (ODS)" />
</svelte:head>

<div class="bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100 min-h-screen">
  <div class="container mx-auto py-8 px-4">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white mb-4">
        {pageTexts[pageLanguage].odsPageTitle}
      </h1>
      <p class="text-xl text-gray-200 max-w-3xl mx-auto">
        {pageTexts[pageLanguage].odsPageSubtitle}
      </p>
    </div>

    <!-- Grid de tipos y ODS -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each POKEMON_TYPE_ODS_MAPPING[pageLanguage] as mapping}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
             on:click={() => showCardsByType(mapping.type)}>
          
          <!-- Header con tipo y ODS -->
          <div class="p-6 border-b border-gray-100">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <img 
                  src={getTypeImagePath(mapping.type)} 
                  alt="Tipo {mapping.type}" 
                  class="w-12 h-12"
                />
                <h3 class="text-xl font-bold text-gray-800">{mapping.type}</h3>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-green-600">{pageTexts[pageLanguage].odsPageOds} {mapping.ods.id}</div>
                <div class="text-sm text-gray-500">{pageTexts[pageLanguage].odsPageGoal}</div>
              </div>
            </div>
            
            <img 
              src={mapping.ods.image} 
              alt={mapping.ods.name} 
              class="w-16 h-16 mx-auto mb-3"
            />
            <h4 class="text-lg font-semibold text-gray-700 text-center mb-2">
              {mapping.ods.name}
            </h4>
            <p class="text-sm text-gray-600 text-center leading-relaxed">
              {mapping.ods.description}
            </p>
          </div>

          <!-- Indicador de clic -->
          <div class="bg-gray-50 px-6 py-3">
            <div class="text-center text-sm text-gray-500">
              <span class="inline-flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                {pageTexts[pageLanguage].odsPageSeeCards} {mapping.type}
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Sección de cartas del tipo seleccionado -->
    {#if selectedType}
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center gap-4 mb-6">
          <img 
            src={getTypeImagePath(selectedType)} 
            alt="Tipo {selectedType}" 
            class="w-12 h-12"
          />
          <div>
            <h2 class="text-2xl font-bold text-gray-800">
              {pageTexts[pageLanguage].odsPageTypeCards} {selectedType}
            </h2>
            <p class="text-gray-600">
              {pageTexts[pageLanguage].odsPageShowingTypeCards} {selectedType}
            </p>
          </div>
        </div>

        {#if loading}
          <div class="text-center py-8">
            <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-gray-600">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {pageTexts[pageLanguage].odsPageLoadingCards}
            </div>
          </div>
        {:else if cardsOfType.length > 0}
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {#each cardsOfType.slice(0, 12) as card}
              <div class="bg-gray-50 rounded-lg p-3 hover:shadow-md transition-shadow">
                <img 
                  src={card.image || card.imageUrl || card.image + '/low.webp'} 
                  alt={card.name} 
                  class="w-full h-32 object-contain rounded mb-2 border border-gray-200 bg-white"
                  loading="lazy"
                />
                <div class="text-center">
                  <div class="font-semibold text-sm text-gray-800 truncate">{card.name}</div>
                  <div class="text-xs text-gray-500">ID: {card.id}</div>
                </div>
              </div>
            {/each}
          </div>
          {#if cardsOfType.length > 12}
            <div class="text-center mt-4">
              <p class="text-sm text-gray-500">
                {pageTexts[pageLanguage].odsPageShowing12Of} {cardsOfType.length} {pageTexts[pageLanguage].odsPageCards}
              </p>
            </div>
          {/if}
        {:else}
          <div class="text-center py-8">
            <div class="text-gray-500">
              {pageTexts[pageLanguage].odsPageNoTypeCards} {selectedType}
            </div>
          </div>
        {/if}
      </div>
    {/if}

    <!-- Información adicional sobre ODS -->
    <div class="mt-12 bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        {pageTexts[pageLanguage].odsPageWhatAreOds}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            {pageTexts[pageLanguage].odsPageOdsAndPokemon}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            {pageTexts[pageLanguage].odsPageOdsDescription1}
          </p>
          <p class="text-gray-600 leading-relaxed">
            {pageTexts[pageLanguage].odsPageOdsDescription2}
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            {pageTexts[pageLanguage].odsPageLearnWhilePlaying}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            {pageTexts[pageLanguage].odsPageLearnDescription1}
          </p>
          <p class="text-gray-600 leading-relaxed">
            {pageTexts[pageLanguage].odsPageLearnDescription2}
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 