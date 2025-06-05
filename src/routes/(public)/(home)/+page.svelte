<script lang="ts">
	import AppNavigateButton from "$lib/components/app-navigate-button.svelte";
	import HomeSlider from "./_components/home-slider.svelte";
</script>

<section class="mx-auto container relative">
	<HomeSlider />
	<div class="absolute inset-0 bg-black/50 z-0"></div>
	<img
		class="absolute left-1/2 top-1/2 -translate-1/2 h-1/2 z-10"
		src="/images/tcg-logo.png"
		alt="logo"
	/>
</section>

<main>
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
				<div class="bg-secondary-400 px-4 py-1 rounded text-xl mb-2 mx-8">
					<h2 class="text-2xl font-bold text-center mb-2">¡Disfruta!</h2>
					<p>
						Experimenta el JCC Pokémon de una manera completamente nueva,
						diseñada para dispositivos móviles. Disfruta de batallas rápidas y
						sencillas, colecciona cartas digitales únicas con
					</p>
				</div>
			</div>
		</span>
	</section>
	<section
		class="py-8 bg-gradient-to-b from-secondary-400 to-secondary-700 overflow-hidden"
	>
		<span class="relative flex flex-col md:flex-row mx-auto container">
			<div
				class="flex-1 gap-8 flex flex-col justify-center items-center px-4 relative z-10"
			>
				<div class="bg-primary-400 px-4 py-1 rounded text-xl mb-2 mx-8">
					<h2 class="text-2xl font-bold text-center mb-2">Aprende a Jugar</h2>
					<p>
						Experimenta el JCC Pokémon de una manera completamente nueva,
						diseñada para dispositivos móviles. Disfruta de batallas rápidas y
						sencillas, colecciona cartas digitales únicas con
					</p>
				</div>
				<AppNavigateButton href="">Saber más</AppNavigateButton>
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
</main>
