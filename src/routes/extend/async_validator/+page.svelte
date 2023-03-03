<script lang="ts">
	import { enhance } from "$app/forms"

	import type { ActionData } from "./$types"

	export let form: ActionData
</script>

<div class="h-screen bg-gray-100 w-full grid place-items-center">
	<form
		method="POST"
		class="bg-white rounded space-y-4 shadow-xl text-center max-w-96 p-8"
		use:enhance>
		<label for="email">Email</label>
		<input
			id="email"
			type="email"
			name="email"
			class="border rounded-lg border-2"
			class:border-red-500="{form?.errors?.email}" />
		{#if form?.errors?.email}
			<p style="color: red">{form?.errors?.email[0].message}</p>
		{/if}

		<label for="name">Name</label>
		<input
			id="name"
			type="text"
			name="name"
			class="border rounded-lg border-2"
			class:border-red-500="{form?.errors?.name}" />

		{#if form?.errors?.name}
			<p style="color: red">{form?.errors?.name[0].message}</p>
		{/if}

		<label for="age">Age</label>
		<!-- try to change the type from number to text -->
		<input
			id="age"
			type="number"
			name="age"
			class="border rounded-lg border-2"
			class:border-red-500="{form?.errors?.age}" />

		{#if form?.errors?.age}
			<p style="color: red">{form?.errors?.age[0].message}</p>
		{/if}

		<button>Submit</button>
	</form>
</div>
