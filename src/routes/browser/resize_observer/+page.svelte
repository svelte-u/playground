<script setup lang="ts">
	import { resize_observer } from "@sveu/browser"

	let text = ""

	function observer(target: HTMLElement) {
		const { cleanup } = resize_observer(target, (entries) => {
			const [entry] = entries

			const { width, height } = entry.contentRect

			text = `width: ${width}\nheight: ${height}`

			return {
				destroy() {
					cleanup()
				},
			}
		})
	}
</script>

<div class="flex flex-col items-center justify-center">
	<p class="my-9">Resize the box to see changes</p>

	<textarea use:observer class="border border-4" disabled value="{text}"
	></textarea>
</div>
