<script lang="ts">
	import { wake_lock } from "@sveu/browser"

	const { active, request, release, supported } = wake_lock()
	$: text = $active ? "OFF" : "ON"

	const on_click = () => ($active ? request("screen") : release())
</script>

<div class="flex flex-col space-y-7 mx-30 mt-9 text-center">
	<div>
		Supported: {$supported}
	</div>
	<div>
		Active: {$active}
	</div>
	<button
		class="rounded-md bg-purple-600 text-white p-3"
		on:click="{on_click}">
		{text}
	</button>
</div>
