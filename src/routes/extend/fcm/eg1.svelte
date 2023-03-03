<script lang="ts">
	import { fcm } from "@sveu/extend/fcm"
	import firebase_app from "./firebase"

	const { token, error, supported, on_message } = fcm(firebase_app, {
		vapid_key:
			"BAnpV1hirbQJiuOPxIdTg1Egi5bXWMJIWLDtGEqpHNrEY2QimBZuxcgCU37Z9mhk_AWsohsuc40tgeGMnoTWlUk",
	})

	$: if ($error != null) console.log($error)

	on_message((payload) => {
		console.log("on_message", payload)
	})
</script>

<div class="space-y-5 text-center">
	<h1>Firebase Cloud Messaging is supported: {$supported}</h1>

	<textarea class="h-60 w-60" value="{$token}"></textarea>
</div>
