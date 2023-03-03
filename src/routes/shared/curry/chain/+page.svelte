<script lang="ts">
	import { chain } from "@sveu/shared/curry"

	let result: any = ""

	const chained = chain(
		(a, b) => a + b,
		(a) => a * 2
	)
</script>

<h1>Result: {result}</h1>

<button on:click="{() => (result = chained(7, 7))}">Sum</button>
