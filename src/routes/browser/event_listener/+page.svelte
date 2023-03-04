<script lang="ts">
	// import { event_listener } from "@sveu/browser"
	import { on } from "@sveu/browser"
	import { browser } from "@sveu/shared"

	if (browser) {
		const manual_cleanup = on(window, "keydown", (e: KeyboardEvent) => {
			console.log(e.key)

			if (e.key === "Escape") manual_cleanup()
		})
	}
</script>
