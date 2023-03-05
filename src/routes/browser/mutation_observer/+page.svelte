<script lang="ts">
	import { mutation_observer } from "@sveu/browser"
	import { timeoutfn } from "@sveu/shared"

	let messages: any[] = []

	function observer(target: HTMLElement) {
		const { cleanup } = mutation_observer(
			target,
			(mutations) => {
				for (const mutation of mutations) {
					messages = [...messages, mutation.attributeName]
				}
			},
			{ attributes: true }
		)

		timeoutfn(() => {
			target.classList.add("text-red-500")
		}, 2)

		timeoutfn(() => {
			target.classList.remove("text-red-500")
		}, 4)

		timeoutfn(() => {
			target.setAttribute("svelte", "U")
			target.classList.add("text-red-500")
		}, 6)

		return {
			destroy() {
				cleanup()
			},
		}
	}
</script>

<h1 use:observer class="text-center">Hello From Svelte-U</h1>

{#each messages as message}
	<p class="text-center">
		Mutation Attribute: {message}
	</p>
{/each}
