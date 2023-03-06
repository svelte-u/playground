<script lang="ts">
	import { eye_dropper } from "@sveu/browser"

	const { supported, open, sRGBHex } = eye_dropper()
</script>

<div class="flex flex-col mx-20 mt-20 text-center">
	{#if $supported}
		<div>
			Supported: {$supported}
		</div>

		<div>
			sRGBHex: <span style="color: {$sRGBHex?.replace(', 0)', ', 1)')}"
				>{$sRGBHex}</span>
		</div>

		<button
			disabled="{!$supported}"
			on:click="{() => open()}"
			class="rounded-md bg-sky-500 text-white p-3">
			Open Eye Dropper
		</button>
	{:else}
		<span>Not Supported by Your Browser</span>
	{/if}
</div>
