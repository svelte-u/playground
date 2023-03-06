<script lang="ts">
	import { file_dialog } from "@sveu/browser"

	const { files, accepted, rejected, open, reset } = file_dialog({
		multiple: false,
		accept: "image/png",
	})
</script>

<button
	class="rounded-lg bg-purple-600 text-white p-3"
	on:click="{() => open()}">Choose files</button>

<button type="button" disabled="{!files}" on:click="{() => reset()}">
	Reset
</button>

<hr />
<h1>Files</h1>
{#if $files}
	{#each $files as file}
		<div>
			{file.name}
		</div>
	{/each}
{/if}

<hr />
<h1>Accepted Files</h1>
{#if $accepted}
	{#each $accepted as file}
		<div>
			{file.name}
		</div>
	{/each}
{/if}

<hr />
<h1>Rejected Files</h1>
{#if $rejected}
	{#each $rejected as file}
		<div>
			{file.name}
		</div>
	{/each}
{/if}
