<script lang="ts">
	import { el_bound } from "@sveu/actions"

	import type { ElementBoundData } from "@sveu/actions"

	let height = 0,
		bottom = 0,
		left = 0,
		right = 0,
		top = 0,
		width = 0,
		x = 0,
		y = 0

	$: text = `
	height: ${height}
	bottom: ${bottom}
	left:  ${left}
	right:  ${right}
	top:  ${top}
	width:  ${width}
	x:  ${x}
	y:  ${y}
`
	function fn(data: ElementBoundData) {
		x = data.x

		y = data.y

		right = data.right

		left = data.left

		top = data.top

		bottom = data.bottom

		width = data.width

		height = data.height

		width = data.width
	}
</script>

<div class="text-center">
	<textarea
		class="border border-4 h-63 w-75"
		readonly
		value="{text}"
		use:el_bound="{fn}"></textarea>
</div>

<style>
</style>
