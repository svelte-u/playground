<script lang="ts">
	import { change_case } from "@sveu/extend/change_case"
	import { len, type } from "@sveu/shared"

	const shareds_curry = {
		sub_name: "curry",
		submodules: ["chain", "compose", "partial"],
	}

	const shareds_dicts = {
		sub_name: "dicts",
		submodules: [
			"contains",
			"enhance",
			"filter",
			"invert",
			"listify",
			"picker",
			"pops",
		],
	}

	const shareds_lists = {
		sub_name: "lists",
		submodules: [
			"cluster",
			"count",
			"enhance",
			"fork",
			"group",
			"intersects",
			"merge",
			"select",
			"sort",
			"unique",
		],
	}

	const shareds_math = {
		sub_name: "math",
		submodules: ["arithmetic", "clamp", "precision", "random"],
	}

	const shared = [
		"adjust_with_unit",
		"async_state",
		"create_event_hook",
		"create_singleton_promise",
		"debounce",
		"intervalfn",
		"last_changed",
		"len",
		"make_destructurable",
		"object_url",
		"on_destroy",
		"on_mount",
		"range",
		"rtf",
		"sleep",
		"slug",
		"strftime",
		"taggable",
		"template",
		"throttle",
		"timeout",
		"timeoutfn",
		"to_number",
		"to_readable",
		"to_writable",
		"tryit",
		"type",
		"unstore",
		"watchable",
		shareds_curry,
		shareds_dicts,
		shareds_lists,
		shareds_math,
	]

	const extend = [
		"async_validator",
		"change_case",
		"fcm",
		"fuse",
		"idb_keyval",
		"jwt",
		"qrcode",
	].sort()

	const browser = [
		"active_el",
		"breakpoints",
		"broadcast_channel",
		"clipboard",
		"dom_visible",
		"event_listener",
		"eye_dropper",
		"favicon",
		"file_dialog",
		"fps",
		"geolocation",
		"image",
		"intersection_observer",
		"media_query",
		"memory",
		"mouse",
		"mutation_observer",
		"network",
		"notification",
		"permission",
		"preferred_lang",
		"push_notification",
		"raf_fn",
		"resize_observer",
		"support",
		"useragent",
		"wake_lock",
		"websocket",
		"window_focus",
		"window_scroll",
		"window_size",
		"worker",
	].sort()

	const actions = ["dropzone", "el_bound", "fullscreen"].sort()

	let contents = [
		{ name: "actions", modules: actions, show: false },
		{ name: "browser", modules: browser, show: false },
		{ name: "extend", modules: extend, show: false },
		{ name: "shared", modules: shared, show: false },
	]

	function total_fn(fns: Array<any>) {
		let submodules = 0

		for (const fn of fns) {
			if (type(fn) === "object") {
				submodules += len(fn.submodules)
			}
		}
		return len(fns) + submodules
	}
</script>

<div class="px-8 pt-8">
	{#each contents as { name, modules, show }}
		<section>
			<div class="flex space-x-2 items-center">
				<button on:click="{() => (show = !show)}">
					{#if show}
						<div class="i-mdi-eye-off"></div>
					{:else}
						<div class="i-mdi-eye"></div>
					{/if}
				</button>

				<h1 class="font-extrabold text-xl">
					{name.toUpperCase()} - ({total_fn(modules)} Function)
				</h1>
			</div>

			{#each modules as module}
				<ul class:hidden="{!show}" class="px-8">
					{#if typeof module === "object"}
						<ul class="my-2">
							<h2 class="font-medium text-lg">
								* {module.sub_name.toUpperCase()} - ({total_fn(
									module.submodules
								)} Function)
							</h2>

							{#each module.submodules as submodule}
								<li>
									<a
										href="/{name}/{module.sub_name}/{submodule}"
										>{change_case(
											submodule,
											"capitalCase"
										)}</a>
								</li>
							{/each}
						</ul>
					{:else}
						<li>
							<a href="/{name}/{module}"
								>{change_case(module, "capitalCase")}</a>
						</li>
					{/if}
				</ul>
			{/each}
		</section>
		<hr />
	{/each}
</div>
