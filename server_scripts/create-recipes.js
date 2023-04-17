onEvent('recipes', event => {
    
    event.recipes.createCompacting(
        'thermal:rubber',
        ['4x #minecraft:flowers',
        Fluid.of('minecraft:water',250)
    ])
    event.recipes.createCompacting(
        'thermal:rubber',
        Fluid.of('thermal:latex',250)
    )

    event.shapeless(
        'kubejs:kinetic_mechanism',
    [
        '#forge:stripped_logs',
        '4x create:andesite_alloy',
        '4x create:cogwheel'
    ])
    event.recipes.createSequencedAssembly(
        'kubejs:kinetic_mechanism',
        '#minecraft:wooden_slabs', [
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:andesite_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:cogwheel']),
        event.recipes.createPressing('kubejs:incomplete_kinetic_mechanism', 'kubejs:incomplete_kinetic_mechanism')
    ]).transitionalItem('kubejs:incomplete_kinetic_mechanism').loops(2)
    event.recipes.createSequencedAssembly(
        'kubejs:sealed_mechanism',
        '#forge:plates/copper', [
        event.recipes.createDeploying('kubejs:incomplete_sealed_mechanism', ['kubejs:incomplete_sealed_mechanism', 'kubejs:kinetic_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_sealed_mechanism', ['kubejs:incomplete_sealed_mechanism', 'thermal:cured_rubber']),
        event.recipes.createDeploying('kubejs:incomplete_sealed_mechanism', ['kubejs:incomplete_sealed_mechanism', 'thermal:cured_rubber']),
        event.recipes.createPressing('kubejs:incomplete_sealed_mechanism', 'kubejs:incomplete_sealed_mechanism')
    ]).transitionalItem('kubejs:incomplete_sealed_mechanism').loops(1)
    event.remove({output:'create:precision_mechanism'})
    event.recipes.createSequencedAssembly(
        'create:precision_mechanism',
        '#forge:plates/brass', [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'kubejs:kinetic_mechanism']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:gears/gold']),
        event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism')
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(1)

    event.remove({output:'create:encased_fan'})
    event.shaped(
        'create:encased_fan',[
            ' M ',
            'PCW',
            ' M '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'create:propeller'//Workpart
    })
    event.remove({output:'create:deployer'})
    event.shaped(
        'create:deployer',[
            ' M ',
            'PCW',
            ' M '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'create:brass_hand'//Workpart
    })
    event.remove({output:'create:mechanical_drill'})
    event.shaped(
        'create:mechanical_drill',[
            ' M ',
            'PCW',
            ' M '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'thermal:drill_head'//Workpart
    })
    event.remove({output:'create:mechanical_saw'})
    event.shaped(
        'create:mechanical_saw',[
            ' M ',
            'PCW',
            ' M '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'thermal:saw_blade'//Workpart
    })
    event.remove({output:'create:portable_storage_interface'})
    event.shaped(
        '2x create:portable_storage_interface',[
            'MCM',
            ' W '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        W:'create:chute'//Workpart
    })
    event.remove({output:'create:mechanical_harvester'})
    event.shaped(
        '2x create:mechanical_harvester',[
            ' MA',
            'PCW',
            ' MA'
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'#forge:plates/iron',//Workpart
        A:'create:andesite_alloy'
    })
    event.remove({output:'create:mechanical_plough'})
    event.shaped(
        '2x create:mechanical_plough',[
            ' MW',
            'PCW',
            ' MW'
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'#forge:plates/iron'//Workpart
    })
    event.remove({output:'create:mechanical_press'})
    event.shaped(
        'create:mechanical_press',[
            ' P ',
            'MCM',
            ' W '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:shaft',//Power
        W:'minecraft:iron_block'//Workpart
    })
    event.remove({output:'create:mechanical_mixer'})
    event.shaped(
        'create:mechanical_mixer',[
            ' P ',
            'MCM',
            ' W '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        P:'create:cogwheel',//Power
        W:'create:whisk'//Workpart
    })
    event.remove({output:'create:andesite_funnel'})
    event.shaped(
        '2x create:andesite_funnel',[
            ' M ',
            ' C ',
            ' W '
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        W:'minecraft:dried_kelp'//Workpart
    })
    event.remove({output:'create:andesite_tunnel'})
    event.shaped(
        '2x create:andesite_tunnel',[
            ' M ',
            ' CC',
            ' WW'
        ],{
        C:'create:andesite_casing',//casing
        M:'kubejs:kinetic_mechanism',//mechanism
        W:'minecraft:dried_kelp'//Workpart
    })

    event.remove({output:'create:mechanical_pump'})
    event.shapeless(
        'create:mechanical_pump',[
            'create:fluid_pipe',
            'kubejs:sealed_mechanism',
            'create:cogwheel'
    ])
    event.remove({output:'create:smart_fluid_pipe'})
    event.shapeless(
        'create:smart_fluid_pipe',[
            'create:fluid_pipe',
            'kubejs:sealed_mechanism',
            'create:electron_tube'
    ])
    event.remove({output:'create:spout'})
    event.shaped(
        'create:spout',[
            'MTM',
            ' W '
        ],{
        M:'kubejs:sealed_mechanism',
        T:'create:fluid_tank',
        W:'minecraft:dried_kelp'
    })
    event.remove({output:'create_enchantment_industry:printer'})
    event.shaped(
        'create_enchantment_industry:printer',[
            'MTM',
            ' W ',
            ' S '
        ],{
        M:'kubejs:sealed_mechanism',
        T:'create:fluid_tank',
        W:'minecraft:dried_kelp',
        S:'#forge:plates/iron'
    })
    event.remove({output:'create:portable_fluid_interface'})
    event.shaped(
        'create:portable_fluid_interface',[
            'MCM',
            ' W '
        ],{
        M:'kubejs:sealed_mechanism',
        C:'create:copper_casing',
        W:'create:chute'
    })
    event.remove({output:'create:hose_pulley'})
    event.shaped(
        'create:hose_pulley',[
            'MCM',
            ' W ',
            ' S '
        ],{
        M:'kubejs:sealed_mechanism',
        C:'create:copper_casing',
        W:'minecraft:dried_kelp_block',
        S:'create:copper_sheet'
    })

    event.remove({output:'create:mechanical_crafter'})
    event.shaped(
        '3x create:mechanical_crafter',[
            ' P ',
            'MCM',
            ' W '
        ],{
        C:'create:brass_casing',//casing
        M:'create:precision_mechanism',//mechanism
        P:'create:cogwheel',//Power
        W:'minecraft:crafting_table'//Workpart
    })
    event.remove({output:'create:sequenced_gearshift'})
    event.shapeless(
        'create:sequenced_gearshift',[
            'create:brass_casing',
            'create:precision_mechanism',
            'create:cogwheel'
    ])
    event.remove({output:'create:content_observer'})
    event.recipes.createConversion(
        'create:content_observer',
        'create:stockpile_switch'
    )
    event.shaped(
        '2x create:content_observer',[
            ' W ',
            'MCM'
        ],{
        C:'create:brass_casing',//casing
        M:'create:precision_mechanism',//mechanism
        W:'minecraft:comparator'//Workpart
    })
    event.remove({output:'create:steam_engine'})
    event.shaped(
        'create:steam_engine',[
            ' S ',
            'PWP',
            'MCM'
        ],{
        C:'create:copper_casing',
        M:'kubejs:sealed_mechanism',
        P:'create:precision_mechanism',
        W:'create:andesite_alloy',
        S:'#forge:plates/gold'
    })
    event.remove({output:'create:smart_chute'})
    event.shaped(
        '2x create:smart_chute',[
            ' M ',
            ' S ',
            ' W '
        ],{
        S:'#forge:plates/brass',
        M:'create:precision_mechanism',//mechanism
        W:'create:chute'//Workpart
    })
    event.remove({output:'create:brass_funnel'})
    event.shaped(
        '2x create:brass_funnel',[
            ' M ',
            ' C ',
            ' W '
        ],{
        C:'create:brass_casing',//casing
        M:'create:precision_mechanism',//mechanism
        W:'minecraft:dried_kelp'//Workpart
    })
    event.remove({output:'create:brass_tunnel'})
    event.shaped(
        '2x create:brass_tunnel',[
            ' M ',
            ' CC',
            ' WW'
        ],{
        C:'create:brass_casing',//casing
        M:'create:precision_mechanism',//mechanism
        W:'minecraft:dried_kelp'//Workpart
    })

})