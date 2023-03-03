<script>
	import { qrcode } from "@sveu/extend/qrcode"

	let value = "world"

	$: ({ output, pending, error } = qrcode(value))
</script>

<div class="grid place-items-center">
	<img src="{$output}" alt="qrcode" />
	<br />
	<p>Pending: {$pending}</p>
	<p>Error: {$error}</p>
	<br />
	<input class="border border-4" bind:value="{value}" />
</div>
