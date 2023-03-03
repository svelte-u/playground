<script lang="ts">
	import { strftime } from "@sveu/shared"

	import type { StrftimeOptions } from "@sveu/shared"

	const options: StrftimeOptions = {
		locales: "ja",
		weekday: undefined,
		year: undefined,
		month: undefined,
		day: undefined,
		minute: undefined,
		numberingSystem: "arabic",
	}
	let code = "%c"

	$: time = strftime(+Date.now() - 1000 * 60 * 5, code, options)
</script>

<label for="code">Format code</label>
<input id="code" bind:value="{code}" />

<h1>{time}</h1>

<label for="locale">Locale</label>
<select id="locale" bind:value="{options.locales}">
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

<label for="weekdaye">Weekday</label>
<select id="weekday" bind:value="{options.weekday}">
	<option value="long">Long</option>
	<option value="short">Short</option>
	<option value="narrow">Narrow</option>
</select>

<button on:click="{() => (options.weekday = undefined)}">
	Default weekday
</button>
<hr />

<label for="year">Year</label>
<select id="year" bind:value="{options.year}">
	<option value="numeric">Numeric</option>
	<option value="2-digit">2 digit</option>
</select>

<button on:click="{() => (options.year = undefined)}"> Default year </button>
<hr />

<label for="month">Month</label>
<select id="month" bind:value="{options.month}">
	<option value="numeric">Numeric</option>
	<option value="2-digit">2 digit</option>
	<option value="long">Long</option>
	<option value="short">Short</option>
	<option value="narrow">Narrow</option>
</select>

<button on:click="{() => (options.month = undefined)}"> Default month </button>
<hr />

<label for="day">Day</label>
<select id="day" bind:value="{options.day}">
	<option value="numeric">Numeric</option>
	<option value="2-digit">2 digit</option>
</select>

<button on:click="{() => (options.day = undefined)}"> Default day </button>
<hr />

<label for="minute">Minute</label>
<select id="minute" bind:value="{options.minute}">
	<option value="numeric">Numeric</option>
	<option value="2-digit">2 digit</option>
</select>

<button on:click="{() => (options.minute = undefined)}">
	Default minute
</button>
<hr />
