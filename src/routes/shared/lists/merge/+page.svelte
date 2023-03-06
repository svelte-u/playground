<script>
	import { merge } from "@sveu/shared/lists"

	const list = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Jane" },
		{ id: 3, name: "Jack" },
	]

	const other = [
		{ id: 2, name: "Jane Doe" },
		{ id: 5, name: "Jill" },
	]

	const merged = merge(list, other, (item) => item.id)

	console.log(merged)
</script>

<h1>Open the console</h1>
