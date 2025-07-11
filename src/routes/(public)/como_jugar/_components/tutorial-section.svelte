<script>
	import { AccordionItem, Accordion } from "flowbite-svelte";
	import { PlusOutline, MinusOutline } from "flowbite-svelte-icons";

import { pageTexts } from '$lib/constants/allTexts';
import { pageLanguage } from '$lib/language/languajeHandler';

const INFO_TEXTS = {
  es: [
	{
	  title: "Nombre de la Carta",
	  description:
		"En el formato de juego Estándar, puedes tener un máximo de cuatro cartas con el mismo nombre en tu baraja. Las cartas de Energía son la excepción a esta regla.",
	},
	{
	  title: "Tipo del Pokémon y PS",
	  description:
		"Indica el tipo del Pokémon y cuánto daño puede recibir antes de quedar Fuera de Combate. Cada Pokémon tiene su propia Debilidad y Resistencia, recogidas en la parte inferior de la carta. Recuerda esto cuando te prepares para tu próximo combate.",
	},
	{
	  title: "Fase",
	  description:
		"Indica la Evolución actual de tu Pokémon. Puedes hacer evolucionar a aquellos Pokémon que hayan estado en el campo de combate al menos un turno si tienes su forma evolucionada en tu mano.",
	},
	{
	  title: "Ataques",
	  description:
		"Para llevar a cabo un ataque, debes tener unida al Pokémon la cantidad y el tipo de Energía que se indica aquí. El número a la derecha muestra cuánto daño hará el ataque al Pokémon Activo del rival.",
	},
	{
	  title: "Coste de Retirada",
	  description:
		"Esta es la cantidad de Energía necesaria para retirar a tus Pokémon del Puesto Activo a la Banca. Para realizar esta acción, debes descartar dicha cantidad de Energía del Pokémon Activo y sustituirlo por un Pokémon de tu Banca.",
	},
  ],
  en: [
	{
	  title: "Card Name",
	  description:
		"In the Standard game format, you can have a maximum of four cards with the same name in your deck. Energy cards are the exception to this rule.",
	},
	{
	  title: "Pokémon Type and HP",
	  description:
		"Indicates the Pokémon's type and how much damage it can take before being Knocked Out. Each Pokémon has its own Weakness and Resistance, shown at the bottom of the card. Remember this as you prepare for your next battle.",
	},
	{
	  title: "Stage",
	  description:
		"Indicates your Pokémon's current Evolution. You can evolve Pokémon that have been in play for at least one turn if you have their evolved form in your hand.",
	},
	{
	  title: "Attacks",
	  description:
		"To perform an attack, your Pokémon must have the required amount and type of Energy attached as shown here. The number on the right shows how much damage the attack will do to the opponent's Active Pokémon.",
	},
	{
	  title: "Retreat Cost",
	  description:
		"This is the amount of Energy needed to retreat your Pokémon from the Active Spot to the Bench. To do this, discard that amount of Energy from the Active Pokémon and replace it with a Benched Pokémon.",
	},
  ],
};

const INFO = INFO_TEXTS[pageLanguage];
</script>

<main>
	<section class="flex flex-col">
		<div class="flex p-12 justify-around">
			<div class="bg-[#fbf5e4] rounded-lg p-4 w-1/2 my-4">
				<Accordion class="border-none">
					{#each INFO as item}
						<AccordionItem
							transitionParams={{ duration: 300 }}
							class="border-transparent border-b-1 border-b-[#dcd4be]"
							contentClass="border-transparent border-b-1 border-b-[#dcd4be]"
						>
							{#snippet header()}{item.title}{/snippet}
							{#snippet arrowup()}
								<MinusOutline class="-me-0.5 h-6 w-6" />
							{/snippet}
							{#snippet arrowdown()}
								<PlusOutline class="-me-0.5 h-6 w-6" />
							{/snippet}
							<p class="mb-2 text-gray-500 dark:text-gray-400">
								{item.description}
							</p>
						</AccordionItem>
					{/each}
				</Accordion>
			</div>

			<img class="object-contain aspect-square" src="images/how-to-play/howtoplay.png" alt="Como Jugar" />
		</div>
		<a
			class="py-4 px-8 bg-[#fee732] text-black font-semibold rounded cursor-pointer"
			href="https://tcg.pokemon.com/es-es/learn/"
			target="_blank"
		>
			{pageTexts[pageLanguage].instructionsLink}
		</a>
	</section>
</main>
