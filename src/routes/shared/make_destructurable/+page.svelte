<script lang="ts">
	import { make_destructurable } from "@sveu/shared"

	const foo = { name: "foo" }

	const bar = 1024

	const obj = make_destructurable({ foo, bar }, [foo, bar])

	let { foo: foo1, bar: bar1 } = obj

	let [foo2, bar2] = obj
</script>

<div class="text-center">
	<h1>Object like</h1>
	{foo1.name} is {bar1}
	<hr />
	<h1>Array like</h1>
	{foo2.name} is {bar2}
</div>
