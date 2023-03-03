<script>
	import { fork } from "@sveu/shared/lists"

	const actors = [
		{ name: "Mila", age: 30 },
		{ name: "John", age: 40 },
		{ name: "Jane", age: 50 },
		{ name: "Emma", age: 60 },
	]

	const [young, old] = fork(actors, (actor) => actor.age < 50) // [{name: "Mila", age: 30}, {name: "John", age: 40}] and [{name: "Jane", age: 50}, {name: "Emma", age: 60}]

	console.log(young)

	console.log(old)
</script>

<h1>open the console</h1>
