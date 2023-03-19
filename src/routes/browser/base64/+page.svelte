<script lang="ts">
	import { base64 } from "@sveu/browser"

	let text = ""

	let file: File, image: HTMLImageElement

	$: text_result = base64(text)

	$: file_result = base64(file)

	$: image_result = base64(image)

	const buffer_result = base64(new ArrayBuffer(8))

	function on_file_input(e: Event) {
		file = (e.target as HTMLInputElement).files![0]
	}
</script>

<div class="space-y-4 my-20 mx-10">
	<div class="grid gap-2 md:grid-cols-2">
		<div>
			<span>Text Input</span>
			<textarea
				bind:value="{text}"
				class="h-40"
				placeholder="Type something..."></textarea>
		</div>
		<div>
			<span>Base64</span>
			<textarea class="h-40" value="{$text_result}" readonly></textarea>
		</div>
	</div>

	<div class="grid gap-2 md:grid-cols-2">
		<div>
			<span>Buffer Input</span>
			<pre class="mt-2">new ArrayBuffer(1024)</pre>
		</div>
		<div>
			<span>Base64</span>
			<textarea class="h-40" value="{$buffer_result}" readonly></textarea>
		</div>
	</div>

	<div class="grid gap-2 md:grid-cols-2">
		<div>
			<span>File Input</span>
			<div>
				<input class="mt-2" type="file" on:input="{on_file_input}" />
			</div>
		</div>
		<div>
			<span>Base64</span>
			<textarea class="h-40" value="{$file_result}" readonly></textarea>
		</div>
	</div>

	<div class="grid gap-2 md:grid-cols-2">
		<div>
			<span>Image Input</span>
			<img
				bind:this="{image}"
				class="rounded  object-fill h-150 mt-2 w-full"
				src="https://i.ibb.co/hFBTwkD/0909-mila-kunis-1445035501.jpg"
				alt="Mila Kunis" />
		</div>
		<div>
			<span>Base64</span>
			<textarea class="h-40" value="{$image_result}" readonly></textarea>
		</div>
	</div>
</div>

<style>
	textarea {
		min-width: 0 !important;
		width: 100%;
	}
</style>
