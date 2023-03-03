<script>
	import { sort } from "@sveu/shared/lists"

	const list = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Jane" },
		{ id: 3, name: "Mila" },
		{ id: 4, name: "Emma" },
		{ id: 5, name: "Jack" },
	]

	// change name with id
	const sorted = sort(list, "name")

	// change name with id
	const sorted_desc = sort(list, "-name")

	console.log(sorted)

	console.log(sorted_desc)
</script>

<h1>Open the console</h1>
