(function leet() {
	const d = new Date()
	const timeOffset = getNextLeetMS(d)

	console.log(`Setting a timeout of ${timeOffset} ms until next leet alert`)

	setTimeout(() => {
		chrome.notifications.create({
			message: 'Tell yer frens',
			title: 'Leet!',
			type: 'basic',
			iconUrl: '/images/icon128.png'
		}, () => {
			console.log('Notification triggered, restart the timer')
			leet()
		})
	}, timeOffset)
})()

function getNextLeetMS(d) {
	const nextLeet = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 13, 37, 0, 0)

	if (nextLeet.getTime() <= d.getTime()) {
		nextLeet.setDate(nextLeet.getDate() + 1)
	}

	return nextLeet.getTime() - d.getTime()
}