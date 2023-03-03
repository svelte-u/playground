<script lang="ts">
	import { idb } from "@sveu/extend/idb_keyval"

	const KEY = "svelte-u-idb-keyval"

	const state_object = idb(`${KEY}-object`, {
		name: "Banana",
		color: "Yellow",
		size: "Medium",
		count: 0,
	})

	const state_string = idb(`${KEY}-string`, "foobar")
</script>

<div class="h-screen bg-gray-100 w-full grid  pt-5 place-items-center">
	<div class="bg-white shadow-lg text-center w-1/2">
		<h5>Object</h5>
		<label for="name">Name</label>
		<input id="name" bind:value="{$state_object.name}" type="text" />

		<br />

		<label for="color">Color</label>
		<input id="color" bind:value="{$state_object.color}" type="text" />

		<br />

		<label for="size">Size</label>
		<input id="size" bind:value="{$state_object.size}" type="text" />

		<br />

		<label for="count">Count</label>
		<input
			id="count"
			bind:value="{$state_object.count}"
			type="range"
			min="0"
			step="0.01"
			max="1000" />

		<br />
		<br />

		<pre lang="json">{JSON.stringify($state_object)}</pre>
		<br />
		<br />
	</div>
	<div class="bg-white shadow-lg text-center w-1/2">
		<h5>String</h5>
		<input bind:value="{$state_string}" type="text" />
		<br />
		<br />
		<pre>{$state_string}</pre>
		<br />
	</div>
</div>
