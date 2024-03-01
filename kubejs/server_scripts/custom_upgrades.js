console.log("KubeJS: Adding recipes for custom thermal augments...");

ServerEvents.recipes((event) => {


// THERMAL AUGMENT CRAFTING TABLE EXAMPLEK
// event.shapeless(Item.of('kubejs:shifting_cube', '{AugmentData:{Type: Upgrade, BaseMod:5f}}'), ['create:experience_nugget', '#forge:gears/signalum']).id(`mbm2:shifting_cube_augment`)

  event.recipes.thermal.smelter(Item.of('kubejs:honey_upgrade', '{AugmentData:{Type: Upgrade, BaseMod:5f, DynamoEnergy:0.9f}}'), ['thermal:upgrade_augment_3', '8x minecraft:honey_block', '8x minecraft:redstone_block'],0,20000).id('kubejs:thermal.smelter.honey_upgrade');
  event.recipes.thermal.smelter(Item.of('kubejs:rf_coil_xfer_big', '{AugmentData:{Type: RF, RFMax:6f, RFXfer:8f}}'), ['thermal:rf_coil_augment', '8x minecraft:honeycomb', '8x minecraft:redstone_block'],0,20000).id('kubejs:thermal.smelter.rf_coil_xfer_big');
  event.recipes.thermal.press(Item.of('kubejs:rf_coil_xfer_unstable', '{AugmentData:{Type: RF, RFMax:2f, RFXfer:12f, MachineEnergy:1.5f}}'), ['9x kubejs:rf_coil_xfer_big', 'thermal:press_packing_3x3_die'],0,20000).id('kubejs:thermal.press.rf_coil_xfer_unstable');
  event.recipes.thermal.smelter(Item.of('kubejs:machine_speed_unstable', '{AugmentData:{Type: Machine, MachinePower:2f, MachineEnergy:2f, MachineSpeed:6f}}'), ['thermal:machine_speed_augment', '8x minecraft:copper_ingot', '2x thermal:basalz_powder'],0,20000).id('kubejs:thermal.smelter.machine_speed_unstable');
  event.recipes.thermal.chiller(Item.of('kubejs:machine_efficiency_eco', '{AugmentData:{Type: Machine, MachineEnergy:0.25f, MachineSpeed:-0.5f}}'), ['thermal:machine_efficiency_augment', Fluid.of('cofh_core:honey',  1000)],0,10000).id('kubejs:thermal.smelter.machine_efficiency_eco');
  event.recipes.thermal.chiller(Item.of('kubejs:machine_efficiency_eco_2', '{AugmentData:{Type: Machine, MachineEnergy:0.25f, MachineSpeed:-0.5f}}'), ['thermal:machine_efficiency_augment', Fluid.of('productivebees:honey',  1000)],0,10000).id('kubejs:thermal.smelter.machine_efficiency_eco_2');
  event.recipes.thermal.smelter(Item.of('kubejs:machine_sieve_picky', '{AugmentData:{Type: Machine, MachineEnergy:3f, MachineSec:0.4f}}'), ['thermal:machine_output_augment', '8x minecraft:redstone_block', '8x thermal:basalz_powder'],0,20000).id('kubejs:thermal.smelter.machine_sieve_picky');
  event.recipes.thermal.smelter(Item.of('kubejs:machine_catalyst_eco', '{AugmentData:{Type: Machine, MachineCat:0.4f, MachineEnergy:1.5f}}'), ['thermal:machine_catalyst_augment', '8x minecraft:honeycomb', '8x minecraft:grass'],0,20000).id('kubejs:thermal.smelter.machine_catalyst_eco');
  event.recipes.thermal.smelter(Item.of('kubejs:dynamo_output_unstable', '{AugmentData:{Type: Dynamo, DynamoPower:2.5f, DynamoEnergy:0.75f}}'), ['thermal:dynamo_output_augment', '16x minecraft:honeycomb', '16x thermal:basalz_powder'],0,20000).id('kubejs:thermal.smelter.dynamo_output_unstable');
 
  
});

console.log("KubeJS: Added recipes for custom thermal augments.");
