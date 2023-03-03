<script lang="ts">
	import { compose } from "@sveu/shared/curry"

	import type { AnyFn } from "@sveu/shared"

	const zero = (fn: AnyFn) => () => fn(0)

	const size = (fn: AnyFn) => (num: number) => fn({ num })

	const increment =
		(fn: AnyFn) =>
		({ num }: { num: number }) =>
			fn({ num: num + 1 })

	const args = (arg: any) => (args: any) => args[arg]

	const composed = compose(zero, size, increment, increment, args("num"))

	const decomposed = zero(size(increment(increment(args("num")))))

	const expected = decomposed()

	const result = composed()
</script>

<h1>Result: {result}</h1>

<h1>Expected: {expected}</h1>
