<script setup lang="ts">
	import { on_key_stroke } from "@sveu/browser"

	let translate_x = 0

	let translate_y = 0

	on_key_stroke(["w", "W", "ArrowUp"], (e: KeyboardEvent) => {
		translate_y -= 10
	})

	on_key_stroke(["s", "S", "ArrowDown"], (e: KeyboardEvent) => {
		translate_y += 10
	})

	on_key_stroke(["a", "A", "ArrowLeft"], (e: KeyboardEvent) => {
		translate_x -= 10
	})

	on_key_stroke(["d", "D", "ArrowRight"], (e: KeyboardEvent) => {
		translate_x += 10
	})
</script>

<div>
	<div class="container border-base">
		<div
			class="ball"
			style="transform: translate({translate_x}px, {translate_y}px)">
		</div>
	</div>
	<div class="mt-4 text-center">
		Use the arrow keys or w a s d keys to control the movement of the ball.
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 400px;
		height: 100px;
		margin: auto;
		overflow: hidden;
		border: 1px solid #a1a1a130;
		border-radius: 5px;
	}

	.ball {
		width: 16px;
		height: 16px;
		background: #a1a1a1;
		border-radius: 50%;
	}
</style>
