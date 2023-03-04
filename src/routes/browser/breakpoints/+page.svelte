<script>
	import { breakpoints } from "@sveu/browser"

	const breakpoints_tailwind = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
		"2xl": 1536,
	}

	const breakpoint = breakpoints(breakpoints_tailwind)

	const sm_width = breakpoints_tailwind.sm

	const sm = breakpoint.lt("sm")

	const sme = breakpoint.lte("sm")

	const md = breakpoint.bn("sm", "md")

	const lg = breakpoint.bn("md", "lg")

	const xl = breakpoint.bn("lg", "xl")

	const xxl = breakpoint.bn("xl", "2xl")

	const xxxl = breakpoint["2xl"]
</script>

<div class="text-center">
	<h1>SM Width: {sm_width}</h1>

	<h1>SM: {$sm}</h1>

	<h1>SME: {$sme}</h1>

	<h1>MD: {$md}</h1>

	<h1>LG: {$lg}</h1>

	<h1>XL: {$xl}</h1>

	<h1>XXL: {$xxl}</h1>

	<h1>XXXL: {$xxxl}</h1>
</div>
