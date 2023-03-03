<script lang="ts">
	import { intervalfn } from "@sveu/shared"
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

	let word = "Hello"

	const { pause, resume, active } = intervalfn(() => {
		word = greetings[random(0, greetings.length - 1)]
	}, 1)
</script>

<h1>{word}</h1>

{#if $active}
	<button on:click="{() => pause()}">Pause</button>
{:else}
	<button on:click="{() => resume()}">Resume</button>
{/if}
