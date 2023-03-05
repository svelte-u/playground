<script setup lang="ts">
	import { permission } from "@sveu/browser"

	const accelerometer = permission("accelerometer")

	const accessibilityEvents = permission("accessibility-events")

	const ambientLightSensor = permission("ambient-light-sensor")

	const backgroundSync = permission("background-sync")

	const camera = permission("camera")

	const clipboardRead = permission("clipboard-read")

	const clipboardWrite = permission("clipboard-write")

	const gyroscope = permission("gyroscope")

	const magnetometer = permission("magnetometer")

	const microphone = permission("microphone")

	const notifications = permission("notifications")

	const paymentHandler = permission("payment-handler")

	const persistentStorage = permission("persistent-storage")

	const push = permission("push")

	const speaker = permission("speaker")

	const geolocation = permission("geolocation")

	$: code = JSON.stringify(
		{
			accelerometer: $accelerometer,
			accessibilityEvents: $accessibilityEvents,
			ambientLightSensor: $ambientLightSensor,
			backgroundSync: $backgroundSync,
			camera: $camera,
			clipboardRead: $clipboardRead,
			clipboardWrite: $clipboardWrite,
			gyroscope: $gyroscope,
			magnetometer: $magnetometer,
			microphone: $microphone,
			notifications: $notifications,
			paymentHandler: $paymentHandler,
			persistentStorage: $persistentStorage,
			push: $push,
			speaker: $speaker,
			geolocation: $geolocation,
		},
		null,
		2
	)
</script>

<pre lang="json">{code}</pre>
