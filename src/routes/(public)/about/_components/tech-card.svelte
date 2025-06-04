<script lang="ts">
	import { Avatar, Card } from "flowbite-svelte";

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
	class="cursor-pointer hover:scale-105 transition-transform duration-200 min-w-96 min-h-56"
>
	<Card
		class="p-4 sm:p-5 md:p-7 flex flex-col items-center justify-center w-full h-full"
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
		<span class="text-gray-500 text-center">{tech.description}</span>
	</Card>
</a>
