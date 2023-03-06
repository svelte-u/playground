<script lang="ts">
	// import { event_listener } from "@sveu/browser"
	import { on } from "@sveu/browser"
	import { browser } from "@sveu/shared"

	let key = ""
	if (browser) {
		const manual_cleanup = on(window, "keydown", (e: KeyboardEvent) => {
			console.log(e.key)
			key = e.key

			if (e.key === "Escape") manual_cleanup()
		})
	}
</script>

<p class="text-center">{key}</p>
