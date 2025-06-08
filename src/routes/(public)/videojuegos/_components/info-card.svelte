<script lang="ts">
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
  <a href={info.url} class="w-full flex justify-center">
    <button class=" cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-8 rounded mt-2 transition-colors duration-200">
      Explorar
    </button>
  </a>
</Card> 