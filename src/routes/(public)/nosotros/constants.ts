import DanielImage from "./_images/daniel.png";
import HannerImage from "./_images/hanner.png";
import VielmaImage from "./_images/vielma.png";
import RosasImage from "./_images/rosas.png";

import SvelteImage from "./_images/svelte.png";
import TailwindImage from "./_images/tailwind.png";
import BunImage from "./_images/bun.svg";
import TypeScriptImage from "./_images/typescript.png";

export const MEMBERS = [
	{
		name: "Daniel",
		image: DanielImage,
	},
	{
		name: "Hanner",
		image: HannerImage,
	},
	{
		name: "Vielma",
		image: VielmaImage,
	},
	{
		name: "Rosas",
		image: RosasImage,
	},
];

export const USED_TECH = [
	{
		name: "Svelte with SvelteKit",
		url: "https://kit.svelte.dev/",
		image: SvelteImage,
		description: "Frontend framework for building web applications",
	},
	{
		name: "Tailwind CSS",
		url: "https://tailwindcss.com/",
		image: TailwindImage,
		description: "Utility-first CSS framework for rapid UI development",
	},
	{
		name: "Bun",
		url: "https://bun.sh/",
		image: BunImage,
		description: "A modern JavaScript runtime",
	},
	{
		name: "TypeScript",
		url: "https://www.typescriptlang.org/",
		image: TypeScriptImage,
		description: "A superset of JavaScript that compiles to clean JavaScript",
	},
];
