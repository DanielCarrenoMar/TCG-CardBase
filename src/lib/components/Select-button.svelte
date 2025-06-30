<script lang="ts">
	interface Props {
		children: () => any;
		selected: boolean;
		onClick: () => void;
	}
	let { children, selected, onClick }: Props = $props();
</script>

<button
	type="button"
	class={`clamp px-14 py-2 font-bold transition z-10 cursor-pointer
    ${selected ? "bg-primary-400 text-gray-900" : "bg-bg-100 text-white"}
    [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)]`}
	onclick={onClick}
>

	{@render children()}
</button>

<style>
	.clamp {
		font-size:  clamp(0,875rem, 2vw + 075rem, 1,125rem);
	}
</style>