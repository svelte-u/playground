<script>
	import { memory } from "@sveu/browser"

	const { supported, result } = memory()
</script>

<div class="text-center">
	<h1>Supported: {$supported}</h1>

	<h2>Js Heap Size Limit: {$result?.jsHeapSizeLimit}</h2>

	<h2>Total Js Heap: {$result?.totalJSHeapSize}</h2>

	<h2>Used Js Heap: {$result?.usedJSHeapSize}</h2>
</div>
