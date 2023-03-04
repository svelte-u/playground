<script>
	import { dom_visible } from "@sveu/browser"

	import { timeoutfn } from "@sveu/shared"

	const visible = dom_visible()

	const startMessage = "💡 Minimize the page or switch tab then return"

	let message = startMessage

	const timeout = timeoutfn(() => {
		message = startMessage
	}, 1)

	$: if ($visible === "visible") {
		message = "🎉 Welcome back!"
		timeout.start()
	}
</script>

<h1 class="text-center">{message}</h1>
