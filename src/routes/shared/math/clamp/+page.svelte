<script>
	import { clamp } from "@sveu/shared/math"
	let min = 0

	let max = 100

	let value = 50

	$: result = clamp(value, min, max)
</script>

<h1>{result}</h1>

<label for="min">Min</label>
<input type="number" bind:value="{min}" id="min" />

<label for="max">Max</label>
<input type="number" bind:value="{max}" id="max" />

<label for="value">Value</label>
<input type="number" bind:value="{value}" id="value" />
