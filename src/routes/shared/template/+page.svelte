<script>
	import { template } from "@sveu/shared"

	const str = `Hi %name%,
	Welcome to %platfrom%
	`
	const result = template(
		str,
		{ name: "Beatrice", platfrom: "svelte" },
		/\%(.+?)\%/g
	)
</script>

<h1 class="text-center">{result}!</h1>
