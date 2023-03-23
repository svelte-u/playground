<script lang="ts">
	import { cycle } from "@sveu/shared/lists"

	const list = [
		"Dog",
		"Cat",
		"Lizard",
		"Shark",
		"Whale",
		"Dolphin",
		"Octopus",
		"Seal",
	]

	const { state, next, prev } = cycle(list)
</script>

<div class="flex flex-col space-y-9 mt-9 text-center items-center">
	<h1 class="font-bold text-lg">
		{$state}
	</h1>
	<div class="flex space-x-10 ">
		<button on:click="{() => prev()}"> Prev </button>
		<button on:click="{() => next()}"> Next </button>
	</div>
</div>
