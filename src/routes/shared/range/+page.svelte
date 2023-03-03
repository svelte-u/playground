<script>
	import { range } from "@sveu/shared"
</script>

{#each [...range(0, 10, 2)] as number}
	<p>{number}</p>
{/each}
