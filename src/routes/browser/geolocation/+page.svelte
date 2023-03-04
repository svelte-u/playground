<script lang="ts">
	import { geolocation } from "@sveu/browser"

	const { coords, located_at, error, resume, pause, supported } =
		geolocation()
</script>

<div class="grid place-items-center">
	<h1>supported: {$supported}</h1>

	<pre lang="json">{JSON.stringify(
			{
				coords: {
					accuracy: $coords.accuracy,
					latitude: $coords.latitude,
					longitude: $coords.longitude,
					altitude: $coords.altitude,
					altitudeAccuracy: $coords.altitudeAccuracy,
					heading: $coords.heading,
					speed: $coords.speed,
				},
				located_at: $located_at,
				error: $error ? $error.message : error,
			},
			null,
			4
		)}</pre>
	<button class="rounded-md bg-red-600 text-white p-3" on:click="{pause}">
		Pause watch
	</button>
	<br />
	<button class="rounded-md bg-green-600 text-white p-3" on:click="{resume}">
		Start watch
	</button>
</div>
