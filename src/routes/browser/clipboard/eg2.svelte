<script lang="ts">
	import { clipboard } from "@sveu/browser"

	let value = "Hello"

	$: ({ supported, copy, copied } = clipboard({ source: value }))
</script>

{#if $supported}
	<div>
		<p>
			Current copied: <code>{value || "none"}</code>
		</p>
		<input class="border border-3" bind:value="{value}" type="text" />
		<button on:click="{() => copy(value)}">
			{$copied ? "copied" : "copy"}
		</button>
	</div>
{/if}
