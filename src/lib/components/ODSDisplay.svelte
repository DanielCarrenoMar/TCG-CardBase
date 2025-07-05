<script lang="ts">
  import { POKEMON_TYPE_ODS_MAPPING, getTypeImagePath } from '$lib/constants/pokemon-ods-mapping';

  export let selectedType: string = '';
  export let showAll: boolean = false;

  $: filteredODS = showAll 
    ? POKEMON_TYPE_ODS_MAPPING 
    : POKEMON_TYPE_ODS_MAPPING.filter(mapping => mapping.type === selectedType);
</script>

<div class="bg-white rounded-lg shadow-lg p-6 mb-6">
  <h3 class="text-xl font-bold text-gray-800 mb-4">
    {#if showAll}
      Objetivos de Desarrollo Sostenible (ODS) y Tipos Pokémon
    {:else if selectedType}
      ODS relacionada con {selectedType}
    {:else}
      Selecciona un tipo para ver su ODS relacionada
    {/if}
  </h3>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each filteredODS as mapping}
      <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div class="flex items-center gap-3 mb-3">
          <img 
            src={getTypeImagePath(mapping.type)} 
            alt="Tipo {mapping.type}" 
            class="w-8 h-8"
          />
          <span class="font-semibold text-gray-700">{mapping.type}</span>
        </div>
        
        <div class="flex items-center gap-3 mb-3">
          <img 
            src={mapping.ods.image} 
            alt={mapping.ods.name} 
            class="w-12 h-12"
          />
          <div>
            <div class="font-bold text-green-600">ODS {mapping.ods.id}</div>
            <div class="text-sm text-gray-600">{mapping.ods.name}</div>
          </div>
        </div>
        
        <p class="text-xs text-gray-500 leading-relaxed">
          {mapping.ods.description}
        </p>
      </div>
    {/each}
  </div>
  
  {#if !showAll && !selectedType}
    <div class="text-center text-gray-500 mt-4">
      Haz clic en un tipo de Pokémon para ver su ODS relacionada
    </div>
  {/if}
</div> 