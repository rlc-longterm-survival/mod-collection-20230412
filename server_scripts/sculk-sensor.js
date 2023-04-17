onEvent('recipes', event => {
	event.shaped(
		Item.of('minecraft:sculk_sensor', 1),
		[ 
			'KZK', 
			'GMG',
			'KZK'  
		],
		{
			K: 'minecraft:dried_kelp',
			Z: 'ae2:wireless_booster',
			G: 'createaddition:gold_spool',
			M: 'twilightforest:ore_magnet'
		}
	)
})
