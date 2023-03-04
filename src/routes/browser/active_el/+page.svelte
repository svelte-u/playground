<script lang="ts">
	import { active_el } from "@sveu/browser"

	const el = active_el()

	$: key = $el?.dataset?.id || "null"
</script>

<br />
<note class="my-3"> Select the inputs below to see the changes </note>
<div
	class="
        grid
        gap-2
        grid-cols-1
        md:grid-cols-3">
	{#each [1, 2, 3, 4, 5, 6] as i}
		<input
			type="text"
			data-id="{i}"
			class="border border-4 !my-0 !min-w-0s"
			placeholder="{String(i)}" />
	{/each}
</div>

<div class="mt-2">
	Current Active Element:
	<span class="text-primary">{key}</span>
</div>
