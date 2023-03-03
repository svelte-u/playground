<script>
	import { writable } from "svelte/store"

	import { to_readable } from "@sveu/shared"

	const num = writable(0)

	const new_num = to_readable(num)
	// uncomment the code below to see an error message
	// $new_num = 1
</script>

{$new_num}
