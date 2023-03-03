<script>
	import { strftime } from "@sveu/shared"

	let code = "%Y-%m-%d %H:%M:%S"

	$: time = strftime(Date.now(), code)
</script>

<label for="code">Format code</label>
<input id="code" bind:value="{code}" />

<h1>{time}</h1>
