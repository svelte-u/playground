<script>
	import { count } from "@sveu/shared/lists"

	let list = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Jane" },
		{ id: 3, name: "John" },
		{ id: 4, name: "John" },
		{ id: 5, name: "Jane" },
	]

	const actors = ["Mila", "John", "Jane", "John", "John", "Mila", "Mila"]

	const counts = count(list, (item) => item.name)

	const counts2 = count(actors, (actor) => actor)

	console.log(counts)

	console.log(counts2)
</script>

<h1>open the console</h1>
