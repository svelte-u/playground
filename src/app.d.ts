// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

// only for this demo
declare namespace svelteHTML {
	interface HTMLAttributes {
		"on:clicked"?: (event: CustomEvent<boolean>) => void
	}
}
