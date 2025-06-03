<script lang="ts">
	import AppBar from "./_components/app-bar.svelte";

	let { children } = $props();
</script>

<div class="flex h-1 min-h-dvh w-full flex-col">
	<AppBar />
	<div class="w-full flex-grow pt-16 sm:pt-24">
		{@render children()}
	</div>
</div>
