<script lang="ts">
    import type { CardModel } from "@tcgdex/sdk";
  import NavigateButton from "./Navigate-button.svelte";
  export let card: CardModel
  export let open: boolean = false;
  export let loading: boolean = false;

  import { createEventDispatcher, onMount, afterUpdate } from "svelte";
    import type { Card } from "flowbite-svelte";
  const dispatch = createEventDispatcher();
  let modalRef: HTMLDivElement | null = null;

  // Función para obtener la imagen del tipo
  function getTypeImage(type: string): string {
    const cleanType = type.replace(/guego/gi, 'Fuego')
                         .replace(/incolora/gi, 'Normal')
                         .replace(/metalica/gi, 'Hada')
                         .replace(/Metálica/gi, 'Acero')
                         .replace(/Oscura/gi, 'Siniestro');
    
    const typeImages: { [key: string]: string } = {
      'Fuego': 'src/lib/images/fire.png',
      'Agua': 'src/lib/images/water.png',
      'Planta': 'src/lib/images/grass.png',
      'Rayo': 'src/lib/images/electric.png',
      'Psíquico': 'src/lib/images/psychic.png',
      'Lucha': 'src/lib/images/fighting.png',
      'Normal': 'src/lib/images/normal.png',
      'Hada': 'src/lib/images/fairy.png',
      'Acero': 'src/lib/images/steel.png',
      'Siniestro': 'src/lib/images/dark.png',
      'Dragón': 'src/lib/images/dragon.png',
    };
    
    return typeImages[cleanType] || 'src/lib/components/images/types/unknown.png';
  }

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
    
    <div class="bg-gray-200 rounded-xl shadow-2xl flex flex-col md:flex-row p-6 gap-6 max-w-3xl w-full relative"
         on:click|stopPropagation>
      <button
        class="absolute cursor-pointer top-3 right-3 text-2xl text-gray-600 hover:text-black font-bold"
        on:click={close}
        aria-label="Cerrar"
        type="button"
      >X</button>

      {#if loading}
        <div class="flex-1 flex items-center justify-center min-h-[200px]">
          <span class="text-lg text-gray-600">Cargando carta...</span>
        </div>
      {:else if card}
        <div class="flex flex-col items-center">
          <img src={card.imageUrl || card.image + '/hight.webp' } alt={card.name} class="w-60 rounded-xl shadow-lg border border-gray-300 bg-white" />
          <NavigateButton href={`/cartas/info-carta`} query={"?cardID=" + card.id}>Mas Informacion</NavigateButton>
        </div>
        <div class="flex-1 flex flex-col gap-2">
          <div class="text-2xl font-bold mb-2">{card.name}</div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            {#if card.hp}
              <span class="text-lg font-bold text-gray-700">HP {card.hp}</span>
            {/if}
          </div>
          {#if card.types && card.types[0]}
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="text-lg font-bold text-gray-700">Tipo: </span>
              <span class="text-lg text-gray-700">
                {card.types[0].replace(/guego/gi, 'Fuego').replace(/incolora/gi, 'Normal').replace(/metalica/gi, 'Hada').replace(/Metálica/gi, 'Acero').replace(/Oscura/gi, 'Siniestro')}
              </span>
              <img 
                src={getTypeImage(card.types[0])} 
                alt="Tipo {card.types[0]}" 
                class="w-8 h-8 ml-4"
              />
            </div>
          {/if}
          <div class="flex flex-wrap items-center gap-2 mb-2">
            {#if card.rarity}
              <span class="text-lg font-bold text-gray-700">Rareza: </span>
              <span class="text-lg text-gray-700">
                {card.rarity}
              </span>
            {/if}
          </div>
          <div class="flex flex-col gap-1 mb-2">
            {#if card.attacks && card.attacks.length}
              <span class="text-lg font-bold text-gray-700">Ataques:</span>
              {#each card.attacks as atk}
                <div class="ml-2 text-gray-700">• {atk.name} {atk.damage ? `(${atk.damage})` : ""} <span class="ml-5 text-blue-500 text-lg">⚔️</span></div>
              {/each}
            {/if}
          </div>
          <div class="flex flex-col gap-1 mb-2">
            {#if card.weaknesses && card.weaknesses.length}
              <span class="text-lg font-bold text-gray-700">Debilidades:</span>
              {#each card.weaknesses as w}
                <div class="ml-2 text-gray-700 flex items-center gap-2">
                  <span>• {w.type.replace(/guego/gi, 'Fuego').replace(/metalica/gi, 'Hada').replace(/Metálica/gi, 'Acero').replace(/Oscura/gi, 'Siniestro')} {w.value}</span>
                  <img 
                    src={getTypeImage(w.type)} 
                    alt="Tipo {w.type}" 
                    class="w-8 h-8 ml-4"
                  />
                </div>
              {/each}
            {/if}
          </div>
          {#if card.description}
            <span class="font-bold text-lg text-gray-700">Descripcion:</span>
            <div class="mt-2 text-gray-700">{card.description}</div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}