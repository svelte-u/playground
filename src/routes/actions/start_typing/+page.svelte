<script lang="ts">
	import { start_typing } from "@sveu/actions"

	function fn(element: HTMLInputElement, event: KeyboardEvent) {
		if (element !== document.activeElement) element.focus()
	}
</script>

<div class="flex flex-col space-y-5 items-center">
	<note class="border border-4 shadow-xl p-3">Type anything</note>

	<input
		class="border rounded-xl border-4 p-3"
		use:start_typing="{fn}"
		type="text"
		placeholder="Start typing to focus" />

	<input
		class="border rounded-xl border-4 p-3"
		type="text"
		placeholder="Start typing has no effect here" />
</div>
