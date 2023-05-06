import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import Unocss from "unocss/vite"
import {
	transformerVariantGroup,
	presetIcons,
	presetUno,
	presetWebFonts,
} from "unocss"
import extractorSvelte from "@unocss/extractor-svelte"

export default defineConfig({
	plugins: [
		Unocss({
			extractors: [extractorSvelte()],
			presets: [presetIcons(), presetUno(), presetWebFonts({})],
			transformers: [transformerVariantGroup()],
		}),
		sveltekit(),
	],
})
