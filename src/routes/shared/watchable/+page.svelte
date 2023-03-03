<script lang="ts">
	import { watchable } from "@sveu/shared"

	let new_value: number, old_value: number

	function callback(_old_value: number, _new_value: number) {
		new_value = _new_value
		old_value = _old_value
	}

	const watched = watchable(0, callback)
</script>

<button on:click="{() => $watched++}">Increment</button>

<button on:click="{() => $watched--}">Decrement</button>

<hr />

<h1>new Value: {new_value}</h1>
<hr />
<h1>old Value: {old_value}</h1>
