<script lang="ts">
	import { push } from "@sveu/browser"

	const { supported, result } = push(
		"/sw/web-push.js",
		"BJhRxOx05VZ7Yd9vmpvlibidolVdM-jjDJDDXSAZh8bTBcHLWJFT6dCwGViQ0SbnlDo-GGQoFuDKOuJvsieSs2Q"
	)

	let text = ""

	async function send() {
		text = "Close the Tab"

		const rep = await fetch("http://localhost:5173/api/push/web-push", {
			method: "POST",
			body: JSON.stringify({
				tokens: [$result],
				payload: {
					title: "test",
					body: "Hello from Svelte Utility",
				},
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await rep.json()

		console.log(data)
	}
</script>

<div class="flex flex-col">
	{#if $supported}
		{#if text}<p class="mt-15 text-center">{text}</p>{/if}

		<button
			class="bg-purple-500 rounded-2xl my-8 mx-10 text-white p-3"
			on:click="{send}">Send</button>
	{:else}
		<p>Not supported</p>
	{/if}
</div>
