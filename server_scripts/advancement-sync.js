(() => {
	let tickCount = 0
	let tickInterval = 10

	let updateTick = () => {
		tickCount = (tickCount + 1) % tickInterval
		return tickCount
	}

	let init = false
	let advancementList = undefined
	let gainedAdvancements = {}

	onEvent('server.tick', event => {
		updateTick()
	})

	// ===== 获取进度列表 =====
	onEvent('server.tick', event => {
		if(init) {
			return
		}
		const server = event.server
		const advancementManager = server.getMinecraftServer().getAdvancements()
		const advancements = advancementManager.getAllAdvancements()
		advancementList = []
		for(let item of advancements) {
			if(item.display) {
				advancementList.push(item.id)
			}
		}
		init = true
	})

	// ===== 扫描已获取进度 =====
	onEvent('server.tick', event => {
		if(tickCount != 0 || !init) {
			return
		}
		const server = event.server
		const players = server.getPlayers()
		for(let player of players) {
			for(let id of advancementList) {
				if(player.isAdvancementDone(id)) {
					if(!gainedAdvancements[id]) {
						gainedAdvancements[id] = true
					}
				}
			}
		}
	})

	// ===== 将进度赋予玩家 =====
	onEvent('server.tick', event => {
		if(tickCount != 5 || !init) {
			return
		}
		const server = event.server
		const players = server.getPlayers()
		for(let player of players) {
			for(let id of advancementList) {
				if(gainedAdvancements[id] && !player.isAdvancementDone(id)) {
					player.unlockAdvancement(id)
				}
			}
		}
	})

	// ===== 快捷命令 =====
	const commandHelp = `
KubeJS macro command - #adv
Module: Advancement Sync
#adv count - Show count of gained advancements
#adv revoke * - [OP] Revoke all advancements for everyone
#adv revoke <id> - [OP] Revoke an advancement for everyone
	`.trim()
	onEvent('player.chat', event => {
		const { player, server, message } = event
		const players = server.getPlayers()

		if(message == '#adv' || message.startsWith('#adv ')) {
			event.cancel()
		} else {
			return
		}
		if(!init) {
			return
		}

		message = message.trim()
		
		if(message == '#adv revoke' || message.startsWith('#adv revoke ')) {
			if(!player.isOp()) {
				player.tell('Permission denied.')
				return
			}
		}

		if(message == '#adv') {
			player.tell(commandHelp)
		}
		if(message == '#adv count') {
			let gainedCnt = 0
			for(let id in gainedAdvancements) {
				gainedCnt += 1
			}
			player.tell('Gained ' + gainedCnt + '/' + advancementList.length + ' advancements')
			return
		} else if(message == '#adv revoke *') {
			player.tell('Revoked all advancements for everyone.')
			for(const id of advancementList) {
				for(const player of players) {
					player.revokeAdvancement(id)
				}
				gainedAdvancements[id] = false
			}
		} else if(message.startsWith('#adv revoke ')) {
			const id = message.substring('#adv revoke '.length).trim()
			if(advancementList.indexOf(id) != -1) {
				player.tell('Revoked advancement ' + id + ' for everyone.')
				for(const player of players) {
					player.revokeAdvancement(id)
				}
				gainedAdvancements[id] = false
			} else {
				player.tell('Failed to revoke - no such advancement.')
			}
		}
	})
})()
