<script>
	import {
		average,
		divide,
		max,
		min,
		multiply,
		subtract,
		sum,
	} from "@sveu/shared/math"

	const sums = sum(1, 2, 3, 4, "5")

	const divides = divide("30", "2")

	const subtracts = subtract(["50", 10], [20, 5])

	const multiplies = multiply(3, 5)

	const averages = average(["10", "20"])

	const maxed = max(1, 2, 3, 4, 5, 6, "7", 15, 8, 9, 10, 11, 12, 13, 14)

	const minned = min(15, 20, 30, 40, 50, 60, 70, 80, 90, 100)
</script>

<h1>Sum: {sums}</h1>

<h1>Divide: {divides}</h1>

<h1>Subtract: {subtracts}</h1>

<h1>Multiply: {multiplies}</h1>

<h1>Average: {averages}</h1>

<h1>Max: {maxed}</h1>

<h1>Min: {minned}</h1>
