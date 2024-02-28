
print("--- loading custom_upgrades.zs ---");

import crafttweaker.api.item.tooltip.ITooltipFunction;
import crafttweaker.api.text.Style;
import crafttweaker.api.text.Component;
import crafttweaker.api.text.TextColor;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.text.FormattedText;

import crafttweaker.api.text.MutableComponent;
#import mods.jei.JEI;
#import mods.jei.recipe.JeiRecipe;
import mods.jeitweaker.Jei;

// Actual recipes to create upgrades
// craftingTable.addShapeless("add_thermal_nbt",<item:kubejs:honey_upgrade>.withTag({AugmentData: {Type: 'Upgrade', BaseMod: 8f, DynamoEnergy: 0.5f}}), [<item:kubejs:honey_latex_bricks>]);

// <recipetype:thermal:smelter>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient[] ingredients, float experience, int energy);

<recipetype:thermal:smelter>.addRecipe("make_honey_upgrade", [<item:kubejs:honey_upgrade>.withTag({AugmentData: {Type: 'Upgrade', BaseMod: 8f, DynamoEnergy: 0.9f}}) % 100], [<item:thermal:upgrade_augment_3>, <item:minecraft:honey_block> * 8, <item:minecraft:redstone_block> * 8], 0, 20000);
<recipetype:thermal:smelter>.addRecipe("make_rf_xfer_big", [<item:kubejs:rf_coil_xfer_big>.withTag({AugmentData: {Type: 'RF', RFMax: 6f, RFXfer: 8f}}) % 100], [<item:thermal:rf_coil_augment>, <item:minecraft:honeycomb> * 8, <item:minecraft:redstone_block> * 8], 0, 20000);
<recipetype:thermal:press>.addRecipe("make_rf_coil_xfer_unstable", [<item:kubejs:rf_coil_xfer_unstable>.withTag({AugmentData: {Type: 'RF', RFMax: 2f, RFXfer: 12f, MachineEnergy: 1.5f}}) % 100], <fluid:minecraft:empty>, [<item:kubejs:rf_coil_xfer_big> * 9, <item:thermal:press_packing_3x3_die>], 20000);
<recipetype:thermal:smelter>.addRecipe("make_machine_speed_unstable", [<item:kubejs:machine_speed_unstable>.withTag({AugmentData: {Type: 'Machine', MachinePower: 2f, MachineEnergy: 2f, MachineSpeed: 6f}}) % 100], [<item:thermal:machine_speed_augment>, <item:minecraft:copper_ingot> * 8, <item:thermal:basalz_powder> * 2], 0, 20000);

<recipetype:thermal:chiller>.addRecipe("make_machine_efficiency_eco", <item:kubejs:machine_efficiency_eco>.withTag({AugmentData: {Type: 'Machine', MachineEnergy: 0.25f, MachineSpeed: -0.5f}}), <item:thermal:machine_efficiency_augment>, <fluid:cofh_core:honey> *1000, 10000);
<recipetype:thermal:chiller>.addRecipe("make_machine_efficiency_eco_2", <item:kubejs:machine_efficiency_eco>.withTag({AugmentData: {Type: 'Machine', MachineEnergy: 0.25f, MachineSpeed: -0.5f}}), <item:thermal:machine_efficiency_augment>, <fluid:productivebees:honey> *1000, 10000);

<recipetype:thermal:smelter>.addRecipe("make_machine_sieve_picky", [<item:kubejs:machine_sieve_picky>.withTag({AugmentData: {Type: 'Machine', MachineEnergy: 3f, MachineSec: 0.4f}}) % 100], [<item:thermal:machine_output_augment>, <item:minecraft:redstone_block> * 8, <item:thermal:basalz_powder> * 8], 0, 20000);
<recipetype:thermal:smelter>.addRecipe("make_machine_catalyst_eco", [<item:kubejs:machine_catalyst_eco>.withTag({AugmentData: {Type: 'Machine', MachineCat: 0.4f, MachineEnergy: 1.5f}}) % 100], [<item:thermal:machine_catalyst_augment>, <item:minecraft:honeycomb> * 8, <item:minecraft:grass> * 8], 0, 20000);
<recipetype:thermal:smelter>.addRecipe("make_dynamo_output_unstable", [<item:kubejs:dynamo_output_unstable>.withTag({AugmentData: {Type: 'Dynamo', DynamoPower: 2.5f, DynamoEnergy: 0.75f}}) % 100], [<item:thermal:dynamo_output_augment>, <item:minecraft:honeycomb> * 16, <item:thermal:basalz_powder> * 16], 0, 20000);


// Simple tooltip example
// <item:kubejs:honey_upgrade>.addTooltip("BP Thermal Augment");

// Tooltip additions


