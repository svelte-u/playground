<script>
	import { support } from "@sveu/browser"

	const supported = support("clipboard")

	// 	const supported = support("memory", "performance")
</script>

<h1 class="text-center">Supported: {$supported}</h1>
