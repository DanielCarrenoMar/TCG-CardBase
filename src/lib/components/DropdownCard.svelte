<script lang="ts">
  import AppNavigateButton from "./app-navigate-button.svelte";
  export let card: any = null;
  export let open: boolean = false;
  export let loading: boolean = false;

  import { createEventDispatcher, onMount, afterUpdate } from "svelte";
  const dispatch = createEventDispatcher();
  let modalRef: HTMLDivElement | null = null;

  function close() { dispatch("close"); }
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) close();
  }
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") close();
  }
  onMount(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  });
  afterUpdate(() => {
    if (open && modalRef) modalRef.focus();
  });
</script>

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)]"
    role="dialog"
    aria-modal="true"
    tabindex="0"
    bind:this={modalRef}
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="bg-gray-200 rounded-xl shadow-2xl flex flex-col md:flex-row p-6 gap-6 max-w-3xl w-full relative"
         on:click|stopPropagation>
      <button
        class="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black font-bold"
        on:click={close}
        aria-label="Cerrar"
        type="button"
      >×</button>

      {#if loading}
        <div class="flex-1 flex items-center justify-center min-h-[200px]">
          <span class="text-lg text-gray-600">Cargando carta...</span>
        </div>
      {:else if card}
      <!-- {console.log('holaaaaaaaaaa, ', card)}
      {console.log('ey: ', card.image)} -->
        <div class="flex flex-col items-center">
          <img src={card.imageUrl || card.image + '/hight.webp' } alt={card.name} class="w-60 rounded-xl shadow-lg border border-gray-300 bg-white" />
          <AppNavigateButton href={`/cartas/${card.id}`}>Mas Informacion</AppNavigateButton>
        </div>
        <div class="flex-1 flex flex-col gap-2">
          <div class="text-2xl font-bold mb-2">{card.name}</div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            {#if card.hp}
              <span class="text-lg font-bold text-gray-700">HP {card.hp}</span>
            {/if}
            {#if card.types && card.types[0]}
              <span class="text-sm text-gray-700">{card.types[0]}</span>
            {/if}
          </div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            {#if card.rarity}
              <span class="text-sm text-gray-700">Rareza: 
                {card.rarity}
              </span>
            {/if}
          </div>
          <div class="flex flex-col gap-1 mb-2">
            {#if card.attacks && card.attacks.length}
              <span class="text-sm font-semibold text-gray-700">Ataques:</span>
              {#each card.attacks as atk}
                <div class="ml-2 text-gray-700">• {atk.name} {atk.damage ? `(${atk.damage})` : ""}</div>
              {/each}
            {/if}
          </div>
          <div class="flex flex-col gap-1 mb-2">
            {#if card.weaknesses && card.weaknesses.length}
              <span class="text-sm font-semibold text-gray-700">Debilidades:</span>
              {#each card.weaknesses as w}
                <div class="ml-2 text-gray-700">• {w.type} {w.value}</div>
              {/each}
            {/if}
          </div>
          {#if card.description}
            <div class="mt-2 text-gray-700">{card.description}</div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}