// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
self.addEventListener("message", function (e) {
	self.postMessage(e.data.toUpperCase())
})
