<script>
	import { adjust_with_unit } from "@sveu/shared"

	let delta = 1

	let target = "10px"

	$: result = adjust_with_unit(target, delta)
</script>

<div class="text-center">
	<h1>Result: {$result}</h1>

	<br />

	<label for="delta">Delta</label>
	<input id="delta" type="number" bind:value="{delta}" />
	<br />

	<label for="target">Target</label>
	<input id="target" type="text" bind:value="{target}" />
	<br />

	<button class="mr-5" on:click="{() => result.inc()}">Increase</button>

	<button on:click="{() => result.dec()}">Decrease</button>
</div>
