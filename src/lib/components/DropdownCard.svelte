<script lang="ts">
  import type { CardModel } from "@tcgdex/sdk";
  import NavigateButton from "./Navigate-button.svelte";
  import {TYPES} from "./constants";
  export let card: CardModel
  export let open: boolean = false;
  export let loading: boolean = false;
  import { createEventDispatcher, onMount, afterUpdate } from "svelte";
    import { pageTexts } from "$lib/constants/allTexts";
    import { pageLanguage } from "$lib/language/languajeHandler";
  const dispatch = createEventDispatcher();
  let modalRef: HTMLDivElement | null = null;

  // Función para obtener la imagen del tipo
  export function getTypeImage(type: string): string {
    // Normaliza tanto en español como en inglés
    let cleanType = type
      .replace(/guego/gi, 'Fuego')
      .replace(/fire/gi, 'Fuego')
      .replace(/agua/gi, 'Agua')
      .replace(/water/gi, 'Agua')
      .replace(/planta/gi, 'Planta')
      .replace(/grass/gi, 'Planta')
      .replace(/rayo/gi, 'Rayo')
      .replace(/electric/gi, 'Rayo')
      .replace(/psíquico/gi, 'Psíquico')
      .replace(/psychic/gi, 'Psíquico')
      .replace(/lucha/gi, 'Lucha')
      .replace(/fighting/gi, 'Lucha')
      .replace(/incolora/gi, 'Normal')
      .replace(/normal/gi, 'Normal')
      .replace(/metalica/gi, 'Hada')
      .replace(/fairy/gi, 'Hada')
      .replace(/hada/gi, 'Hada')
      .replace(/Metálica/gi, 'Acero')
      .replace(/steel/gi, 'Acero')
      .replace(/Oscura/gi, 'Siniestro')
      .replace(/darkness/gi, 'Siniestro')
      .replace(/dragón/gi, 'Dragón')
      .replace(/dragon/gi, 'Dragón');

    const typeImages: { [key: string]: string } = {
      'Fuego': TYPES.fire,
      'Agua': TYPES.water,
      'Planta': TYPES.grass,
      'Rayo': TYPES.electric,
      'Psíquico': TYPES.psychic,
      'Lucha': TYPES.fighting,
      'Normal': TYPES.normal,
      'Hada': TYPES.fairy,
      'Acero': TYPES.steel,
      'Siniestro': TYPES.dark,
      'Dragón': TYPES.dragon,
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
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)] p-4 md:p-0"
    role="dialog"
    aria-modal="true"
    tabindex="0"
    bind:this={modalRef}
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
  >
    
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="bg-gray-200 rounded-xl shadow-2xl flex flex-col md:flex-row p-4 md:p-6 gap-4 md:gap-6 max-w-3xl w-full max-h-[90vh] md:max-h-none relative"
         on:click|stopPropagation>
      <button
        class="absolute cursor-pointer top-2 md:top-3 right-2 md:right-3 text-xl md:text-2xl text-gray-600 hover:text-black font-bold z-10"
        on:click={close}
        aria-label="Cerrar"
        type="button"
      >X</button>

      {#if loading}
        <div class="flex-1 flex items-center justify-center min-h-[200px]">
          <span class="text-lg text-gray-600">Cargando carta...</span>
        </div>
      {:else if card}
       
        <div class="flex flex-col items-center md:hidden overflow-y-auto max-h-full">
          <img src={card.imageUrl || card.image + '/hight.webp' } alt={card.name} class="w-48 md:w-60 rounded-xl shadow-lg border border-gray-300 bg-white mb-4" />
          
          <div class="flex-1 flex flex-col gap-2 w-full text-center">
            <div class="text-2xl md:text-2xl font-bold mb-2">{pageTexts[pageLanguage].cardName ?? card.name}</div>
            <div class="flex flex-col gap-1 mb-2">
              {#if card.hp}
                <span class="text-lg md:text-lg font-bold text-gray-700">{pageTexts[pageLanguage].hp ?? 'HP'} {card.hp}</span>
              {/if}
            </div>
            {#if card.types && card.types[0]}
              <div class="flex flex-col gap-1 mb-2">
                <span class="text-lg md:text-lg font-bold text-gray-700">{pageTexts[pageLanguage].type ?? 'Tipo'}: </span>
                <div class="flex items-center justify-center gap-2">
                  <span class="text-lg md:text-lg text-gray-700">
                    {card.types[0].replace(/guego/gi, 'Fuego').replace(/incolora/gi, 'Normal').replace(/metalica/gi, 'Hada').replace(/Metálica/gi, 'Acero').replace(/Oscura/gi, 'Siniestro')}
                  </span>
                  <img 
                    src={getTypeImage(card.types[0])} 
                    alt="Tipo {card.types[0]}" 
                    class="w-7 h-7 md:w-8 md:h-8"
                  />
                </div>
              </div>
            {/if}
            <div class="flex flex-col gap-1 mb-2">
              {#if card.rarity}
                <span class="text-lg md:text-lg font-bold text-gray-700">{pageTexts[pageLanguage].rarity ?? 'Rareza'}: </span>
                <span class="text-lg md:text-lg text-gray-700">
                  {card.rarity}
                </span>
              {/if}
            </div>
            <div class="flex flex-col gap-1 mb-2">
              {#if card.attacks && card.attacks.length}
                <span class="text-lg md:text-lg font-bold text-gray-700">{pageTexts[pageLanguage].attacks ?? 'Ataques'}:</span>
                {#each card.attacks as atk}
                  <div class="text-base md:text-base text-gray-700">• {atk.name} {atk.damage ? `(${atk.damage})` : ""} <span class="ml-2 md:ml-5 text-blue-500 text-base md:text-lg">⚔️</span></div>
                {/each}
              {/if}
            </div>
            <div class="flex flex-col gap-1 mb-2">
              {#if card.weaknesses && card.weaknesses.length}
                <span class="text-lg md:text-lg font-bold text-gray-700">{pageTexts[pageLanguage].weaknesses ?? 'Debilidades'}:</span>
                {#each card.weaknesses as w}
                  <div class="text-base md:text-base text-gray-700 flex items-center gap-2 justify-center">
                    <span>• {w.type.replace(/guego/gi, 'Fuego').replace(/metalica/gi, 'Hada').replace(/Metálica/gi, 'Acero').replace(/Oscura/gi, 'Siniestro')} {w.value}</span>
                    <img 
                      src={getTypeImage(w.type)} 
                      alt="Tipo {w.type}" 
                      class="w-7 h-7 md:w-8 md:h-8"
                    />
                  </div>
                {/each}
              {/if}
            </div>
            {#if card.description}
              <span class="text-lg md:text-lg font-bold text-gray-700">{pageTexts[pageLanguage].description ?? 'Descripcion'}:</span>
              <div class="mt-2 text-base md:text-base text-gray-700">{card.description}</div>
            {/if}
          </div>
          
          <NavigateButton href={`/cartas/info-carta`} query={"?cardID=" + card.id} class="mt-4 w-full">{pageTexts[pageLanguage].moreInfo ?? 'Más Información'}</NavigateButton>
        </div>

        
        <div class="hidden md:flex flex-col items-center">
          <img src={card.imageUrl || card.image + '/hight.webp' } alt={card.name} class="w-60 rounded-xl shadow-lg border border-gray-300 bg-white" />
          <NavigateButton href={`/cartas/info-carta`} query={"?cardID=" + card.id}>{pageTexts[pageLanguage].moreInfo ?? 'Más Información'}</NavigateButton>
        </div>
        <div class="hidden md:flex flex-1 flex flex-col gap-2">
          <div class="text-2xl font-bold mb-2">{pageTexts[pageLanguage].cardName ?? card.name}</div>
          <div class="flex flex-wrap items-center gap-2 mb-2">
            {#if card.hp}
              <span class="text-lg font-bold text-gray-700">{pageTexts[pageLanguage].hp ?? 'HP'} {card.hp}</span>
            {/if}
          </div>
          {#if card.types && card.types[0]}
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="text-lg font-bold text-gray-700">{pageTexts[pageLanguage].type ?? 'Tipo'}: </span>
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
              <span class="text-lg font-bold text-gray-700">{pageTexts[pageLanguage].rarity ?? 'Rareza'}: </span>
              <span class="text-lg text-gray-700">
                {card.rarity}
              </span>
            {/if}
          </div>
          <div class="flex flex-col gap-1 mb-2">
            {#if card.attacks && card.attacks.length}
              <span class="text-lg font-bold text-gray-700">{pageTexts[pageLanguage].attacks ?? 'Ataques'}:</span>
              {#each card.attacks as atk}
                <div class="ml-2 text-gray-700">• {atk.name} {atk.damage ? `(${atk.damage})` : ""} <span class="ml-5 text-blue-500 text-lg">⚔️</span></div>
              {/each}
            {/if}
          </div>
          <div class="flex flex-col gap-1 mb-2">
            {#if card.weaknesses && card.weaknesses.length}
              <span class="text-lg font-bold text-gray-700">{pageTexts[pageLanguage].weaknesses ?? 'Debilidades'}:</span>
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
            <span class="font-bold text-lg text-gray-700">{pageTexts[pageLanguage].description ?? 'Descripcion'}:</span>
            <div class="mt-2 text-gray-700">{card.description}</div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}