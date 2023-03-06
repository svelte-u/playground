<script lang="ts">
	import { partial } from "@sveu/shared/curry"

	const add = (a: number, b: number, c: number) => a + b + c

	const add_one = partial(add, 1)

	const add_two = partial(add_one, 2)

	console.log(add_two(3))
</script>

<h1 class="text-center">Open the console</h1>
