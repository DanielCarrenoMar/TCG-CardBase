<script lang="ts">
    import { Carousel, Controls } from "flowbite-svelte";
    import { onMount } from 'svelte';
    import { getSeriesForCarrousel } from "$lib/api/series";
    import NavigateButton from "$lib/components/Navigate-button.svelte";
    import { pageTexts } from '$lib/constants/allTexts';
    import { pageLanguage } from '$lib/language/languajeHandler';

    let series: Array<{alt: string, src: string, title: string}> = [];
    let isLoading = true;
    let error = false;

    onMount(async () => {
        await fetchSeries();
    });

    const fetchSeries = async () => {
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
</script>

<section class="carousel-pr p-10 bg-gradient-to-b from-gray-300 to-gray-500  overflow-hidden">
    <div class="container mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 tracking-tight">
                {pageTexts[pageLanguage].seriesSectionTitle}
            </h2>
            <p class="text-gray-800 mt-6 text-lg max-w-2xl mx-auto">
                {pageTexts[pageLanguage].seriesSectionSubtitle}
            </p>
        </div>


        {#if isLoading}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg">{pageTexts[pageLanguage].seriesSectionLoading}</p>
            </div>
        {:else if error}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg text-red-500">{pageTexts[pageLanguage].seriesSectionError}</p>
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
                    <p class="text-xl text-gray-400 font-medium text-center">{pageTexts[pageLanguage].seriesSectionEmpty}</p>
                    <p class="text-gray-500 text-center mt-2">{pageTexts[pageLanguage].seriesSectionEmptySubtitle}</p>
                </div>
            </div>
        {/if}

        <div class="flex justify-center mt-12">
            <NavigateButton href="series">
                {pageTexts[pageLanguage].seriesSectionButton}
            </NavigateButton>
        </div>
    </div>
</section>

<style>
  :global(.caraousel-p img) {
    object-fit: contain !important;
  }
</style>