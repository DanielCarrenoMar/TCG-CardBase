<script lang="ts">
  import HeroSection from '$lib/components/Hero-section.svelte';
  import Hero from "../series/hero_prueba.jpg";

  import SearchBar from "$lib/components/Search-bar.svelte";
  import SelectButton from "$lib/components/Select-button.svelte";
  import { getListSeries, getSerieById } from "$lib/api/series";
  import { onMount } from 'svelte';
  import SetCard from './_components/SetCard.svelte';
  import { page } from '$app/stores';
  import { getListSetFullData } from '$lib/api/sets';
  import { pageTexts } from '$lib/constants/allTexts';
  import { pageLanguage } from '$lib/language/languajeHandler';

  let series: any[] = [];
  let currentSerie: any = null;
  let sets: any[] = [];
  let isLoading = true;
  let error = false;

  let search = '';
  let sortBy = 'alphabet'; // 'alphabet', 'date', 'count'

  onMount(async () => {
    await loadExpansions();
  });

  const loadExpansions = async () => {
    try {
      isLoading = true;
      error = false;
      
      const serieId = $page.url.searchParams.get('serie');          // Obtener el ID de la serie desde la URL
      
      if (serieId) {                                              //busco los sets segun la serie de la url
        const serieData = await getSerieById(serieId);            // cargar una serie         
        if (serieData) {
          currentSerie = serieData;
          
          sets = await getListSetFullData(serieData.sets) || [];            //obtener toda la data de los sets
        } else {
          error = true;
        }
      } else {                                                  //sino, muestro todas las series
        const data = await getListSeries();         // Cargar todas las series y sus sets
        if (data) {
          series = data;
          sets = data.flatMap(serie => serie.sets || []);                   // Aplanar todos los sets de todas las series
          // console.log('expansiones', sets);
        } else {
          error = true;
        }
      }
    } catch (error) {
      console.error("Error loading expansions:", error);
      error = true;
    } finally {
      isLoading = false;
    }
  };

  // ordenamiento para sets
  function getSortedSets() {
    let filtered = sets;

    // Filtro de buqueda
    if (search.trim() !== '') {
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    }

    // Ordenamiento
    if (sortBy === 'alphabet') {
      filtered = [...filtered].sort((a, b) =>
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base', numeric: true })
      );
    } else if (sortBy === 'date') {
      filtered = [...filtered].sort((a, b) =>
        (a.releaseDate || '').localeCompare(b.releaseDate || '')
      );
    } else if (sortBy === 'count') {
      filtered = [...filtered].sort((a, b) =>
        (b.cardCount || 0) - (a.cardCount || 0)
      );
    }
    return filtered;
  }
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 text-black">
  <HeroSection 
    title={currentSerie ? `${pageTexts[pageLanguage].expansionsTitle} ${currentSerie.name}` : pageTexts[pageLanguage].expansionsTitleDefault} 
    image={Hero} 
  />

  <div class="mx-auto p-4 md:p-8 xl:mx-18 xl:w-auto ">
    <!-- Search and Sort -->
    <div class="mb-8">
      <SearchBar bind:value={search} placeholder={pageTexts[pageLanguage].expansionsSearchPlaceholder} />
    </div>

    <div class=" flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <h3 class="text-xl font-semibold">{pageTexts[pageLanguage].expansionsSortBy}</h3>
      <div class="flex flex-col gap-2 sm:flex-row">
        <SelectButton selected={sortBy === 'alphabet'} onClick={() => sortBy = 'alphabet'}>
          {pageTexts[pageLanguage].expansionsSortAlphabet}
        </SelectButton>
        <SelectButton selected={sortBy === 'date'} onClick={() => sortBy = 'date'}>
          {pageTexts[pageLanguage].expansionsSortDate}
        </SelectButton>
        <SelectButton selected={sortBy === 'count'} onClick={() => sortBy = 'count'}>
          {pageTexts[pageLanguage].expansionsSortCount}
        </SelectButton>
      </div>
    </div>

    <!-- Sets Grid -->
    <div class="container-ha container-haa gap-8">
      {#if isLoading}
        <div class="text-center py-10">{pageTexts[pageLanguage].expansionsLoading}</div>
      {:else if error}
        <div class="text-center py-10 text-red-500">{pageTexts[pageLanguage].expansionsError}</div>
      {:else if getSortedSets().length === 0}
        <div class="text-center py-10 text-gray-700">{pageTexts[pageLanguage].expansionsNotFound}</div>
      {:else}
        {#each getSortedSets() as set}
          <SetCard {set} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .container-haa{
    grid-template-columns: repeat(auto-fill, minmax(min(90%, 15rem), 1fr));
  }
</style>