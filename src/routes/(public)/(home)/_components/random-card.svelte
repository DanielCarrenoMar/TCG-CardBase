<script lang="ts">
    import { onMount } from 'svelte';
    import { getRandomCard } from '$lib/api/cards';
    import { fade, scale } from 'svelte/transition';

    let card: any = null;
    let cardImage: string | undefined = undefined;
    let isLoading = true;
    let showPopup = false;

    // function to fetch a random card
    onMount(async () => {
        isLoading = true;
        try {
            const fetchCard = await getRandomCard();                //obtengo una carta aleatoria
            if (!fetchCard) {
                throw new Error('No card found');
            }else {
                console.log('Random card obtenida exitosamente:', fetchCard);
                card = fetchCard;            
                cardImage = card ? card.getImageURL('high', 'webp') : undefined;    
            }
        } catch (error) {
            console.error('Error fetching random card:', error);
        } finally {
            isLoading = false;
        }
    });

    const fecthNewCard = async () => {
        isLoading = true;
        card = await getRandomCard();
        cardImage = card ? card.getImageURL('high', 'webp') : undefined;    
        isLoading = false;
        return card;
    };

    function popup() {
        showPopup = !showPopup;
    }

    // Function to get the image URL of the card
</script>



<section class="p-10 bg-gradient-to-b from-gray-300 to-gray-500 overflow-hidden">
    <h2 class="text-2xl font-bold text-center mb-2">Carta Pokemon aleatorea</h2>

    <!-- mobile frist -->
    <div class="flex flex-col md:flex-row gap-4 mx-auto container relative">
        <!-- imagen de la carta aleatorea -->
        <div class="flex justify-center items-center">
            {#if isLoading}
                <p>Cargando carta...</p>
            {:else if card}
                <div class="card" on:click={popup}>
                    <img src={cardImage} alt={card.name} class="w-48 h-64 cursor-pointer" /> 
                    <h3 class="text-lg font-semibold mt-2 text-center">{card.name}</h3>
                </div>
            {:else}
                <p>No se pudo cargar la carta.</p>
            {/if}
        </div>
        <!-- descripcion de la carta -->
        <div class="flex-1 gap-8 flex flex-col justify-center items-center px-4 relative z-10">
            <button
                class="mt-4 px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-400 font-bold cursor-pointer transition-colors duration-300"
                on:click={fecthNewCard}>
                Obtener Otra Carta
            </button>
        </div>
    </div>

    <!-- mostrar modal de la carta -->
    {#if showPopup}
        <div
            class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            in:fade="{{ duration: 200 }}"   out:fade="{{ duration: 200 }}"  on:click|self={popup}            >
            <div
                class="bg-transparent rounded-lg shadow-xl p-6 relative max-w-lg w-full"
                in:scale="{{ start: 0.9, duration: 200 }}"  out:scale="{{ start: 0.9, duration: 200 }}" >
                <button
                    class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold cursor-pointer"
                    on:click={popup}
                >
                    &times;
                </button>

                {#if card}
                    <h3 class="text-2xl font-bold text-center mb-4">{card.name}</h3>
                    <div class="flex flex-col md:flex-row items-center gap-4">
                        <img src={cardImage} alt={card.name} class="max-w-xs h-auto rounded-lg shadow-md mx-auto" />
                    </div>
                {:else}
                    <p>No se pudo cargar la información detallada de la carta.</p>
                {/if}
            </div>
        </div>
    {/if}

</section>