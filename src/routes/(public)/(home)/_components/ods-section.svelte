<script lang="ts">
  import { POKEMON_TYPE_ODS_MAPPING, getTypeImagePath } from '$lib/constants/pokemon-ods-mapping';
  import { goto } from '$app/navigation';
    import { pageLanguage } from '$lib/language/languajeHandler';
    import { pageTexts } from '$lib/constants/allTexts';

  function goToODSPage() {
    goto('/ods');
  }

  // Mostrar solo algunos ejemplos en la página de inicio
  $: featuredODS = POKEMON_TYPE_ODS_MAPPING[pageLanguage].slice(0, 6);
</script>

<section class="bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100 py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-4">
        {pageTexts[pageLanguage].odsSectionTitle}
      </h2>
      <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
        {pageTexts[pageLanguage].odsSectionSubtitle}
      </p>
      <button 
        on:click={goToODSPage}
        class="bg-white text-bg-100 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        {pageTexts[pageLanguage].odsSectionButton}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each featuredODS as mapping}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <img 
                  src={getTypeImagePath(mapping.type)} 
                  alt={pageTexts[pageLanguage].odsSectionCardAlt.replace('{type}', mapping.type)} 
                  class="w-10 h-10"
                />
                <h3 class="text-lg font-bold text-gray-800">{mapping.type}</h3>
              </div>
              <div class="text-right">
                <div class="text-xl font-bold text-green-600">{pageTexts[pageLanguage].odsSectionOds} {mapping.ods.id}</div>
              </div>
            </div>
            
            <img 
              src={mapping.ods.image} 
              alt={mapping.ods.name} 
              class="w-14 h-14 mx-auto mb-3"
            />
            <h4 class="text-base font-semibold text-gray-700 text-center mb-2">
              {mapping.ods.name}
            </h4>
            <p class="text-sm text-gray-600 text-center leading-relaxed">
              {mapping.ods.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center mt-8">
      <p class="text-gray-200 text-lg">
        {pageTexts[pageLanguage].odsSectionExplore}
      </p>
    </div>
  </div>
</section> 