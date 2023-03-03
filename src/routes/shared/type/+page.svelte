<script>
	import { type } from "@sveu/shared"

	const types = ["string", 1, 1.5, new Date(), new Set(), [], Symbol(), {}]
</script>

<br />
{#each types as t}
	<h1>{type(t)}</h1>
	<hr class="border border-4" />
{/each}
