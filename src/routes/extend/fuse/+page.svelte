<script lang="ts">
	import { fuse } from "@sveu/extend/fuse"
	import { data } from "./data"
	import { page } from "$app/stores"

	let search = $page.url.searchParams.get("search") ?? ""

	let match_when_empty =
		$page.url.searchParams.get("match_when_empty") === "true"

	let limit: number | undefined = $page.url.searchParams.get("limit")
		? Number($page.url.searchParams.get("limit"))
		: undefined

	let results: any[] = []

	$: ({ results } = fuse(search, data, {
		fuse_options: {
			keys: ["firstName", "lastName"],
		},
		match_when_empty,
		limit,
	}))
</script>

<form class="text-center">
	<label for="search">Search</label>
	<input id="search" type="search" bind:value="{search}" />

	<label for="limit">limit</label>
	<input id="limit" type="number" bind:value="{limit}" />

	<label for="match_when_empty">Match When Empty</label>
	<input
		id="match_when_empty"
		type="checkbox"
		bind:checked="{match_when_empty}" />
</form>

<ul class="space-y-3 my-3 text-center">
	{#each results as result}
		<li>{`${result.item.firstName} ${result.item.lastName}`}</li>
	{/each}
</ul>
