<script>
	import { debounce } from "@sveu/shared"

	let value = "Hi"

	// change 3 to 60
	const keydown_debounce = debounce((e) => (value = e.target.value), 3, {
		max_wait: 4,
	})
</script>

<input class="border border-4" on:input="{keydown_debounce}" />

<hr />

<h1>Value is: {value}</h1>
