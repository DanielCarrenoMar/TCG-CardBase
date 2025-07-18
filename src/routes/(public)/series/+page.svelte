<script lang="ts">
  import HeroSection from "$lib/components/Hero-section.svelte";
  import Hero from "./hero_prueba.jpg";
  import SearchBar from "$lib/components/Search-bar.svelte";
  import SelectButton from "$lib/components/Select-button.svelte";
  import SerieCard from "./_components/SerieCard.svelte";
  import { getListSeries } from "$lib/api/series";
  import { onMount } from "svelte";
  import { pageLanguage } from '$lib/language/languajeHandler';
  import { pageTexts } from '$lib/constants/allTexts';

  let series: any[] = [];
  let isLoading = true;
  let error = false;

  let search = "";
  let sortBy = "alphabet"; // 'alphabet', 'date', 'count'

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
        throw new Error("No Serie found");
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
    if (search.trim() !== "") {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(search.trim().toLowerCase()),
      );
    }

    // Ordenamiento
    if (sortBy === "alphabet") {
      filtered = [...filtered].sort((a, b) =>
        a.name.localeCompare(b.name, "es", {
          sensitivity: "base",
          numeric: true,
        }),
      );
    } else if (sortBy === "date") {
      filtered = [...filtered].sort((a, b) =>
        (a.releaseDate || "").localeCompare(b.releaseDate || ""),
      );
    } else if (sortBy === "count") {
      filtered = [...filtered].sort(
        (a, b) => (b.sets?.length || 0) - (a.sets?.length || 0),
      );
    }
    return filtered;
  }
</script>

<HeroSection title={pageTexts[pageLanguage].seriesPageTitle} image={Hero} />

<div class="mx-auto container my-8">
  <h2 class="text-2xl">{pageTexts[pageLanguage].searchByName}</h2>
  <SearchBar bind:value={search} placeholder={pageTexts[pageLanguage].searchBarPlaceholder} />
</div>

<div
  class="w-full min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 text-black"
>
  <div class="mx-auto container my-8">
    <div class=" flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <h3 class="text-xl font-semibold">{pageTexts[pageLanguage].sortBy}</h3>
      <div class="flex flex-col gap-2 sm:flex-row">
        <SelectButton
          selected={sortBy === "alphabet"}
          onClick={() => (sortBy = "alphabet")}
        >
          {pageTexts[pageLanguage].expansionsSortAlphabet}
        </SelectButton>
        <SelectButton
          selected={sortBy === "date"}
          onClick={() => (sortBy = "date")}
        >
          {pageTexts[pageLanguage].expansionsSortDate}
        </SelectButton>
        <SelectButton
          selected={sortBy === "count"}
          onClick={() => (sortBy = "count")}
        >
          {pageTexts[pageLanguage].expansionsSortCount}
        </SelectButton>
      </div>
    </div>

    <!-- Series Grid -->
    <div class="container-ha gap-8 cursor-pointer">
      {#if isLoading}
        <div class="text-center py-10">{pageTexts[pageLanguage].seriesSectionLoading}</div>
      {:else if error}
        <div class="text-center py-10 text-red-500">
          {pageTexts[pageLanguage].seriesSectionError}
        </div>
      {:else if getSortedSeries().length === 0}
        <div class="text-center py-10 text-gray-700">
          {pageTexts[pageLanguage].seriesSectionEmpty}
        </div>
      {:else}
        {#each getSortedSeries() as serie}
          <SerieCard {serie} />
        {/each}
      {/if}
    </div>
  </div>
</div>
