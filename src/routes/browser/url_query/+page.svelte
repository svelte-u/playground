<script lang="ts">
	import { url_query } from "@sveu/browser"

	const query = url_query("history", {
		fallback: { sveu: "awesome" },
	})
</script>

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
