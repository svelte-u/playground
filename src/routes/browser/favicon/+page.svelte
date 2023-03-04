<script setup lang="ts">
	import { favicon } from "@sveu/browser"

	let base_url = "/"

	$: icon = favicon("favicon.png", {
		base_url,
	})
</script>

<div class="grid place-items-center">
	<h1>{$icon}</h1>

	<label for="icon">Icon</label>
	<!-- add favicon.png in your browser -->
	<input id="icon" class="border border-4" type="text" bind:value="{$icon}" />

	<label for="base_url">Base URL</label>
	<input
		id="base_url"
		class="border border-4"
		type="text"
		bind:value="{base_url}" />
</div>
