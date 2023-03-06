<script lang="ts">
	import { websocket } from "@sveu/browser"
	import { slug } from "@sveu/shared"

	let value = "Hello"

	let messages: any[] = []

	const user_id = slug()

	const { data, send, status } = websocket(
		`ws://localhost:8000/ws/${user_id}`,
		{
			auto_reconnect: true,
		}
	)

	$: messages = [...messages, $data]

	$: console.log($status)
</script>

<div class="my-20">
	<h1>Status: {$status}</h1>
	<h2>Your ID: {user_id}</h2>
</div>

<div class="flex flex-col mt-9 px-20">
	{#each messages as message}
		<p class="font-bold text-lg">{message ? message : ""}</p>
	{/each}
	<hr class="border border-4 mb-8" />

	<label for="value">Message</label>
	<input
		id="value"
		type="text"
		bind:value="{value}"
		class="border rounded-lg border-4 mb-8 p-3" />
	<button
		on:click="{() => send(value)}"
		class="bg-purple-600 rounded-2xl text-white p-3">Send</button>
</div>
