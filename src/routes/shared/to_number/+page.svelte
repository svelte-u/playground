<script>
	import { to_number } from "@sveu/shared"
</script>

<p class="text-center">
	{to_number("1.5", { method: "int" })}
	<br />
	{to_number("edc", { nan_to_zero: true })}
</p>
