<script lang="ts">
	import { random } from "@sveu/shared/math"

	let result: number = 0
</script>

<h1>{result}</h1>

<button on:click="{() => (result = random(0, 100))}">Generate</button>
