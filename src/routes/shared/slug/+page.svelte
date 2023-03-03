<script lang="ts">
	import { slug } from "@sveu/shared"

	import type { SlugOptions } from "@sveu/shared"

	const options: SlugOptions = {
		lower: true,

		upper: true,

		digits: true,

		size: 6,

		prefix: "",
	}

	$: slugify = slug(options)
</script>

<h1>{slugify}</h1>

<hr />

<label for="lower">Lower Case</label>
<input id="lower" type="checkbox" bind:checked="{options.lower}" />
<hr />

<label for="upper">Upper Case</label>
<input id="upper" type="checkbox" bind:checked="{options.upper}" />
<hr />

<label for="digits">Digits</label>
<input id="digits" type="checkbox" bind:checked="{options.digits}" />
<hr />

<label for="size">Size</label>
<input id="size" type="text" bind:value="{options.size}" />
<hr />

<label for="prefix">Prefix</label>
<input id="prefix" type="text" bind:value="{options.prefix}" />
<hr />
