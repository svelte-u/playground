<script>
	import { intersects } from "@sveu/shared/lists"

	const a = [1, 2, 3]

	const b = [2, 3, 4]

	const [intersected, data] = intersects(a, b)

	console.log(intersected)

	console.log(data)
</script>

<h1>Open the console</h1>
