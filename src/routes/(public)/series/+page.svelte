<script lang="ts">
  import HeroSection from '$lib/components/hero-section.svelte';
  import Hero from "./hero_prueba.jpg";
  import SearchBar from '$lib/components/SearchBar.svelte';
  import SelectButton from '$lib/components/SelectButton.svelte';
  import SerieCard from './_components/SerieCard.svelte';
  import { getListSeries } from "$lib/api/series";
  import { onMount } from 'svelte';

  let series: any[] = [];
  let isLoading = true;
  let error = false;

  let search = '';
  let sortBy = 'alphabet'; // 'alphabet', 'date', 'count'

  onMount(async () => {
    await fetchSeries();
  });

  const fetchSeries = async () => {
    try {
      isLoading = true;
      error = false;
      const data = await getListSeries();
      if (!data) {
        series = [];
        error = true;
        throw new Error('No Serie found');
      } else {
        series = data;
      }
    } catch (error) {
      console.error("Error fetching series:", error);
      error = true;
      series = [];
    } finally {
      isLoading = false;
    }
  };

  // function ORDENAMIENTO
  function getSortedSeries() {
    let filtered = series;

    // Filtro de busqueda
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
        (b.sets?.length || 0) - (a.sets?.length || 0)
      );
    }
    return filtered;
  }
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 text-black">
  <HeroSection title="Pokemon Series de Cartas" image={Hero} />

  <div class="mx-auto p-4 md:p-8 xl:mx-18 xl:w-auto ">
    <!-- Search and Sort -->
    <div class="mb-8">
      <SearchBar bind:value={search} placeholder="Buscar series..." />
    </div>

    <div class=" flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <h3 class="text-xl font-semibold">Ordenar por</h3>
      <div class="flex flex-col gap-2 sm:flex-row">
        <SelectButton selected={sortBy === 'alphabet'} onClick={() => sortBy = 'alphabet'}>
          Alfabeto
        </SelectButton>
        <SelectButton selected={sortBy === 'date'} onClick={() => sortBy = 'date'}>
          Fecha de emisión
        </SelectButton>
        <SelectButton selected={sortBy === 'count'} onClick={() => sortBy = 'count'}>
          Cantidad de Cartas
        </SelectButton>
      </div>
    </div>

    <!-- Series Grid -->
    <div class="container-ha gap-8 cursor-pointer">
      {#if isLoading}
        <div class="text-center py-10">Cargando series...</div>
      {:else if error}
        <div class="text-center py-10 text-red-500">Error al cargar las series.</div>
      {:else if getSortedSeries().length === 0}
        <div class="text-center py-10 text-gray-700">No se encontraron series.</div>
      {:else}
        {#each getSortedSeries() as serie}
          <SerieCard {serie} />
        {/each}
      {/if}
    </div>
  </div>
</div>