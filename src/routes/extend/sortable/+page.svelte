<script lang="ts">
	import { sortable, move_list } from "@sveu/extend/sortable"
	import type { Options } from "sortablejs"

	let list = [
		{ id: 1, name: "a" },
		{ id: 2, name: "b" },
		{ id: 3, name: "c" },
	]

	const options: Options = {
		animation: 500,
		onUpdate: (evt) => {
			list = move_list(list, evt?.oldIndex ?? 0, evt?.newIndex ?? 0)
		},
	}
</script>

<ul
	use:sortable="{options}"
	class="rounded flex flex-col m-auto bg-gray-500/5 h-200px p-4 w-300px gap-2">
	{#each list as item}
		<li class="rounded bg-gray-500/5 p-3 h20">
			{item.name}
		</li>
	{/each}
</ul>
<pre class="text-center">
	{JSON.stringify(list, null)}
</pre>
