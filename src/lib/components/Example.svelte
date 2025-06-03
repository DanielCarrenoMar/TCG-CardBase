<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<div class="example">
	<h1>{text}</h1>
	<p>This is an example component.</p>
</div>
