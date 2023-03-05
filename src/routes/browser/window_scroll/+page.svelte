<script setup lang="ts">
	import { window_scroll } from "@sveu/browser"

	const { x, y } = window_scroll()
</script>

<div class="flex flex-col h-screen w-screen items-center justify-center">
	x: {$x}<br />
	y: {$y}
</div>
