<script>
	import { page } from "$app/state";
	import { Button } from "flowbite-svelte";
	import { Section, Page500, Page404 } from "flowbite-svelte-blocks";
	import { pageLanguage } from '$lib/language/languajeHandler';
	import { pageTexts } from '$lib/constants/allTexts';
</script>

{#if page.status === 404}
	<Section name="page404" class="grid min-h-screen place-items-center">
		<Page404>
			{#snippet h1()}
				404
			{/snippet}
			{#snippet paragraph()}
				<p
					class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white"
				>
					{pageTexts[pageLanguage].error404Title}
				</p>
				<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
					{pageTexts[pageLanguage].error404Description}
				</p>
				<Button href="/" size="lg">{pageTexts[pageLanguage].error404Button}</Button>
			{/snippet}
		</Page404>
	</Section>
{:else}
	<Section name="page500" class="grid min-h-screen place-items-center">
		<Page500>
			{#snippet h1()}500{/snippet}
			{#snippet paragraph()}
				<p
					class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white"
				>
					{pageTexts[pageLanguage].error500Title}
				</p>
				<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
					{pageTexts[pageLanguage].error500Description}
				</p>
			{/snippet}
		</Page500>
	</Section>
{/if}
