<script lang="ts">
	import { rtf } from "@sveu/shared"

	import type { RTFOptions } from "@sveu/shared"

	const options: RTFOptions = {
		locale: "ar",
		style: "long", // other values: "short" or "narrow"
		numeric: "auto", // other values: "always"
	}

	$: time = rtf(+Date.now() - 1000 * 60 * 5, options)
</script>

<h1>{$time}</h1>

<label for="locale">Locale</label>
<select id="locale" bind:value="{options.locale}">
	<option value="ar">عربي</option>
	<option value="en">English</option>
	<option value="es">Español</option>
	<option value="de">Deutsch</option>
	<option value="zh">中文</option>
	<option value="ja">日本語</option>
	<option value="fr">français</option>
	<option value="hi">हिंदी</option>
	<option value="ko">한국어/韓國語</option>
	<option value="am">हአማርኛ</option>
</select>

<label for="style">Style</label>
<select id="style" bind:value="{options.style}">
	<option value="long">Long</option>
	<option value="short">Short</option>
	<option value="narrow">Narrow</option>
</select>

<label for="numeric">Numeric</label>
<select id="numeric" bind:value="{options.numeric}">
	<option value="always">Always</option>
	<option value="auto">Auto</option>
</select>
