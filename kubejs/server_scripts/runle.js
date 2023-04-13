(() => {
	// ===== 快捷命令 =====
	const commandHelp = `
	KubeJS macro command - #runle
	Module: Runle
	#runle stop - [OP] Stop server immediately
	#runle timer - [OP] Stop server after a 20-second countdown
	#runle cancel <id> - [OP] Cancel countdown in progress
	`.trim()
	onEvent('player.chat', event => {
		const { player, server, message } = event

		if(commandStarts(message, '#runle')) {
			event.cancel()
		} else {
			return
		}
		if(!player.isOp()) {
			player.tell('Permission denied')
			return
		}

		message = message.trim()
		if(message == '#runle') {
			player.tell(commandHelp)
		}
		
		if(commandStarts(message, '#runle stop')) {
			for(const player of server.getPlayers()) {
				server.runCommandSilent('kick ' + player + ' [Server] runle')
			}
			server.runCommandSilent('stop')
		} else if(commandStarts(message, '#runle timer')) {
			countDown = 20 * 20 + 20
			server.runCommandSilent('say Get ready to run!')
		} else if(commandStarts(message, '#runle cancel')) {
			server.runCommandSilent('say Runle countdown canceled.')
			countDown = undefined
		}
	})

	// ===== 倒计时 =====
	let countDown = undefined
	onEvent('server.tick', event => {
		const { player, server, message } = event

		if(countDown === undefined) {
			return
		}
		countDown -= 1
		if(countDown > 0 && countDown % 20 == 0) {
			server.runCommandSilent('say ' + (countDown / 20))
		}
		if(countDown == 0) {
			for(const player of server.getPlayers()) {
				server.runCommandSilent('kick ' + player + ' [Server] runle')
			}
			server.runCommandSilent('stop')
		}
	})
})()
