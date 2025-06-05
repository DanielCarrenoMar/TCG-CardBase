<script lang="ts">
	let { href ,children } = $props();
</script>

<a href={href} class="bg-primary-500 text-black font-bold py-4 px-16 rounded-sm hover:bg-primary-600 transition-colors duration-300">
    {@render children()}
</a>