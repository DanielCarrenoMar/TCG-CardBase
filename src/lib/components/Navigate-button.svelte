<script lang="ts">
	let { href, children } = $props();
</script>

<a {href} class="cursor-pointer text-lg bg-yellow-300 mt-4 text-black font-bold py-4 px-16 rounded hover:bg-yellow-400 transition-colors duration-300">
	{@render children()}
</a>
