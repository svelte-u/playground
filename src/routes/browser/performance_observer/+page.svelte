<script lang="ts">
	import { performance_observer } from "@sveu/browser"

	let entry: any[] = []

	performance_observer(
		(list) => {
			entry = list.getEntries()
		},
		{
			entryTypes: ["measure", "mark", "resource", "navigation"],
		}
	)
</script>

<div class="flex flex-col space-y-5 my-20 items-center">
	<pre lang="json">{JSON.stringify(entry, null, 4)}</pre>

	<button
		class="rounded-lg bg-purple-600 text-white p-3"
		on:click="{() => window.location.reload()}">
		refresh
	</button>
</div>
