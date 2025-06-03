<script lang="ts">
	import {
		Navbar,
		NavBrand,
		Heading,
		NavUl,
		NavLi,
		NavHamburger,
	} from "flowbite-svelte";
</script>

<Navbar class="fixed start-0 top-0 z-50 h-16 w-full p-0 sm:h-24">
	<NavBrand
		href="/landing"
		class="bg-primary-800 h-16 px-4 pb-3 pt-2 sm:h-24 sm:px-8 dark:bg-transparent"
	>
		<div class="flex flex-col items-center">
			<Heading
				tag="h4"
				class="text-center text-sm uppercase text-white sm:text-base"
			>
				Pokemon TCG
			</Heading>
			<Heading
				tag="h5"
				class="text-balance text-center text-xs font-normal uppercase text-white opacity-80 sm:text-sm"
			>
				Juego de cartas coleccionables
			</Heading>
		</div>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
