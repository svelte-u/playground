import { async_validator } from "@sveu/extend/async_validator"
import { to_number } from "@sveu/shared"

import { rules } from "./helper"

import type { Dict } from "@sveu/shared"

import type { Actions } from "./$types"

export const actions: Actions = {
	default: async ({ request }) => {
		const data: Dict = Object.fromEntries(await request.formData())

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (!rules.age.required && data.age === "") delete data.age
		else data.age = to_number(data.age)

		const { error_fields, pass } = await async_validator(data, rules)
		if (!pass) return { errors: error_fields }
	},
}
