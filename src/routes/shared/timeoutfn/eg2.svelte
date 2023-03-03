<script>
	import { timeoutfn } from "@sveu/shared"
	import { random } from "@sveu/shared/math"

	const greetings = [
		"Hello",
		"Hi",
		"Yo!",
		"Hey",
		"Hola",
		"こんにちは",
		"Bonjour",
		"Salut!",
		"你好",
		"Привет",
		" مرحبا",
	]

	let word = ""

	const { pending, start, stop } = timeoutfn(
		() => {
			word = greetings[random(0, greetings.length - 1)]
		},
		1,
		{ immediate: false }
	)
</script>

<h1>{word}</h1>

{#if $pending}
	<h1>Running.....</h1>
	<button on:click="{() => stop()}">Stop</button>
{:else}
	<button on:click="{() => start()}">Start</button>
{/if}
