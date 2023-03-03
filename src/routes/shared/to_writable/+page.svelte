<script>
	import { readable } from "svelte/store"

	import { to_writable } from "@sveu/shared"

	const num = readable(0)

	const new_num = to_writable(num)

	$new_num = 1
</script>

{$new_num}
