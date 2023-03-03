<script>
	import { readable, writable } from "svelte/store"

	import { unstore } from "@sveu/shared"

	const num = readable(0)

	const str = writable("Hello")

	const list = [1, 2, "Hi"]
</script>

{unstore(num)}
<br />
{unstore(str)}
<br />
<br />
{unstore(list)}
