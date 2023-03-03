<script lang="ts">
	import { change_case } from "@sveu/extend/change_case"

	const cases = [
		"camelCase",
		"capitalCase",
		"constantCase",
		"dotCase",
		"headerCase",
		"noCase",
		"paramCase",
		"pascalCase",
		"pathCase",
		"sentenceCase",
		"snakeCase",
	]

	let value = "Svelte Action"
	let _case: any = "snakeCase"
</script>

<h1 class="font-bold mt-5 text-lg text-center">
	{change_case(value, _case, { delimiter: "-" })}
</h1>
<div class="space-x-3 mt-5">
	{#each cases as c}
		<button
			on:click="{() => (_case = c)}"
			class="rounded-xl bg-purple-600 text-white p-2">{c}</button>
	{/each}
</div>
