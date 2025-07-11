<script lang="ts">
	import { Input, Label, type InputProps } from "flowbite-svelte";

	let {
		name,
		value = $bindable(),
		label,
		error,
		...props
	}: InputProps & { label: string; error?: string } = $props();

	let hasError = $derived(error ? "has-error" : "");
</script>

<div class="relative">
	<Input
		id={name}
		{name}
		bind:value
		class={`border-primary-700 ease peer rounded-none border-0 border-b bg-transparent placeholder:text-transparent text-white focus:ring-0 ${hasError} ${hasError ? "border-red-500 focus:border-red-400" : ""}`}
		placeholder={label}
	/>
	<Label
		for={name}
		class="text-primary-700 peer-focus:text-primary-500 absolute -top-4 left-2.5 transform text-xs transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-[.has-error]:text-red-500 peer-[.has-error]:peer-focus:text-red-400"
	>
		{label}
	</Label>

	{#if error}
		<p
			class="-bottom-0.25 absolute left-2.5 mb-3 text-sm text-red-600 dark:text-red-500"
		>
			{error}
		</p>
	{/if}
	<p class="invisible mb-3">placeholder</p>
</div>
