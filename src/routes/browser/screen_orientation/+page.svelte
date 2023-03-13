<script lang="ts">
	import { screen_orientation } from "@sveu/browser"

	const { supported, orientation, angle } = screen_orientation()
</script>

<div class="flex flex-col space-y-5 mt-20 items-center">
	<p class="border border-4 shadow mb-2 p-3">
		For best results, please use a mobile or tablet device (or use your
		browser's native inspector to simulate an orientation change)
	</p>

	<p>Supported: {$supported}</p>

	<div>Orientation Type: <b>{$orientation}</b></div>

	<div>Orientation Angle: <b>{$angle}</b></div>
</div>
