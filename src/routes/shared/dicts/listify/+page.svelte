<script>
	import { listify } from "@sveu/shared/dicts"

	const obj = { Mila: "Kunis", Emma: "Watson", Scarlett: "Johansson" }

	console.log(listify(obj, (key) => [key])) // keys only

	console.log(listify(obj, (_, value) => [value])) // values only

	console.log(listify(obj, (key, value) => [key, value])) // keys and values
</script>

<h1>Open console</h1>
