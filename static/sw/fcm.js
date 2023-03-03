/* eslint-disable no-undef */
importScripts(
	"https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
)
importScripts(
	"https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
)

// Replaced with your own config
const config = {
	apiKey: "AIzaSyB1ict-Hl9LOWUYodUP5PpPwYi7-K1YtoI",
	authDomain: "svelte-u.firebaseapp.com",
	projectId: "svelte-u",
	storageBucket: "svelte-u.appspot.com",
	messagingSenderId: "434912196844",
	appId: "1:434912196844:web:a1eabfcb912b27d1150dc9",
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
	const title = payload.notification.title

	const body = payload.notification.body

	const icon =
		payload.notification?.image ??
		"https://avatars.githubusercontent.com/u/120715197?s=200&v=4"

	return self.registration.showNotification(title, {
		body: body,
		icon: icon,
	})
})

self.addEventListener("push", function (event) {
	event.preventDefault()
})
