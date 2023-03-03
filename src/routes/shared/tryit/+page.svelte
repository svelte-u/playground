<script lang="ts">
	import { tryit } from "@sveu/shared"
	let result: number | undefined, error: unknown

	function add(a: number, b: number): number {
		// uncomment the line blow
		// throw Error("You can't add number here")
		return a + b
	}

	const add_async = tryit(add)

	async function run() {
		const data = await add_async(1, 2)
		result = data?.result ?? undefined
		// @ts-ignore
		error = data.error?.message
	}

	run()
</script>

{#if result}{result}{/if}
{#if error}{error}{/if}
