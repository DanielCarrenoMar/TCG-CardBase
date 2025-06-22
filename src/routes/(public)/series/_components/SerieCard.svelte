<script lang="ts">
  export let serie;  
</script>

<div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
  <img src={serie.src} alt={`Logo de ${serie.name}`} class="cart-img-size" />
  <div class="p-4">
    <h3 class="font-bold text-xl mb-2">{serie.name}</h3>
    <p class="text-gray-700 text-sm">Nro de Expansiones: {serie.sets.length}</p>
    <p class="text-gray-600 text-xs mt-1">{serie.releaseDate}</p>
  </div>
</div> 

<style>
    .cart-img-size{
        height: auto;
        width: min(15rem, 80%);
        justify-self: center;
        padding: 1.5rem 0;
    }
  </style>