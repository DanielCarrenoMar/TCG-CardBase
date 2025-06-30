<script lang="ts">
    import { goto } from '$app/navigation';                         //manda a otra pagina
    import Symbol_default from "./symbol_default.jpg";
    export let set : any ;     

      // para navegar a carta con los sets 
    function navigateToCards(set: any) {
      if (set ) {        
        goto(`/cartas?set=${set.id}`);
      }
    }
  </script>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer ">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_missing_attribute -->
    <a on:click={() => navigateToCards(set)}>
      <img src={ (set.symbol) == undefined ? Symbol_default : set.symbol + '.webp'} alt={`Logo de ${set.name}`} class="cart-img-size" />
      <div class="p-4">
        <h3 class="font-bold text-xl mb-2">{set.name}</h3>
        <p class="text-gray-700 text-sm">Nro de Cartas: {set.cardCount.total || set.cardCount.official || 'N/A'}</p>
        <p class="text-gray-600 text-xs mt-1">{set.releaseDate || 'Fecha no disponible'}</p>
      </div>
    </a>
  </div> 
  
  <style>
      .cart-img-size{
          height: auto;
          width: min(5rem, 30%);
          justify-self: center;
          padding: 1.5rem 0;
      }
    </style>