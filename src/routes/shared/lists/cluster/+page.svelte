<script>
	import { cluster } from "@sveu/shared/lists"

	let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const clusters = cluster(list, { size: 3 })

	console.log(clusters)
</script>

<h1>open the console</h1>
