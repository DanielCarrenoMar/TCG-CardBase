<script lang="ts">
  import NavigateButton from "$lib/components/Navigate-button.svelte";
  import { Card } from "flowbite-svelte";
  interface Props {
		info: {
			description: string;
			background_color: string;
			url: string;
		};
	}

	let { info }: Props = $props();
</script>

<Card class={`flex flex-col items-center h-auto justify-between text-left shadow-md bg-gradient-to-b ${info.background_color} p-4 sm:p-5 md:p-7`}>
  <div class="w-full text-white text-2xl mb-6">
    {info.description}
  </div>
  <NavigateButton href={info.url}>Explorar</NavigateButton>
</Card> 