<script lang="ts">
	import { useragent, vibrate } from "@sveu/browser"

	const { supported, start, stop } = vibrate()

	const { mobile } = useragent()
</script>

<div class="flex flex-col w-full items-center">
	{#if $supported && $mobile}
		<button
			on:click="{start}"
			class="rounded-lg bg-purple-600 text-white p-3 ">Start</button>

		<br />

		<button
			on:click="{stop}"
			class="rounded-lg bg-purple-600 text-white p-3 ">Stop</button>
	{:else}
		<h1>Your can't vibrate API</h1>
	{/if}
</div>
