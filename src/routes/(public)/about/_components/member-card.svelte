<script lang="ts">
	interface Props {
		member: {
			name: string;
			image: string;
		};
	}

	let { member }: Props = $props();
</script>

<div class="flex flex-col items-center gap-2 w-full h-full">
	<img
		src={member.image}
		alt={member.name}
		class="aspect-square w-11/12"
		draggable="false"
	/>
	<h3 class="text-xl font-black italic">{member.name}</h3>
</div>
