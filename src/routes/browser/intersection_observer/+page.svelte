<script lang="ts">
	import { intersection_observer } from "@sveu/browser"

	let root: HTMLElement | null = null

	let target: HTMLElement | null = null

	let visible = false

	$: intersection_observer(
		target,
		([{ isIntersecting }]) => {
			visible = isIntersecting
		},
		{ root }
	)
</script>

<div
	class="border border-dashed border-hex-ccc border-2 h-100 mx-8 mt-8 overflow-y-scroll root"
	bind:this="{root}">
	<p class="notice">Scroll me down!</p>
	<div class="target" bind:this="{target}">
		<p>Hello world!</p>
	</div>
</div>
<div class="text-center">
	Element the <span
		class:text-green-500="{visible}"
		class:text-red-500="{!visible}">{visible ? "inside" : "outside"}</span> viewport
</div>

<style>
	.notice {
		text-align: center;
		padding: 2em 0;
		margin-bottom: 300px;
		font-style: italic;
		font-size: 1.2rem;
		opacity: 0.8;
	}
	.target {
		border: 2px dashed var(--vp-c-brand);
		padding: 10px;
		max-height: 150px;
		margin: 0 2rem 400px;
	}
</style>
