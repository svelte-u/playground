import { initializeApp } from "firebase/app"

// Replaced with your own config
const config = {
	apiKey: "AIzaSyB1ict-Hl9LOWUYodUP5PpPwYi7-K1YtoI",
	authDomain: "svelte-u.firebaseapp.com",
	projectId: "svelte-u",
	storageBucket: "svelte-u.appspot.com",
	messagingSenderId: "434912196844",
	appId: "1:434912196844:web:a1eabfcb912b27d1150dc9",
}

const app = initializeApp(config)

export default app
