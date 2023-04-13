(() => {
	onEvent('entity.death', event => {
		const { server, entity } = event
		const player = entity.getPlayer()
		if(!player) {
			return
		}
		server.runCommandSilent(`give ${'' + player} minecraft:player_head{SkullOwner:${JSON.stringify('' + player)}}`)
	})
})()
