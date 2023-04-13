onEvent('recipes', event => {
	event.remove({ output: 'naturescompass:naturescompass' })
	event.shaped(
		Item.of('naturescompass:naturescompass', 1),
		[ 
			'WBX', 
			'JCK',
			'YBZ'  
		],
		{
			B: "#minecraft:logs",
			C: 'thermal:netherite_gear',
			J: 'create:refined_radiance',
			K: 'create:shadow_steel',
			W: 'twilightforest:time_sapling',
			X: 'twilightforest:transformation_sapling',
			Y: 'twilightforest:hollow_oak_sapling',
			Z: 'twilightforest:rainbow_oak_sapling'
		}
	)
})
