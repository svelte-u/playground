<script>
	import { filter } from "@sveu/shared/dicts"

	const obj = {
		created_at: "2022-10-10",
		updated_at: "2021-10-10",
		deleted_at: "2020",
	}

	const falsy_obj = {
		a: 1,
		b: 2,
		c: 0,
		d: null,
		e: undefined,
		f: false,
		g: "",
	}

	console.log(filter(obj, (x) => x.includes("2022")))

	console.log(filter(falsy_obj))
</script>

<h1>open the console</h1>
