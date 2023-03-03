<script lang="ts">
	import { async_state } from "@sveu/shared"

	async function get_random_image(): Promise<any> {
		throw Error("Testing error, check your console...to see the error")
	}

	const { loading, state, ready, execute } = async_state(
		get_random_image,
		"https://i.ibb.co/VjFRjmf/Bugs-in-Bah-Humduck.jpg",
		{ throw_error: true }
	)
</script>

<img src="{$state}" alt="random" width="200" height="200" />
<br />
<h3>Loading: {$loading}</h3>
<h3>Ready: {$ready}</h3>
<button disabled="{$loading}" on:click="{() => execute()}">Fetch</button>
