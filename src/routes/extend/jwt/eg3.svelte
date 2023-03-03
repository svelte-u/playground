<script lang="ts">
	import { jwt } from "@sveu/extend/jwt"
	function on_error(error: any) {
		alert(error.message)
	}

	let token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

	$: ({ header, payload } = jwt(token, { on_error: on_error }))
</script>

<input bind:value="{token}" />
{#if !header || !payload}
	<h1>Error</h1>
{:else}
	<h1>Header:</h1>
	<h2>{JSON.stringify(header)}</h2>

	<hr />

	<h1>Payload:</h1>
	<h2>{JSON.stringify(payload)}</h2>
{/if}
