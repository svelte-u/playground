<script>
	import { timeout } from "@sveu/shared"

	const { ready, start } = timeout(1, { controls: true })
</script>

<p>Ready: {$ready}</p>

<button disabled="{!$ready}" on:click="{() => start()}">Start Again</button>
