(() => {
	let tickCount = 0
	let tickInterval = 20 * 4

	let updateTick = () => {
		tickCount = (tickCount + 1) % tickInterval
		return tickCount
	}

	onEvent('server.tick', event => {
		updateTick()
	})

	onEvent('server.tick', event => {
		if(tickCount != 0) {
			return
		}
		const server = event.server
		const players = server.getPlayers()
		for(let player of players) {
			if('' + player == 'Chopin_Jack') {
				player.attack('outOfWorld', 0.001)
			}
		}
	})
})()
