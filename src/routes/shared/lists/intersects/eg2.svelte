<script>
	import { intersects } from "@sveu/shared/lists"

	const a = [
		{
			name: "M",
		},
		{
			name: "N",
		},
	]

	const b = [
		{
			name: "O",
		},
		{
			name: "M",
		},
	]

	const [intersected, data] = intersects(a, b, { fn: (item) => item.name })

	console.log(intersected)

	console.log(data)
</script>

<h1>Open the console</h1>
