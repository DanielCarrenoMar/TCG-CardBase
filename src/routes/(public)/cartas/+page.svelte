<script lang="ts">
  import { onMount } from "svelte";
  import { getCardFromQuery } from "$lib/api/cards";
  import { Query, type CardResume } from "@tcgdex/sdk";
  import SelectButton from "$lib/components/SelectButton.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import AcancedSearchDropdown from "./_components/AvancedSearchDropdown.svelte";

  let cards: CardResume[] = [];
  let loading = true;
  let error = "";

  // Ejemplo: obtener 5 cartas aleatorias
  async function fetchCards() {
    loading = true;
    error = "";
    cards = [];
    try {
      cards = await getCardFromQuery(Query.create(), 0);
    } catch (e) {
      error = "Error al cargar cartas";
    }
    loading = false;
  }

  onMount(fetchCards);
</script>

<section class="bg-white">
  <div class="mx-auto container py-4">
    <h2 class="text-2xl">Buscar por nombre</h2>
    <SearchBar search={"prueba"} />
    
  </div>
  <AcancedSearchDropdown />
</section>
<main>
  <section class="bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100">
    <div class="mx-auto container py-4">
      <header class="flex flex-col gap-4 py-4">
        <h3 class="text-xl">Ordenar por</h3>
        <span class="flex">
          <SelectButton selected={false} onClick={() => {}}>Id</SelectButton>
          <SelectButton selected={false} onClick={() => {}}>
            Nombre
          </SelectButton>
        </span>
      </header>

      {#if loading}
        <div class="text-center py-10">Cargando cartas...</div>
      {:else if error}
        <div class="text-red-500">{error}</div>
      {:else}
        <div class="flex flex-wrap gap-6 justify-center">
          {#each cards as card}
            <div
              class="bg-white rounded-lg shadow-lg p-2 w-48 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img
                src={card.image + `/low.webp`}
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
  </section>
</main>
