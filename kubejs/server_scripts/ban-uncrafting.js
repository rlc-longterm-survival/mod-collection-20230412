(() => {
	onEvent('block.right_click', event => {
		if(event.block.getId() == "twilightforest:uncrafting_table"){
			event.cancel();
		}
	})
})()