<script lang="ts">
	import { jwt } from "@sveu/extend/jwt"

	let token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

	$: ({ header, payload } = jwt(token))
</script>

<input bind:value="{token}" />

<h1>Header:</h1>
<h2>{JSON.stringify(header)}</h2>

<hr />

<h1>Payload:</h1>
<h2>{JSON.stringify(payload)}</h2>
