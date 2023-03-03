<script lang="ts">
	import { object_url } from "@sveu/shared"

	let file: File

	const on_file_change = (e: any) => {
		const target = e.target
		const files = target.files
		file = files && files.length > 0 ? files[0] : undefined
	}

	$: url = object_url(file)
</script>

<input type="file" on:change="{on_file_change}" />
<br />

{#if url}
	<a href="{url}" target="_blank" rel="noreferrer">Open</a>
{/if}
