<script lang="ts">
	interface Props {
		member: {
			name: string;
			image: string;
		};
	}

	let { member }: Props = $props();
</script>

<div class="flex flex-col items-center gap-2">
	<img src={member.image} alt={member.name} draggable="false" />
	<h3 class="text-xl font-bold">{member.name}</h3>
</div>
