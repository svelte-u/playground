import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import Unocss from "unocss/vite"
import {
	transformerVariantGroup,
	presetIcons,
	presetUno,
	extractorSvelte,
	presetWebFonts,
} from "unocss"

export default defineConfig({
	plugins: [
		Unocss({
			extractors: [extractorSvelte],
			presets: [presetIcons(), presetUno(), presetWebFonts({})],
			// transformers: [transformerVariantGroup()],
		}),
		sveltekit(),
	],
})
