<script lang="ts">
	import { clipboard } from "@sveu/browser"

	let value = "Hello"

	const { text, supported, copy, copied } = clipboard({ copied_during: 2 })
</script>

{#if $supported}
	<div>
		<p>
			Current copied: <code>{$text || "none"}</code>
		</p>
		<input class="border border-3" bind:value="{value}" type="text" />
		<button on:click="{() => copy(value)}">
			{$copied ? "copied" : "copy"}
		</button>
	</div>
{/if}
