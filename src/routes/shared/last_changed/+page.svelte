<script lang="ts">
	import { last_changed, rtf } from "@sveu/shared"

	const { value, timestamp } = last_changed(
		"world",
		+Date.now() - 1000 * 60 * 5
	)

	const time = rtf($timestamp)
</script>

<div class="text-center">
	<input class="border border-4" bind:value="{$value}" />

	<div>
		Last changed: <strong>{$time}</strong> <span>({$timestamp})</span>
	</div>
</div>
