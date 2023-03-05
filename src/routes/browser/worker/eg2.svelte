<script lang="ts">
	import { onMount } from "svelte"

	import { worker } from "@sveu/browser"

	import Worker from "./worker?worker"

	let _worker: Worker

	onMount(() => {
		_worker = new Worker()
	})

	let value = "svelte"

	$: ({ data, post, error, cleanup } = worker(_worker))

	$: console.log($error)
</script>

<div class="flex flex-col space-y-9 mx-9 mt-9 text-center">
	<h1>Data: {$data}</h1>
	<input
		class="border rounded-xl border-4 p-3"
		type="text"
		id="message"
		bind:value="{value}" />

	<button
		class="rounded-md bg-green-600 text-white p-3"
		on:click="{() => post(value)}">Send</button>
	<br />
	<button
		class="rounded-md bg-red-600 text-white p-3"
		on:click="{() => cleanup()}">Stop</button>
</div>
