<script lang="ts">
  import NavigateButton from "$lib/components/Navigate-button.svelte";
  import { Card } from "flowbite-svelte";
  import { pageLanguage } from '$lib/language/languajeHandler';
  import { pageTexts } from '$lib/constants/allTexts';
  interface Props {
    info: {
      title: string;
      description: string;
      background_color: string;
      url: string;
    };
  }

  let { info }: Props = $props();
</script>

<Card class={`flex flex-col items-center h-auto justify-between text-left shadow-md bg-gradient-to-b ${info.background_color} p-4 sm:p-5 md:p-7`}>
  <div class="w-full text-white text-xl mb-6">
    <h2 class="text-3xl mb-4" >{info.title}</h2>
    {info.description}
  </div>
  <NavigateButton href={info.url}>{pageTexts[pageLanguage].explore}</NavigateButton>
</Card> 