<script lang="ts">
	import { mouse } from "@sveu/browser"

	const { x, y, source_type } = mouse()
</script>

<div class="text-center">
	<h1>Mouse X: {$x}</h1>

	<h2>Mouse Y: {$y}</h2>

	<h2>Source Type: {$source_type}</h2>
</div>
