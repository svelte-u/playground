<script lang="ts">
	import { on, event_dispatcher } from "@sveu/browser"

	let counter = 0

	function click(node: HTMLButtonElement) {
		const dispatch = event_dispatcher(node)

		const cleanup = on(node, "click", () => {
			dispatch("clicked", ++counter)
		})

		return {
			destroy() {
				cleanup()
			},
		}
	}
</script>

<button use:click on:clicked="{(e) => console.log(e.detail)}">Click me</button>
