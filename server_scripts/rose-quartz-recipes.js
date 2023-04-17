onEvent('recipes', event => {
    
    event.recipes.createCrushing(
        [
        '2x minecraft:redstone',
        Item.of('minecraft:redstone').withChance(0.5)
        ],
        'biomesoplenty:rose_quartz_shard'
    )
    event.recipes.createCrushing(
        [
        '2x biomesoplenty:rose_quartz_shard',
        Item.of('biomesoplenty:rose_quartz_shard').withChance(0.5)
        ],
        'biomesoplenty:rose_quartz_cluster'
    )
    
    event.recipes.createHaunting(
        'biomesoplenty:rose_quartz_shard',
        'minecraft:amethyst_shard'
    )
    event.recipes.createHaunting(
        'biomesoplenty:small_rose_quartz_bud',
        'minecraft:small_amethyst_bud'
    )
    event.recipes.createHaunting(
        'biomesoplenty:medium_rose_quartz_bud',
        'minecraft:medium_amethyst_bud'
    )
    event.recipes.createHaunting(
        'biomesoplenty:large_rose_quartz_bud',
        'minecraft:large_amethyst_bud'
    )
    event.recipes.createHaunting(
        'biomesoplenty:rose_quartz_cluster',
        'minecraft:amethyst_cluster'
    )
    event.recipes.createHaunting(
        'biomesoplenty:rose_quartz_block',
        'minecraft:amethyst_block'
    )

    event.recipes.createSequencedAssembly(
        'create:polished_rose_quartz',
        'biomesoplenty:rose_quartz_shard', [
        event.recipes.createFilling('kubejs:growing_polished_rose_quartz', ['kubejs:growing_polished_rose_quartz', Fluid.of('thermal:redstone',50)]),
    ]).transitionalItem('kubejs:growing_polished_rose_quartz').loops(5)

})