onEvent('item.registry', event => {

    let mechanism = (name, rarity) => {
		let id = name.toLowerCase()
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(rarity ? rarity : RARITY_COMMON)
		event.create('incomplete_' + id + '_mechanism','create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')
	}

	mechanism('Kinetic')
	mechanism('Sealed')
	mechanism('Infernal', RARITY_UNCOMMON)
	mechanism('Inductive', RARITY_UNCOMMON)
	mechanism('Abstruse', RARITY_RARE)
	mechanism('Calculation', RARITY_RARE)

})