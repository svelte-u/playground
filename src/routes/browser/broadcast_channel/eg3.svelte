<script lang="ts">
	import { broadcast_channel } from "@sveu/browser"

	let dark = false

	const { data, post, error } = broadcast_channel({
		name: "svelteaction-channel",
	})

	// @ts-expect-error because $data is unknown
	$: if ($data !== undefined) dark = $data ?? false

	$: if ($error) console.log($error)

	function change_mode(value: boolean) {
		dark = value
		post(value)
	}
</script>

<h1>Dark mode: {dark}</h1>

<button on:click="{() => change_mode(true)}">Dark</button>

<button on:click="{() => change_mode(false)}">Light</button>
