<script lang="ts">
	import type { PageLoad } from "./$types";

	let { href, children, post = {} } = $props();

	export const load: PageLoad = ({ params }) => {
		return {
			post: post,
		};
	};
</script>

<a
	{href}
	class="cursor-pointer text-lg bg-yellow-300 mt-4 text-black font-bold py-4 px-16 rounded hover:bg-yellow-400 transition-colors duration-300"
>
	{@render children()}
</a>