var augmentlabel = 
[<item:thermal:upgrade_augment_1>,
<item:thermal:upgrade_augment_2>,
<item:thermal:upgrade_augment_3>,
<item:thermal:xp_storage_augment>,
<item:thermal:rf_coil_augment>,
<item:thermal:rf_coil_storage_augment>,
<item:thermal:rf_coil_xfer_augment>,
<item:thermal:fluid_tank_augment>,
<item:thermal:item_filter_augment>,
<item:thermal:machine_speed_augment>,
<item:thermal:machine_efficiency_augment>,
<item:thermal:machine_output_augment>,
<item:thermal:machine_catalyst_augment>,
<item:thermal:machine_cycle_augment>,
<item:thermal:dynamo_output_augment>,
<item:thermal:dynamo_fuel_augment>,
<item:thermal:area_radius_augment>,
<item:thermal:potion_amplifier_augment>,
<item:thermal:potion_duration_augment>,
<item:kubejs:honey_upgrade>,
<item:kubejs:rf_coil_xfer_big>,
<item:kubejs:rf_coil_xfer_unstable>,
<item:kubejs:machine_speed_unstable>,
<item:kubejs:machine_efficiency_eco>,
<item:kubejs:machine_sieve_picky>,
<item:kubejs:machine_catalyst_eco>,
<item:kubejs:dynamo_output_unstable>];


for element in augmentlabel {
element.modifyTooltip((stack, tooltip, isAdvanced) => {
    val tooltipString = "Thermal Augment / Upgrade" as crafttweaker.api.text.TextComponent;
    tooltip.insert(1, tooltipString.setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFFF55)));
});
}

// *** Individual item tooltips ***

// honey_upgrade
<item:kubejs:honey_upgrade>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("Improves base attributes. Other augments may be more effective as a result" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
});
<item:kubejs:honey_upgrade>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("Scale Factor: 8x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
});

// rf_coil_xfer_big
<item:kubejs:rf_coil_xfer_big>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:rf_coil_xfer_big>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("RF Coil infused with honey and redstone." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("Because everything runs more smoothly when slathered in honey." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("RF Capacity: 6x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
    tooltip.insert(6, ("RF Transfer: 8x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
});

// rf_coil_xfer_unstable
<item:kubejs:rf_coil_xfer_unstable>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:rf_coil_xfer_unstable>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("A bunch of Honey Coated RF Coils squished into one unit." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("Quasi-creative unit - barely holding together at quark-gluon level." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("* This may not be a good idea *" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(6, ("RF Capacity: 2x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
    tooltip.insert(7, ("Process Energy: 1.5x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xAA0000)));
    tooltip.insert(8, ("RF Transfer: 12x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
});


// machine_speed_unstable
<item:kubejs:machine_speed_unstable>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:machine_speed_unstable>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("Hyper hot-rodded Flux Linkage." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("Super fast process speeds at the expense of voluminous RF consumption." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("Maximum Power: +600%" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
    tooltip.insert(6, ("Base Power: +200%" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
    tooltip.insert(7, ("Process Energy: 2x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xAA0000)));
});

// machine_efficiency_eco
<item:kubejs:machine_efficiency_eco>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:machine_efficiency_eco>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("Supercooled fluid honey acts as mega efficient heat sink!" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("Unfortunately with efficiency comes less overall speed / power levels." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("Maximum Power: -50%" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xAA0000)));
    tooltip.insert(6, ("Process Energy: 0.25x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
});

// machine_sieve_picky
<item:kubejs:machine_sieve_picky>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:machine_sieve_picky>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("Blast-smelted in Redstone! This Aux Sieve is now much more effective." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("It has a higher chance of producing secondary output results, with much higher energy needed." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("Secondary Product: +40%" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
    tooltip.insert(6, ("Process Energy: 3x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xAA0000)));
});

// machine_catalyst_eco
<item:kubejs:machine_catalyst_eco>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:machine_catalyst_eco>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("A charred honeycomb/grass matrix helps protect Catalysts." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("They are consumed / burned at a lower rate, at the expense of more energy usage." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("Catalyst Usage: 0.4x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
    tooltip.insert(6, ("Process Energy: 1.5x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xAA0000)));
});

// dynamo_output_unstable
<item:kubejs:dynamo_output_unstable>.modifyTooltip((stack, tooltip, advanced) => {
    tooltip.insert(2, ("(Hold Shift)" as crafttweaker.api.text.TextComponent));
});
<item:kubejs:dynamo_output_unstable>.modifyShiftTooltip((stack, tooltip, advanced) => {
    tooltip.insert(3, ("Experimental hexagonal Reaction Chamber pockets made with genuine honeycomb!" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(4, ("Greatly improved RF output, unfortunately much higher fuel burn amount." as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFAA00)));
    tooltip.insert(5, ("Fuel Energy: 0.75x" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0xAA0000)));
    tooltip.insert(6, ("Maximum Output: +250%" as crafttweaker.api.text.TextComponent).setStyle(crafttweaker.api.text.Style.empty().withColor(0x55FF55)));
});

print("--- custom_upgrades.zs initialized ---");