<script lang="ts">
    import NavigateButton from "$lib/components/Navigate-button.svelte";
    import { onMount } from "svelte";
    import { getRandomCard } from "$lib/api/cards";

    type Card = {
        id: string;
        name: string;
        image: string;
    };

let uniqueCards: Card[] = [];
    let loading = true;
    let error = "";

    async function fetchRandomDeck() {
        loading = true;
        error = "";
        try {
            const numCards = 12;
            const seen = new Set();
            const cards: Card[] = [];
            let attempts = 0;
            while (cards.length < numCards && attempts < 50) { // evita bucle infinito
                const card = await getRandomCard();
                if (card && !seen.has(card.id)) {
                    seen.add(card.id);
                    cards.push({
                        id: card.id,
                        name: card.name,
                        image: card.imageUrl || card.image
                    });
                }
                attempts++;
            }
            uniqueCards = cards;
        } catch (e) {
            console.error("Error fetching random deck:", e);
            uniqueCards = [];
        }
        loading = false;
    }

    onMount(fetchRandomDeck);
</script>

<section class="mx-auto container py-8">
    <h2 class="text-2xl font-bold mb-4">Generador de Barajas</h2>
    <span class="flex">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {#each Array(12) as _, i}
                {#if uniqueCards[i]}
                    <div class="relative shadow rounded-md flex flex-col items-center">
                        <img
                            src={uniqueCards[i].image}
                            alt={uniqueCards[i].name}
                            class="w-auto h-40 object-contain mb-2"
                            loading="lazy"
                        />
                    </div>
                {:else}
                    <div class="relative shadow rounded-md flex flex-col items-center animate-pulse bg-gray-100 min-h-[176px] w-full">
                        <div class="w-32 h-40 bg-gray-300 rounded mb-2"></div>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="flex flex-1 flex-col items-center justify-center">
            <NavigateButton href="/generador-barajas">
                Ir a Generador de Barajas
            </NavigateButton>
        </div>
    </span>
</section>
