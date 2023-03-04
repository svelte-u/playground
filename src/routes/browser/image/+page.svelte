<script lang="ts">
	import { image } from "@sveu/browser"
	import { browser } from "@sveu/shared"

	const src =
		"https://i.ibb.co/JjL8tSt/final-fantasy-xiii-2-lightning-2560x1440.jpg"
	const { loading } = image({
		src,
	})
</script>

<div class="grid place-items-center">
	{#if !$loading}
		<img
			src="{src}"
			alt="FF XIII-2 Lightning"
			loading="lazy"
			class="rounded-2xl h-66.25 w-90" />
	{:else if !browser}
		<!-- fallback if js is disabled -->
		<img
			src="{src}"
			alt="FF XIII-2 Lightning"
			loading="lazy"
			class="rounded-2xl h-66.25 w-90" />
	{:else}
		<div style="background-color: #f1c91a" class="rounded-2xl h-66.25 w-90">
		</div>
	{/if}
</div>
