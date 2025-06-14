<script lang="ts">
	import { Card } from "flowbite-svelte";

	interface Props {
		tech: {
			name: string;
			url: string;
			image: string;
			description: string;
		};
	}

	let { tech }: Props = $props();
</script>

<a
	href={tech.url}
	target="_blank"
	rel="noopener noreferrer"
	class="cursor-pointer hover:scale-105 transition-transform duration-200 h-full w-full flex justify-center"
>
	<Card
		class="p-4 sm:p-5 md:p-7 flex flex-col items-center justify-center text-center h-full w-full shadow-md"
	>
		<img
			src={tech.image}
			alt={tech.name}
			draggable="false"
			class="object-contain h-14"
		/>
		<h5 class="mb-1 text-xl font-medium text-gray-900">
			{tech.name}
		</h5>
		<span class="text-gray-500">{tech.description}</span>
	</Card>
</a>
