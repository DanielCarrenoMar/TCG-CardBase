
<script lang="ts">
	import NavigateButton from "$lib/components/Navigate-button.svelte";
	import { pageTexts } from '$lib/constants/allTexts';
	import { pageLanguage } from '$lib/language/languajeHandler';
</script>

<section class="py-8 bg-gradient-to-b from-secondary-400 to-secondary-700 overflow-hidden">
	<span class="relative flex flex-col md:flex-row mx-auto container">
		<div class="flex-1 gap-8 flex flex-col justify-center items-center px-4 relative z-10">
			<div class="bg-primary-400 px-4 py-8 rounded text-xl mb-2 mx-8">
				<h2 class="text-3xl md:text-5xl font-bold text-center mb-2">{pageTexts[pageLanguage].tutorialSectionTitle}</h2>
				<p>
					{pageTexts[pageLanguage].tutorialSectionDescription}
				</p>
			</div>
			<NavigateButton href="como_jugar">{pageTexts[pageLanguage].tutorialSectionButton}</NavigateButton>
		</div>
		<div class="flex-1 md:static absolute left-0 z-0">
			<img
				class="h-full w-full object-cover opacity-40 md:opacity-100"
				src="/images/pokemons/bulbasaur.png"
				alt="bulbasaur"
			/>
		</div>
	</span>
</section>
