<script lang="ts">
  import { goto } from '$app/navigation';
  export let serie;
  import { pageLanguage } from '$lib/language/languajeHandler';
  import { pageTexts } from '$lib/constants/allTexts';
  // para navegar a expansiones con los sets de la serie
  function navigateToExpansions(serie: any) {
    if (serie.sets && serie.sets.length > 0) {
      goto(`/expansiones?serie=${serie.id}`);
    }
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_missing_attribute -->
  <a on:click={() => navigateToExpansions(serie)}>
    <img src={serie.src} alt={pageTexts[pageLanguage].serieCardLogoAlt.replace('{name}', serie.name)} class="cart-img-size" />
    <div class="p-4">
      <h3 class="font-bold text-xl mb-2">{serie.name}</h3>
      <p class="text-gray-700 text-sm">{pageTexts[pageLanguage].serieCardNumExpansions}: {serie.sets.length}</p>
      <p class="text-gray-600 text-xs mt-1">{serie.releaseDate}</p>
    </div>
  </a>
</div> 

<style>
    .cart-img-size{
        height: auto;
        width: min(15rem, 80%);
        justify-self: center;
        padding: 1.5rem 0;
    }
  </style>