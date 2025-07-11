<script lang="ts">
	import NavigateButton from "$lib/components/Navigate-button.svelte";
	import HomeSlider from "./_components/home-slider.svelte";
	import RandomCardSection from "./_components/random-card-section.svelte";
	import SerieSection from "./_components/serie-section.svelte";
	import DescriptionSection from "./_components/description-section.svelte";
	import TutorialSection from "./_components/tutorial-section.svelte";
    import VideogamesSection from "./_components/videogames-section.svelte";
    import ODSSection from "./_components/ods-section.svelte";
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
	<DescriptionSection />

	<TutorialSection />

	<RandomCardSection />

	<SerieSection />

	<ODSSection />

	<VideogamesSection />

</main>
