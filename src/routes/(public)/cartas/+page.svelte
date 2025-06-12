<script lang="ts">
  import { onMount } from 'svelte';
  import { getCardFromQuery } from '$lib/api/cards';
  import { Query, type CardResume } from '@tcgdex/sdk';

  let cards: CardResume[] = [];
  let loading = true;
  let error = '';

  // Ejemplo: obtener 5 cartas aleatorias
  async function fetchCards() {
    loading = true;
    error = '';
    cards = [];
    try {
      cards = await getCardFromQuery(Query.create(), 0)
    } catch (e) {
      error = 'Error al cargar cartas';
    }
    loading = false;
    console.log(cards);
  }

  onMount(fetchCards);
</script>

<div class="w-full min-h-screen bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100 p-4">
  <div class="max-w-6xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Cartas</h1>
    {#if loading}
      <div class="text-center py-10">Cargando cartas...</div>
    {:else if error}
      <div class="text-red-500">{error}</div>
    {:else}
      <div class="flex flex-wrap gap-6 justify-center">
        {#each cards as card}
          <div class="bg-white rounded-lg shadow-lg p-2 w-48 flex flex-col items-center hover:scale-105 transition-transform">
            <img
              src={card.image+ `/low.webp`}
              alt={card.name}
              class="w-full h-64 object-contain rounded mb-2 border border-gray-200"
              loading="lazy"
            />
            <div class="text-center">
              <div class="font-semibold text-lg">{card.name}</div>
              <div class="text-xs text-gray-500">ID: {card.id}</div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

