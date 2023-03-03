<script lang="ts">
	import { precision } from "@sveu/shared/math"
	import type { PrecisionOptions } from "@sveu/shared"

	let value = 45.125

	let digits = 2

	let options: PrecisionOptions = {
		math: "round",
	}

	$: result = precision(value, digits, options)
</script>

<h1>{result}</h1>

<label for="number">Number</label>
<input id="number" type="number" bind:value="{value}" step="any" />

<label for="digits">Digits</label>
<input id="digits" type="number" bind:value="{digits}" step="any" />

<label for="math">Math</label>
<select id="math" bind:value="{options.math}">
	<option value="floor">Floor</option>
	<option value="ceil">Ceil</option>
	<option value="round">Round</option>
</select>
