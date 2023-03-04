<script lang="ts">
	import { broadcast_channel } from "@sveu/browser"

	let value = "HI"

	const { data, post, error } = broadcast_channel({
		name: "svelte-u-channel",
	})

	$: if ($data) alert($data)

	$: if ($error) console.log($error)
</script>

<h1>Open new Tab, and start a broadcast :)</h1>

<input class="border border-3" type="text" bind:value="{value}" />

<button on:click="{() => post(value)}">Post</button>
