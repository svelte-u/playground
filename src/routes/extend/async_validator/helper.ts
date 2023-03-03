import type { Rules } from "async-validator"

export const rules: Rules = {
	name: {
		type: "string",
		min: 5,
		max: 20,
		required: true,
	},
	age: {
		type: "number",
		required: false,
	},
	email: [
		{
			type: "email",
			required: true,
		},
	],
}
