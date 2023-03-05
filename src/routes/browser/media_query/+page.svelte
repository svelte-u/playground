<script lang="ts">
	import { media_query } from "@sveu/browser"

	const dark = media_query("(prefers-color-scheme: dark)")

	const reduced = media_query("(prefers-reduced-motion: reduce)")

	const more = media_query("(prefers-contrast: more)")

	const less = media_query("(prefers-contrast: less)")

	const custom = media_query("(prefers-contrast: custom)")

	let contrast = "no-preference"

	$: if ($more) contrast = "more"

	$: if ($less) contrast = "less"

	$: if ($custom) contrast = "custom"

	$: if (!$more && !$less && !$custom) contrast = "no-preference"
</script>

<div class="text-center">
	<h1>Prefers Dark: {$dark}</h1>

	<h1>Prefers Reduce Motion: {$reduced}</h1>

	<h1>Prefers Contrast: {contrast}</h1>
</div>
