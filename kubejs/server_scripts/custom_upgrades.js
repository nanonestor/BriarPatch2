console.log("KubeJS: Adding recipes for custom thermal augments...");

ServerEvents.recipes((event) => {


//KubeJS crafting table example - New Augment code
 // event.shapeless(Item.of('kubejs:shifting_cube', '{AugmentData:{Type: Upgrade, BaseMod:5f}}'), ['create:experience_nugget', '#forge:gears/signalum']).id(`mbm2:shifting_cube_augment`)




  event.recipes.thermal.smelter(Item.of('kubejs:honey_upgrade', '{AugmentData:{Type: Upgrade, BaseMod:5f, DynamoEnergy:0.9f}}'), ['thermal:upgrade_augment_3', '8x minecraft:honey_block', '8x minecraft:redstone_block'],0,20000).id('kubejs:thermal.smelter.honey_upgrade')








});

console.log("KubeJS: Added recipes for custom thermal augments.");
