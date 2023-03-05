<script>
	import { window_focus } from "@sveu/browser"

	const focused = window_focus()

	const start_message =
		"💡 Click somewhere outside of the document to unfocus."

	let message = start_message

	$: if (!$focused) {
		message = "ℹ Tab is unfocused"
	} else {
		message = start_message
	}
</script>

<h1 class="text-center">{message}</h1>
