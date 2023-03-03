<script>
	import { on_destroy } from "@sveu/shared"

	const destroyable = on_destroy(() => {
		console.log("Component destroyed")
	})
</script>

<p>Destroyable: {destroyable}</p>
