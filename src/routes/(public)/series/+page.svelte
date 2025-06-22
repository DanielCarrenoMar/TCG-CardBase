<script lang="ts">
  import HeroSection from '$lib/components/hero-section.svelte';
  import Hero from "./hero_prueba.jpg";
  import SearchBar from '$lib/components/SearchBar.svelte';
  import SelectButton from '$lib/components/SelectButton.svelte';
  import SerieCard from './_components/SerieCard.svelte';
  import { Card } from 'flowbite-svelte';
  import { getListSeries, getSeriesForCarrousel } from "$lib/api/series";
  import { onMount } from 'svelte';

  let serie: Array<{alt: string, src: string, title: string}> = [];
  let isLoading = true;
  let error = false;

    let search = '';
  let sortBy = 'alphabet'; // 'alphabet', 'date', 'count'


  onMount(async () => {
        await fetchSeries();
        // console.log("Series desde comp: ", series);
    });

  // Datos de ejemplo
  const series = [
    {
      name: 'Base',
      logo: 'https://images.pokemontcg.io/base1/logo.png',
      cardCount: 102,
      releaseDate: '1999-01-09',
    },
    {
      name: 'Jungle',
      logo: 'https://images.pokemontcg.io/base2/logo.png',
      cardCount: 64,
      releaseDate: '1999-06-16',
    },
    {
      name: 'Fossil',
      logo: 'https://images.pokemontcg.io/base3/logo.png',
      cardCount: 62,
      releaseDate: '1999-10-10',
    },
     {
      name: 'Base Set 2',
      logo: 'https://images.pokemontcg.io/base4/logo.png',
      cardCount: 130,
      releaseDate: '2000-02-24',
    },
    {
      name: 'Team Rocket',
      logo: 'https://images.pokemontcg.io/base5/logo.png',
      cardCount: 83,
      releaseDate: '2000-04-24',
    },
    {
      name: 'Gym Heroes',
      logo: 'https://images.pokemontcg.io/gym1/logo.png',
      cardCount: 132,
      releaseDate: '2000-08-14',
    }
  ];


  const fetchSeries = async () => {
        try {
            isLoading = true;
            error = false;
            const data = await getSeriesForCarrousel();
            console.log('series desde el page', data);
            
            if (!data) {
              serie = [];
                error = true;
                throw new Error('No Serie found');
            }else{
              serie = data;
            }
        } catch (error) {
            console.error("Error fetching series:", error);
            error = true;
            serie = [];
        }finally {
            isLoading = false;
        }
    };
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-gray-300 to-gray-500 text-black">
  <HeroSection title="Pokemon Series de Cartas" image={Hero} />

  <div class="mx-auto p-4 md:p-8 xl:mx-40 xl:w-auto ">
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
    <div class="container-ha gap-8 cursor-pointer  ">
      {#each series as serie}
        <SerieCard {serie} />
      {/each}
    </div>

    <!-- Series Grid -->
    <!-- <div class="container-ha gap-8 ">
      {#each series as serie}
      <Card class="max-w-xs" img={serie.logo}>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {serie.name}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Nro de Cartas: {serie.cardCount}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {serie.releaseDate}
        </p>
        </Card>
      {/each}
    </div> -->
  </div>
</div>