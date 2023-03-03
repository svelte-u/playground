<script>
	import { unique } from "@sveu/shared/lists"

	const list = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Jane" },
		{ id: 3, name: "Mila" },
		{ id: 4, name: "Emma" },
		{ id: 5, name: "Jack" },
		{ id: 6, name: "Jack" },
	]

	const unique_names = unique(list, (item) => item.name)

	console.log(unique_names)
</script>

<h1>Open the console</h1>
