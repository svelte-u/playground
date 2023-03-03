<script>
	import { to_number } from "@sveu/shared"
</script>

{to_number("1.5", { method: "int" })}
<hr />
{to_number("edc", { nan_to_zero: true })}
