<script lang="ts">
  import { pageTexts } from '$lib/constants/allTexts';
  import { pageLanguage } from '$lib/language/languajeHandler';
</script>

<footer class="bg-[#191b1d] p-8 text-center">
   <div class="mx-auto flex flex-col max-w-[80rem] gap-2">
	   <h2 class="text-primary-600 text-xl font-bold">{pageTexts[pageLanguage].footerTitle}</h2>
	   <p class="text-white">
		   {pageTexts[pageLanguage].footerDev}
	   </p>
	   <p class="text-[#ffffff50] text-xs">
		   {pageTexts[pageLanguage].footerLegal}
	   </p>
   </div>
</footer>
