<script>
	import { debounce } from "@sveu/shared"

	let value = "Hi"

	const keydown_debounce = debounce((e) => (value = e.target.value), 1)
</script>

<input class="border border-4" on:input="{keydown_debounce}" />

<hr />

<h1>Value is: {value}</h1>
