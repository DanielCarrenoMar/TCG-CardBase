<script lang="ts">
    import { Carousel, Controls } from "flowbite-svelte";
    import { onMount } from 'svelte';
    import { getSeriesForCarrousel } from "$lib/api/series";
    import AppGeneralButton from "$lib/components/app-general-button.svelte";


    let series: Array<{alt: string, src: string, title: string}> = [];
    let isLoading = true;
    let error = false;

    onMount(async () => {
        await fetchSeries();
        // console.log("Series desde comp: ", series);
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
        
    // const images = [
    //     {alt: 'Logo de la serie Base', src: 'https://images.pokemontcg.io/base2/logo.png', title: 'Base'},
    //     {alt: 'Logo de la serie E-Card', src: 'https://images.pokemontcg.io/ecard2/logo.png', title: 'E-Card'}
    // ]
</script>

<section class="p-10 bg-gradient-to-b from-gray-300 to-gray-500 overflow-hidden">
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-center mb-4">Series</h2>

        {#if isLoading}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg">Cargando series...</p>
            </div>
        {:else if error}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg text-red-500">Error al cargar las series</p>
            </div>
        {:else if series.length > 0}
            <Carousel images={series} class="h-96">
                <Controls />
            </Carousel>
        {:else}
            <div class="flex justify-center items-center h-96">
                <p class="text-lg">No hay series disponibles</p>
            </div>
        {/if}

        <AppGeneralButton isLoading={isLoading} onClick={fetchSeries}>
            Cargar más series
        </AppGeneralButton>
    </div>
</section>