<script lang="ts">
	import { notification } from "@sveu/browser"
	import type { WebNotificationOptions } from "@sveu/browser"

	const options: WebNotificationOptions = {
		title: "Hello World from Svelte Utility!",

		body: "This is a notification from Svelte Utility!",

		icon: "https://avatars.githubusercontent.com/u/120715197?s=200&v=4",

		dir: "auto",

		lang: "ar",

		renotify: true,

		tag: "test",

		requireInteraction: false,

		silent: false,
	}

	$: ({ supported, show, notify } = notification(options))
</script>

<div class="mx-10 text-center grid place-item-center">
	<h1>supported: {$supported}</h1>
	<br />

	<label for="title">Title</label>
	<input
		type="text"
		bind:value="{options.title}"
		id="title"
		class="border border-4" />

	<label for="body">Body</label>
	<input
		type="text"
		bind:value="{options.body}"
		id="body"
		class="border border-4" />

	<label for="icon">Icon</label>
	<input
		type="text"
		bind:value="{options.icon}"
		id="icon"
		class="border border-4" />

	<label for="dir">Direction</label>
	<select bind:value="{options.dir}" id="dir" class="border border-4">
		<option value="auto">auto</option>
		<option value="ltr">ltr</option>
		<option value="rtl">rtl</option>
	</select>

	<label for="lang">Language</label>
	<input
		type="text"
		bind:value="{options.lang}"
		id="lang"
		class="border border-4" />

	<label for="renotify">Renotify</label>
	<input
		type="checkbox"
		bind:checked="{options.renotify}"
		id="renotify"
		class="border border-4" />

	<label for="tag">Tag</label>
	<input
		type="text"
		bind:value="{options.tag}"
		id="tag"
		class="border border-4" />

	<label for="requireInteraction">Require Interaction</label>
	<input
		type="checkbox"
		bind:checked="{options.requireInteraction}"
		id="requireInteraction"
		class="border border-4" />

	<label for="silent">Silent</label>
	<input
		type="checkbox"
		bind:checked="{options.silent}"
		id="silent"
		class="border border-4" />

	<button
		class="rounded-lg bg-red-600 mt-4 text-white p-3"
		on:click="{() => show()}">
		Show Notification
	</button>
</div>
