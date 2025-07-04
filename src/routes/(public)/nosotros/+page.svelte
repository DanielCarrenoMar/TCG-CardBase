<script lang="ts">
	import HeroSection from "$lib/components/Hero-section.svelte";
	import Input from "$lib/components/input.svelte";
	import MemberCard from "./_components/member-card.svelte";
	import TechCard from "./_components/tech-card.svelte";
	import Hero from "./_images/hero.png";
	import { MEMBERS, USED_TECH } from "./constants";
</script>

<HeroSection title="Acerca de Nosotros" image={Hero} />

<main class="text-white bg-gradient-to-b from-bg-100 via-bg-300 to-bg-100">
	<div class="mx-auto container flex flex-col flex-grow">
		<section class="p-8 flex flex-col gap-2">
			<h2 class="text-2xl font-bold">Resumen</h2>
			<p>
				Nuestra plataforma web está diseñada para revolucionar la experiencia de
				las catas de cartas TCG Pokémon. Ofrecemos un espacio digital donde los
				coleccionistas y jugadores pueden participar en catas virtuales,
				descubrir nuevas cartas, intercambiar con otros usuarios y mantenerse al
				día con las últimas novedades del mundo Pokémon. Con herramientas
				avanzadas de análisis, sistema de valoración en tiempo real y una
				comunidad activa, creamos la experiencia definitiva para los fanáticos
				de las cartas Pokémon.
			</p>
		</section>

		<section class="p-8 flex flex-col gap-6">
			<h2 class="text-2xl font-bold">Integrantes</h2>
			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 place-items-center w-3/4 self-center"
			>
				{#each MEMBERS as member}
					<MemberCard {member} />
				{/each}
			</div>
		</section>

		<section class="p-8 flex flex-col gap-6">
			<h2 class="text-2xl font-bold">Tecnologías</h2>
			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 place-items-center"
			>
				{#each USED_TECH as tech}
					<TechCard {tech} />
				{/each}
			</div>
		</section>

		<section class="p-8 flex flex-col gap-6">
			<h2 class="text-2xl font-bold">Contacta con nosotros</h2>
			<form>
				<div class="grid grid-cols-2 gap-2">
					<div class="flex flex-col">
						<Input
							name="name"
							type="text"
							class="input input-bordered"
							label="Nombre"
						/>
						<Input
							name="email"
							type="email"
							class="input input-bordered"
							label="Correo electrónico"
						/>
						<Input
							name="topic"
							type="text"
							class="input input-bordered"
							label="Asunto"
						/>
					</div>
					<Input
						name="message"
						type="textarea"
						class="input input-bordered"
						label="Mensaje"
					/>
				</div>
				<button
					type="submit"
					class="cursor-pointer py-2 px-4 bg-primary-700 rounded"
				>
					Enviar
				</button>
			</form>
		</section>
	</div>
</main>
