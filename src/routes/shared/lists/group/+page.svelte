<script>
	import { group } from "@sveu/shared/lists"

	const actors = [
		{ name: "Mila", age: 30 },
		{ name: "John", age: 40 },
		{ name: "Jane", age: 50 },
		{ name: "Emma", age: 30 },
	]

	const grouped = group(actors, (actor) => actor.age)

	console.log(grouped)
</script>
