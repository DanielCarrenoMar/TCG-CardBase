<script lang="ts">
	import { pageTexts } from '$lib/constants/allTexts';
	import { pageLanguage } from '$lib/language/languajeHandler';
</script>

<section
	class="py-8 bg-gradient-to-b from-primary-400 to-primary-700 overflow-hidden"
>
	<span class="relative flex flex-col md:flex-row mx-auto container">
		<div class="flex-1 md:static absolute left-0 z-0">
			<img
				class="h-full w-full object-cover opacity-40 md:opacity-100"
				src="/images/pokemons/charizard.png"
				alt="charizard"
			/>
		</div>
		<div
			class="flex-1 flex flex-col justify-center items-center px-4 relative z-10"
		>
			<div class="bg-secondary-400 px-4 py-8 rounded text-xl mb-2 mx-8">
				<h2 class="text-3xl md:text-5xl font-bold text-center mb-2">{pageTexts[pageLanguage].enjoyTitle}</h2>
				<p>
					{pageTexts[pageLanguage].enjoyDescription}
				</p>
			</div>
		</div>
	</span>
</section>
