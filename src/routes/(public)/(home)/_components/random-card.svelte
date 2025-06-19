<script lang="ts">
    import { onMount } from 'svelte';
    import { getRandomCard, getCardFromId } from '$lib/api/cards';
    import AppGeneralButton from '$lib/components/app-general-button.svelte';
    import DropdownCard from '$lib/components/DropdownCard.svelte';
    import { fade, scale } from 'svelte/transition';

    let card: any = null;
    let cardImage: string | undefined = undefined;
    let isLoading = true;
    let showPopup = false;

    // Para el dialog con info completa
    let dialogCard = null;
    let dialogLoading = false;

    // function to fetch a random card
    onMount(async () => {
        await fetchCard();
    });

    const fetchCard = async () => {
        isLoading = true;
        try {
            const fetchCard = await getRandomCard();                //obtengo una carta aleatoria
            if (!fetchCard) {
                throw new Error('No card found');
            }else {
                console.log('Random card obtenida exitosamente:', fetchCard);
                card = fetchCard;    
                cardImage = card.imageUrl || card.image + '/low.webp';        
                // cardImage = card ? card.getImageURL('high', 'webp') || card.image + '/low.webp' : undefined;    
            }
        } catch (error) {
            console.error('Error fetching random card:', error);
        } finally {
            isLoading = false;
        }
    }

    //control del popup usando DropdownCard
    async function popup() {
        showPopup = true;
        dialogLoading = true;
        dialogCard = null;
        try {
            // Si card tiene id, busca la info completa
            if (card?.id) {
                const fullCard = await getCardFromId(card.id);
                console.log('Carta aleatoria completa:', fullCard);
                dialogCard = fullCard;
            }
        } catch (e) {
            dialogCard = null;
        } finally {
            dialogLoading = false;
        }
    }
</script>

<section class="p-10 bg-gradient-to-b from-gray-300 to-gray-500 overflow-hidden">
    <h2 class="text-5xl md:text-7xl text-center font-black bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900 bg-clip-text text-transparent mb-4 tracking-tight">Carta Pokemon aleatorea</h2>

    <!-- contenedor principal -->
    <div class="container-ha md:flex-row gap-4 mx-auto container relative my-4">
        <!-- contenedor de la carta aleatorea -->
        <div class="flex justify-center items-center">
            {#if isLoading}
                <p>Cargando carta...</p>
            {:else if card}
                <button type="button" on:click={popup} class="p-0 m-0 border-none bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="Ver detalles de la carta aleatoria">
                    <img src={cardImage} alt={card.name} class="card cart-img-size w-48 h-64 cursor-pointer" />
                </button>
            {:else}
                <p>No se pudo cargar la carta.</p>
            {/if}
        </div>

        <!-- descripcion de la carta -->
        <div class="flex-1 gap-4 flex flex-col justify-center items-center px-4 relative z-10">
            {#if card && !isLoading}
                <!-- Tarjeta Principal -->
                <div class="relative max-w-md w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500  hover:shadow-3xl animate-float">
                    
                    <!-- Borde superior decorativo -->
                    <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-400 via-white to-gray-400"></div>
                                        
                    <!-- Contenido principal -->
                    <div class="relative z-10 p-6 sm:p-8">
                        
                        <!-- Header con nombre y tipo -->
                        <div class="flex flex-col md:flex-row gap-2 justify-between items-center mb-4 pb-2 border-b-2 border-gray-300">
                            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">{card.name}</h1>
                            <div class="bg-gradient-to-r from-gray-300 to-gray-400 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-lg">{card.types ? card.types.join(', ') : 'Tipo Desconocido'}</div>
                        </div>

                        <!-- Sección HP -->
                        <div class="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-4 mb-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                            <!-- descrp -->
                            <div class="flex flex-col md:flex-row justify-between items-center">
                                <span class="text-gray-600 font-semibold text-lg">Puntos de Vida</span>
                                <div class="flex items-center gap-3">
                                    <span class="text-4xl md:text-sm font-black text-grey-500 drop-shadow-lg">{card.hp}</span>
                                </div>
                            </div>
                        </div>

                        <!-- seccion de Habilidades -->
                        <div class="mb-6">
                            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <div class="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                                {card.abilities && card.abilities.length > 0 ?  'Habilidad' : 'Sin Habilidades'}
                            </h2>
                            
                            {#if card.abilities && card.abilities.length > 0}
                                {#each card.abilities as ability}
                                    <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-x-1 group mb-4">
                                        <div class="flex justify-between items-start">
                                            <div class="flex items-center gap-2">
                                                <span class="text-blue-500 text-lg">🔮</span>
                                                <span class="font-bold text-gray-800 text-lg">{ability.name}</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-600 text-sm md:hidden leading-relaxed group-hover:text-gray-700 transition-colors">
                                            {ability.effect || 'Sin descripción disponible.'}
                                        </p>
                                    </div>
                                {/each}
                            {/if}
                        </div>

                        <!-- seccion de ataque -->
                        <div class="mb-6">
                            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <div class="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                                {card.attacks && card.attacks.length > 0 ?  'Ataques' : 'Sin Ataques'}
                            </h2>

                            {#if card.attacks }
                                {#each card.attacks as attack}
                                    <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-x-1 group mb-4">
                                        <!-- descrip -->
                                        <div class="flex flex-col md:flex-row justify-between items-center mb-1">
                                            <div class="flex justify-between">
                                                <span class="text-blue-500 text-lg">⚔️</span>
                                                <span class="font-bold text-gray-800 text-lg">{attack.name}</span>                                                
                                            </div>
                                            <div class="flex items-center gap-3">
                                                <span class="text-4xl md:text-xl font-black text-red-500 drop-shadow-lg">{attack.damage}</span>
                                            </div>
                                        </div>
                                     </div>   
                                {/each}        
                            {/if}
                        </div>

                        <!-- seccion de debilidades -->
                        <div class="mb-6">
                            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <div class="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                                {card.weaknesses && card.weaknesses.length > 0 ?  'Debilidades' : 'Sin Debilidades'}
                            </h2>

                            {#if card.weaknesses && card.weaknesses.length > 0}
                                {#each card.weaknesses as weakness}
                                    <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-x-1 group mb-4">
                                        <!-- descr -->
                                        <div class="flex flex-col md:flex-row justify-between items-start">
                                            <div class="flex items-center gap-2">
                                                <span class="text-red-500 text-lg">⚠️</span>
                                                <span class="font-bold text-gray-800 text-lg">{weakness.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                {/each}
                            {/if}                        
                        </div>
                    </div>

                    <!-- Efecto de brillo en el borde -->
                    <div class="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            {/if}
        </div>
    </div>

    <!-- boton para obtener otra carta -->
    <div class="flex justify-center items-center mt-6">   
        <AppGeneralButton
            isLoading={isLoading}
            onClick={fetchCard}
        >
            Obtener Otra Carta
        </AppGeneralButton>
    </div> 

    <!-- mostrar modal de la carta usando DropdownCard -->
    <DropdownCard
        open={showPopup}
        card={card}
        loading={dialogLoading}
        on:close={() => showPopup = false}
    />
</section>

<style>
    .cart-img-size{
        height: auto;
        width: min(25rem, 80%);
    }
</style>