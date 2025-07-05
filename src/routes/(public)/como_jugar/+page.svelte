<script lang="ts">
	import HeroSection from "$lib/components/Hero-section.svelte";
	import GeneratorSection from "./_components/generator-section.svelte";
	import TutorialSection from "./_components/tutorial-section.svelte";
</script>

<HeroSection image="/logoTCG.png" title="¿Como Jugar?" />
<main class="text-white bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100">
	<TutorialSection />
	<GeneratorSection />
</main>
