<script lang="ts">
    import { Carousel, Controls } from "flowbite-svelte";
    import { onMount } from 'svelte';
    import { getSeriesForCarrousel } from "$lib/api/series";


    let series: Array<{alt: string, src: string, title: string}> = [];
    let isLoading = true;
    let error = false;

    onMount(async () => {
        await fectSeries();
        // console.log("Series desde comp: ", series);
    });

    const fectSeries = async () => {
        try {
            isLoading = true;
            error = false;
            const data = await getSeriesForCarrousel();
            if (!data) {
                series = [];
                error = true;
                throw new Error('No Serie found');
            }else{
                series = data;
            }
        } catch (error) {
            console.error("Error fetching series:", error);
            error = true;
            series = [];
        }finally {
            isLoading = false;
        }
    };
        
    // const images = [
    //     {alt: 'Logo de la serie Base', src: 'https://images.pokemontcg.io/base2/logo.png', title: 'Base'},
    //     {alt: 'Logo de la serie E-Card', src: 'https://images.pokemontcg.io/ecard2/logo.png', title: 'E-Card'}
    // ]
</script>

<section class="carousel-pr p-10 bg-gradient-to-b from-gray-300 to-gray-500 overflow-hidden">
    <div class="container mx-auto">
        <!-- titulo -->
        <div class="text-center mb-16">
            <h2 class="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-600 to-gray-900 bg-clip-text text-transparent mb-4 tracking-tight">
                Series
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-rose-500 mx-auto rounded-full"></div>
            <p class="text-gray-800 mt-6 text-lg max-w-2xl mx-auto">
                Descubre nuestra colección de series
            </p>
        </div>


        {#if isLoading}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg">Cargando series...</p>
            </div>
        {:else if error}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg text-red-500">Error al cargar las series</p>
            </div>
        {:else if series.length > 0}
            <Carousel images={series} class="h-96 caraousel-p ">
                <Controls />
            </Carousel>
        {:else}
            <div class="flex flex-col justify-center items-center h-96">
                <div class="bg-gray-500/10 border border-gray-500/20 rounded-2xl p-8 backdrop-blur-sm">
                    <div class="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                    </div>
                    <p class="text-xl text-gray-400 font-medium text-center">No hay series disponibles</p>
                    <p class="text-gray-500 text-center mt-2">Vuelve pronto para ver nuevo contenido</p>
                </div>
            </div>
        {/if}
    </div>
</section>

<style>
  :global(.caraousel-p img) {
    object-fit: contain !important;
  }
</style>