<script lang="ts">
	import { snapshot } from "@sveu/actions"

	interface SnapshotForm {
		name: string
		expires_on?: number
	}

	let snapshot_form: SnapshotForm = {
		name: "Svelte U is Awesome",
	}

	function restore(node: SnapshotForm) {
		if (node.expires_on && Date.now() < node.expires_on)
			snapshot_form = node
	}

	function capture() {
		snapshot_form.expires_on = Date.now() + 1 * 60 * 1000
		return snapshot_form
	}
</script>

<form
	class="flex flex-col mt-20 items-center"
	use:snapshot="{{
		key: 'form-snapshot',
		capture,
		restore,
		fallback: snapshot_form,
		store: 'cookie',
	}}">
	<note class="border border-4 rounded-2xl shadow-lg mb-4 p-5">
		<p>Try type something and go to home page or refresh the page</p>
	</note>

	<input
		type="text"
		name="name"
		bind:value="{snapshot_form.name}"
		id="id"
		class="border rounded-xl border-4 p-3" />

	<button class="rounded-lg bg-purple-600 mt-5 text-black text-white p-3"
		>Submit</button>
</form>
