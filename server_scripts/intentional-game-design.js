(() => {
	onEvent('item.pickup', event => {
		let player = event.player
		let item = event.getItemEntity()
		let name = item.getCustomName()

		if(name && name.getText() == '丑') {
			if(!player.creativeMode) {
				player.attack('outOfWorld', 1000)
				event.server.tell('哦！那看起来血压很高')
			}
			let blockId = '' + event.getLevel().getBlock(Math.floor(item.x), item.y, Math.floor(item.z)).getId()
			let superExplosion = ['create:andesite_funnel', 'create:brass_funnel'].indexOf(blockId) != -1
			event.getLevel().getBlock(item.x - 1, item.y, item.z - 1)
				.createExplosion()
				.causesFire(false)
				.damagesTerrain(true)
				.strength(superExplosion ? 6 : 3)
				.explode()
		}
	})

	onEvent('entity.spawned', event => {
		const { server, level, entity } = event
		if(entity.getType().toString() == 'minecraft:item') {
			let block = level.getBlock(Math.floor(entity.x), entity.y, Math.floor(entity.z))
			let blockId = block.getId()
			if(['create:andesite_funnel', 'create:brass_funnel'].indexOf(blockId) != -1) {
				if(('' + block).indexOf('extracting=true') != -1) {
					entity.setCustomName('丑')
				}
			}
		}
	})
})()
