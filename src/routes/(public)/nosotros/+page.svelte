<script lang="ts">
	import HeroSection from "$lib/components/Hero-section.svelte";
	import Input from "$lib/components/input.svelte";
	import MemberCard from "./_components/member-card.svelte";
	import TechCard from "./_components/tech-card.svelte";
	import Hero from "./_images/hero.png";
	import { MEMBERS, USED_TECH } from "./constants";
	import { pageTexts } from '$lib/constants/allTexts';
	import { pageLanguage } from '$lib/language/languajeHandler';
</script>

<HeroSection title={pageTexts[pageLanguage].aboutTitle} image={Hero} />

<main class="text-white bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100">
	<div class="mx-auto container flex flex-col flex-grow">
		<section class="p-8 flex flex-col gap-2">
			<h2 class="text-2xl font-bold">{pageTexts[pageLanguage].aboutSummaryTitle}</h2>
			<p>
				{pageTexts[pageLanguage].aboutSummaryText}
			</p>
		</section>

		<section class="p-8 flex flex-col gap-6">
			<h2 class="text-2xl font-bold">{pageTexts[pageLanguage].aboutMembersTitle}</h2>
			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 place-items-center w-3/4 self-center"
			>
				{#each MEMBERS as member}
					<MemberCard {member} />
				{/each}
			</div>
		</section>

		<section class="p-8 flex flex-col gap-6">
			<h2 class="text-2xl font-bold">{pageTexts[pageLanguage].aboutTechTitle}</h2>
			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 place-items-center"
			>
				{#each USED_TECH as tech}
					<TechCard {tech} />
				{/each}
			</div>
		</section>

		<section class="p-8 flex flex-col gap-6">
			<h2 class="text-2xl font-bold">{pageTexts[pageLanguage].aboutContactTitle}</h2>
			<form>
				<div class="grid grid-cols-2 gap-2">
					<div class="flex flex-col">
						<Input
							name="name"
							type="text"
							class="input input-bordered"
							label={pageTexts[pageLanguage].aboutContactName}
						/>
						<Input
							name="email"
							type="email"
							class="input input-bordered"
							label={pageTexts[pageLanguage].aboutContactEmail}
						/>
						<Input
							name="topic"
							type="text"
							class="input input-bordered"
							label={pageTexts[pageLanguage].aboutContactTopic}
						/>
					</div>
					<Input
						name="message"
						type="textarea"
						class="input input-bordered"
						label={pageTexts[pageLanguage].aboutContactMessage}
					/>
				</div>
				<button
					type="submit"
					class="cursor-pointer py-2 px-4 bg-primary-700 rounded"
				>
					{pageTexts[pageLanguage].aboutContactSend}
				</button>
			</form>
		</section>
	</div>
</main>
