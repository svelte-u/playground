<script lang="ts">
	import { rtf } from "@sveu/shared"

	const time = rtf(+Date.now() - 1000 * 60 * 5)
</script>

<h1>{$time}</h1>
