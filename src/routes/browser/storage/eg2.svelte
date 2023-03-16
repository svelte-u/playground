<script lang="ts">
	import { storage } from "@sveu/browser"

	const state = storage<string | null>("svelte-u", "awesome", {
		store: "cookie",
	})
</script>

<pre class="mt-5">
	{JSON.stringify($state, null, 4)}
	</pre>

<div class="flex flex-col space-y-5 mt-20 items-center">
	<ul>
		<li>
			sveu={$state}
		</li>
	</ul>

	<div>
		<label for="sveu">Svelte-U is:</label>

		<input
			type="text"
			id="sveu"
			bind:value="{$state}"
			class="border rounded-xl border-4 p-3" />
	</div>
	<button
		class="rounded-lg bg-red-500 text-white p-3 w-1/4"
		on:click="{() => ($state = null)}"
		>remove
	</button>
</div>
