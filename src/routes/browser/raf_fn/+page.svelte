<script lang="ts">
	import { raf_fn } from "@sveu/browser"

	let count = 0

	const { pause, resume } = raf_fn(() => {
		count++
		console.log(count)
	})
</script>

<div class="flex flex-col space-y-6 mx-9 mt-9 text-center">
	<h1>Count: {count}</h1>

	<button class="rounded-lg bg-red-600 text-white p-3" on:click="{pause}"
		>Pause</button>

	<button class="rounded-lg bg-green-600 text-white p-3" on:click="{resume}"
		>Resume</button>
</div>
