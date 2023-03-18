<script lang="ts">
	import "uno.css"
	import "@unocss/reset/tailwind.css"
	import { page } from "$app/stores"
</script>

<header>
	<nav>
		<a href="/{$page.url.search}"> Home</a>
	</nav>
</header>

<main>
	<slot />
</main>
