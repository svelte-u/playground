<script>
	import { select } from "@sveu/shared/lists"

	const list = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Jane" },
		{ id: 3, name: "Jack" },
	]

	const names = select(list, (item) => item.name)

	const ids = select(
		list,
		(item) => item.name,
		(item) => item.id > 1
	)

	console.log(names)

	console.log(ids)
</script>

<h1>Open the console</h1>
