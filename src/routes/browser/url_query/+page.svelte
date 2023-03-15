<script lang="ts">
	import { url_query } from "@sveu/browser"
	interface Query {
		sveu: string
		"sve-u"?: object
	}

	const query = url_query<Query>("history", {
		fallback: { sveu: "awesome" },
		// encode: true,
	})

	$query["sve-u"] = { is: { nice: "tool" } }
</script>

<pre class="mt-5">
{JSON.stringify($query, null, 4)}
</pre>

<div class="flex flex-col space-y-5 mt-20 items-center">
	<ul>
		<li>
			sveu={$query?.sveu ?? ""}
		</li>
	</ul>

	<div>
		<label for="sveu">Svelte-U is:</label>

		<input
			type="text"
			id="sveu"
			bind:value="{$query.sveu}"
			class="border rounded-xl border-4 p-3" />
	</div>
</div>
