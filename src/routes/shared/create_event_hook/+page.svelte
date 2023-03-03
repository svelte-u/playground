<script lang="ts">
	import { create_event_hook } from "@sveu/shared"
	let data: any
	function request(url: string) {
		const fetch_result = create_event_hook()

		const fetch_error = create_event_hook()

		fetch(url)
			.then((result) => fetch_result.trigger(result))
			.catch((error) => fetch_error.trigger(error?.message))

		return {
			on_result: fetch_result.on,
			on_error: fetch_error.on,
		}
	}

	const { on_result, on_error } = request(
		"https://jsonplaceholder.typicode.com/todos/1"
	)
	on_result(async (result) => {
		const _data = await result.json()

		console.table(_data)

		data = JSON.stringify(_data)
	})

	on_error((message) => {
		console.log(message)
	})
</script>

{data}
