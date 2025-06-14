<script lang="ts">
	import NavHeader from "$lib/components/NavHeader.svelte";
	import Footer from "./_components/footer.svelte";

	let { children } = $props();
</script>

<div class="flex h-1 min-h-dvh w-full flex-col text-white">
	<NavHeader />
	<div class="w-full flex flex-col flex-grow pt-16 sm:pt-24">
		{@render children()}
	</div>
	<Footer />
</div>
