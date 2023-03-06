<script lang="ts">
	import { file_dialog } from "@sveu/browser"

	const { files, open, reset } = file_dialog()
</script>

{#if $files}
	{#each $files as file}
		<div>
			{file.name}
		</div>
	{/each}
{/if}

<button
	class="rounded-lg bg-purple-600 text-white p-3"
	on:click="{() => open()}">Choose files</button>

<button type="button" disabled="{!files}" on:click="{() => reset()}">
	Reset
</button>
