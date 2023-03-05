<script>
	import { useragent } from "@sveu/browser"

	const {
		supported,
		mobile,
		model,
		platform,
		platform_version,
		bitness,
		arch,
		brands,
	} = useragent()
</script>

<div class="text-center">
	<h1>Supported: <small>{$supported}</small></h1>

	<h1>Is mobile: <small>{$mobile}</small></h1>

	<h1>Architecture: <small>{$arch}</small></h1>

	<h1>Model: <small>{$model}</small></h1>

	<h1>Platform: <small>{$platform}</small></h1>

	<h1>Platform version: <small>{$platform_version}</small></h1>

	<h1>Bitness: <small>{$bitness}</small></h1>

	<h1>Brands: <small>{JSON.stringify($brands)}</small></h1>
</div>
