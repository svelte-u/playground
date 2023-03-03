<script lang="ts">
	import { enhance } from "@sveu/shared/dicts"

	const obj = { a: 1, b: 2, c: 3 }

	const dict = enhance(obj)

	// 	dict.add("d", 4)

	// 	console.log(dict.contains("a"))

	// 	dict.clear()

	// 	dict.contains("a", "b")

	// 	dict.add("a", 1)

	// 	dict.get("a")

	// 	const copy = dict.copy()
	// 	console.log($copy)

	// 	const new_dict = dict.from_keys(["b", "c"], 2)
	// 	console.log($new_dict)

	// 	dict.invert()

	// 	console.log((dict.keys()))

	// 	console.log((dict.pop("a")))

	// 	console.log((dict.popitem()))

	// 	console.log((dict.values()))
</script>

{JSON.stringify($dict)}
