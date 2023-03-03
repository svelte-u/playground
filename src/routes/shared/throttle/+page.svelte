<script lang="ts">
	import { throttle } from "@sveu/shared"

	let smashed = 0

	let updated = 0

	const smash_throttled = throttle(() => {
		updated++
	}, 2)
</script>

<div class="space-y-4 text-center">
	<h4>Delay is set to 2 second for this demo.</h4>

	<button
		class="rounded-lg bg-teal-600 text-white p-3"
		on:click="{() => {
			smashed++
			smash_throttled()
		}}">
		Smash me!
	</button>

	<p>Button Smashed: {smashed}</p>

	<p>Event handler called: {updated}</p>
</div>
