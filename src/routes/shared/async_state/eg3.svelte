<script lang="ts">
	import { async_state } from "@sveu/shared"

	async function get_random_image() {
		const resp = await fetch("https://source.unsplash.com/random/")
		return resp.url
	}

	const { loading, state, ready, execute } = async_state(
		get_random_image,
		"https://i.ibb.co/VjFRjmf/Bugs-in-Bah-Humduck.jpg",
		{ immediate: false }
	)
</script>

<img src="{$state}" alt="random" width="200" height="200" />
<br />
<h3>Loading: {$loading}</h3>
<h3>Ready: {$ready}</h3>
<button disabled="{$loading}" on:click="{() => execute()}">Fetch</button>
