<script lang="ts">
	import { fullscreen } from "@sveu/actions"
	import { noop } from "@sveu/shared"

	import type { FullscreenFnData } from "@sveu/actions"

	let toggle = noop

	function fn({ toggle: _toggle }: FullscreenFnData) {
		toggle = _toggle
	}
</script>

<div class="text-center">
	<div class="flex py-4">
		<video
			class="rounded m-auto"
			src="https://vjs.zencdn.net/v/oceans.mp4"
			width="600"
			controls
			use:fullscreen="{fn}"
			on:fullscreen="{(e) => console.log(e.detail)}">
			<track kind="captions" />
		</video>
	</div>

	<button
		class="rounded-xl bg-purple-700 text-white p-8"
		on:click="{() => toggle()}">
		Go Fullscreen
	</button>
</div>
