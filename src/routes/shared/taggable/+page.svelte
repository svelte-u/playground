<script lang="ts">
	import { taggable } from "@sveu/shared"

	const { toggled, toggle } = taggable()
</script>

<div class="flex flex-col space-y-3 mx-20 mt-20 text-center">
	<h1>{$toggled ? "On" : "Off"}</h1>

	<button
		on:click="{() => toggle()}"
		class="rounded-xl bg-purple-600 text-white p-3">Toggle</button>
</div>
