(() => {
	onEvent('block.right_click', event => {
		if([
			"twilightforest:uncrafting_table",
			'mekanismgenerators:reactor_glass'
		].indexOf(event.block.getId()) != -1 ||
		event.block.getId().startsWith('mekanismgenerators:fission_reactor_')){
			event.cancel();
		}
	})
})()
