// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
//settings.logSkippedRecipes = false
//settings.logErroringRecipes = true

console.info("KubeJS loading server_scripts");

// Listen to item tag event
//onEvent('tags.fluids', event => {
//	event.add('forge:latex', 'kubejs:bp_latex')
//  })

const item_metal_tier = ["iron", "gold", "diamond", "emerald", "netherite"];
const colors = [
  "black",
  "blue",
  "brown",
  "cyan",
  "gray",
  "green",
  "light_blue",
  "light_gray",
  "lime",
  "magenta",
  "orange",
  "pink",
  "purple",
  "red",
  "white",
  "yellow",
];

ServerEvents.tags("item", (event) => {
  //event.add('forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum')
  event.add("forge:raw_materials/lead", "immersiveengineering:raw_lead");
  event.add("forge:raw_materials/silver", "immersiveengineering:raw_silver");
  event.add("forge:raw_materials/nickel", "immersiveengineering:raw_nickel");
  event.add("forge:raw_materials/uranium", "immersiveengineering:raw_uranium");
  event.add("forge:rubber", "thermal:rubber");
  // event.add('forge:bows', 'ironbows:iron_bow')
  // event.add('forge:bows', 'ironbows:golden_bow')
  // event.add('forge:bows', 'ironbows:diamond_bow')
  // event.add('forge:bows', 'ironbows:emerald_bow')
  // event.add('forge:bows', 'ironbows:netherite_bow')
  item_metal_tier.forEach((metal) => {
    event.add("forge:bows", `ironbows:${metal}_bow`);
    event.add(
      "minecolonies:blacksmith_product_excluded",
      `ironbows:${metal}_bow`
    );
  });
  // event.add('minecolonies:blacksmith_product_excluded', 'ironbows:iron_bow')
  // event.add('minecolonies:blacksmith_product_excluded', 'ironbows:golden_bow')
  // event.add('minecolonies:blacksmith_product_excluded', 'ironbows:diamond_bow')
  // event.add('minecolonies:blacksmith_product_excluded', 'ironbows:emerald_bow')
  // event.add('minecolonies:blacksmith_product_excluded', 'ironbows:netherite_bow')
});

const botaniaflowers = [
  "botania:white_mystical_flower",
  "botania:orange_mystical_flower",
  "botania:magenta_mystical_flower",
  "botania:light_blue_mystical_flower",
  "botania:yellow_mystical_flower",
  "botania:lime_mystical_flower",
  "botania:pink_mystical_flower",
  "botania:gray_mystical_flower",
  "botania:light_gray_mystical_flower",
  "botania:cyan_mystical_flower",
  "botania:purple_mystical_flower",
  "botania:brown_mystical_flower",
  "botania:green_mystical_flower",
  "botania:red_mystical_flower",
  "botania:black_mystical_flower",
];
const botaniaflowersreturn = [
  "2x botania:white_mystical_flower",
  "2x botania:orange_mystical_flower",
  "2x botania:magenta_mystical_flower",
  "2x botania:light_blue_mystical_flower",
  "2x botania:yellow_mystical_flower",
  "2x botania:lime_mystical_flower",
  "2x botania:pink_mystical_flower",
  "2x botania:gray_mystical_flower",
  "2x botania:light_gray_mystical_flower",
  "2x botania:cyan_mystical_flower",
  "2x botania:purple_mystical_flower",
  "2x botania:brown_mystical_flower",
  "2x botania:green_mystical_flower",
  "2x botania:red_mystical_flower",
  "2x botania:black_mystical_flower",
];

ServerEvents.recipes((event) => {
  // Glow sticks mod recipe fixes / additions
  event.remove({ mod: "glow_sticks" });
  event
    .shapeless(
      Item.of(
        "material_elements:test_tube_water",
        8,
        '{Potion:"minecraft:water"}'
      ),
      ["8x material_elements:test_tube", "minecraft:water_bucket"]
    )
    .replaceIngredient("minecraft:water_bucket", "minecraft:bucket");
  event
    .shapeless(
      Item.of(
        "material_elements:test_tube_water",
        '{Potion:"minecraft:water"}'
      ),
      ["material_elements:test_tube", "minecraft:water_bucket"]
    )
    .replaceIngredient("minecraft:water_bucket", "minecraft:bucket");
  event.shapeless("material_elements:test_tube_glow", [
    Item.of("material_elements:test_tube_water", '{Potion:"minecraft:water"}'),
    "#material_elements:glowing_item",
  ]);
  event.shapeless("material_elements:test_tube_color_white", [
    "material_elements:test_tube_glow",
    "minecraft:white_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_orange", [
    "material_elements:test_tube_glow",
    "minecraft:orange_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_magenta", [
    "material_elements:test_tube_glow",
    "minecraft:magenta_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_light_blue", [
    "material_elements:test_tube_glow",
    "minecraft:light_blue_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_yellow", [
    "material_elements:test_tube_glow",
    "minecraft:yellow_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_lime", [
    "material_elements:test_tube_glow",
    "minecraft:lime_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_pink", [
    "material_elements:test_tube_glow",
    "minecraft:pink_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_gray", [
    "material_elements:test_tube_glow",
    "minecraft:gray_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_light_gray", [
    "material_elements:test_tube_glow",
    "minecraft:light_gray_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_cyan", [
    "material_elements:test_tube_glow",
    "minecraft:cyan_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_purple", [
    "material_elements:test_tube_glow",
    "minecraft:purple_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_blue", [
    "material_elements:test_tube_glow",
    "minecraft:blue_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_brown", [
    "material_elements:test_tube_glow",
    "minecraft:brown_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_green", [
    "material_elements:test_tube_glow",
    "minecraft:green_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_red", [
    "material_elements:test_tube_glow",
    "minecraft:red_dye",
  ]);
  event.shapeless("material_elements:test_tube_color_black", [
    "material_elements:test_tube_glow",
    "minecraft:black_dye",
  ]);
  event.shapeless("glow_sticks:glow_stick_white", [
    "material_elements:test_tube_color_white",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_orange", [
    "material_elements:test_tube_color_orange",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_magenta", [
    "material_elements:test_tube_color_magenta",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_light_blue", [
    "material_elements:test_tube_color_light_blue",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_yellow", [
    "material_elements:test_tube_color_yellow",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_lime", [
    "material_elements:test_tube_color_lime",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_pink", [
    "material_elements:test_tube_color_pink",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_gray", [
    "material_elements:test_tube_color_gray",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_light_gray", [
    "material_elements:test_tube_color_light_gray",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_cyan", [
    "material_elements:test_tube_color_cyan",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_purple", [
    "material_elements:test_tube_color_purple",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_blue", [
    "material_elements:test_tube_color_blue",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_brown", [
    "material_elements:test_tube_color_brown",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_green", [
    "material_elements:test_tube_color_green",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_red", [
    "material_elements:test_tube_color_red",
    "material_elements:test_tube_glow",
  ]);
  event.shapeless("glow_sticks:glow_stick_black", [
    "material_elements:test_tube_color_black",
    "material_elements:test_tube_glow",
  ]);
  event.recipes.thermal.bottler(
    Item.of("material_elements:test_tube_water", '{Potion:"minecraft:water"}'),
    [Fluid.of("minecraft:water", 1000), "material_elements:test_tube"]
  );
  event.recipes.thermal.bottler("material_elements:test_tube_glow", [
    Fluid.of("thermal:glowstone", 250),
    Item.of("material_elements:test_tube_water", '{Potion:"minecraft:water"}'),
  ]);

  // Makes thermal:rubber craftable using Industrial Foregoing latex also
  event.shapeless("3x thermal:rubber", ["industrialforegoing:latex_bucket"]);

  // Replaces the output of various materials with a desired output to unify the ores used a bit more.  Thermal mod is the preferred mod when an output item is available.
  event.replaceOutput({}, "#forge:raw_materials/tin", "thermal:raw_tin");
  event.replaceOutput({}, "#forge:raw_materials/lead", "thermal:raw_lead");
  event.replaceOutput({}, "#forge:raw_materials/silver", "thermal:raw_silver");
  event.replaceOutput({}, "#forge:raw_materials/nickel", "thermal:raw_nickel");
  event.replaceOutput(
    {},
    "#forge:raw_materials/uranium",
    "thermal:raw_uranium"
  );
  event.replaceOutput({}, "#forge:raw_materials/osmium", "thermal:raw_osmium");
  //event.replaceOutput({}, '#forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum')

  event.replaceOutput({}, "#forge:dusts/iron", "thermal:iron_dust");
  event.replaceOutput(
    {},
    "#forge:dusts/uranium",
    "biggerreactors:uranium_dust"
  );
  event.replaceOutput({}, "#forge:dusts/copper", "thermal:copper_dust");
  event.replaceOutput({}, "#forge:dusts/steel", "mekanism:dust_steel");
  event.replaceOutput({}, "#forge:dusts/gold", "thermal:gold_dust");
  event.replaceOutput({}, "#forge:dusts/silver", "thermal:silver_dust");
  event.replaceOutput({}, "#forge:dusts/tin", "thermal:tin_dust");
  event.replaceOutput({}, "#forge:dusts/bronze", "thermal:bronze_dust");
  event.replaceOutput({}, "#forge:dusts/electrum", "thermal:electrum_dust");
  event.replaceOutput({}, "#forge:dusts/constantan", "thermal:constantan_dust");
  event.replaceOutput({}, "#forge:dusts/emerald", "thermal:emerald_dust");
  event.replaceOutput({}, "#forge:dusts/lapis", "thermal:lapis_dust");
  event.replaceOutput({}, "#forge:dusts/sulfur", "thermal:sulfur_dust");

  event.replaceOutput({}, "#forge:plates/iron", "thermal:iron_plate");
  event.replaceOutput({}, "#forge:nuggets/copper", "thermal:copper_nugget");
  event.replaceOutput({}, "#forge:plates/copper", "thermal:copper_plate");

  event.replaceOutput({}, "#forge:ingots/silver", "thermal:silver_ingot");
  event.replaceOutput({}, "#forge:ingots/lead", "thermal:lead_ingot");
  event.replaceOutput({}, "#forge:ingots/uranium", "mekanism:ingot_uranium");
  event.replaceOutput({}, "#forge:ingots/steel", "thermal:steel_ingot");
  event.replaceOutput({}, "#forge:ingots/nickel", "thermal:nickel_ingot");
  event.replaceOutput({}, "#forge:ingots/bronze", "thermal:bronze_ingot");
  event.replaceOutput({}, "#forge:ingots/electrum", "thermal:electrum_ingot");
  event.replaceOutput(
    {},
    "#forge:ingots/constantan",
    "thermal:constantan_ingot"
  );
  event.replaceOutput({}, "#forge:ingots/tin", "thermal:tin_ingot");

  event.replaceOutput(
    {},
    "#forge:storage_blocks/silver",
    "thermal:silver_block"
  );
  event.replaceOutput({}, "#forge:storage_blocks/lead", "thermal:lead_block");
  event.replaceOutput(
    {},
    "#forge:storage_blocks/uranium",
    "mekanism:block_uranium"
  );
  event.replaceOutput({}, "#forge:storage_blocks/steel", "thermal:steel_block");
  event.replaceOutput(
    {},
    "#forge:storage_blocks/nickel",
    "thermal:nickel_block"
  );
  event.replaceOutput({}, "#forge:storage_blocks/tin", "thermal:tin_block");
  event.replaceOutput(
    {},
    "#forge:storage_blocks/bronze",
    "thermal:bronze_block"
  );
  event.replaceOutput(
    {},
    "#forge:storage_blocks/electrum",
    "thermal:electrum_block"
  );
  event.replaceOutput(
    {},
    "#forge:storage_blocks/constantan",
    "thermal:constantan_block"
  );

  // Fixes mystical agriculture essence recipes that get decimated by the recipe output replacement stuff above
  // Sets up a helper function
  //let maessence = (output, amount, essenceType) => {
  //	event.shaped(
  //		Item.of(output, amount),
  //	[
  //	  'AAA',
  //	  'A A',
  //	  'AAA'
  //	], {
  //	  A: essenceType
  //	})
  //  }
  // Uses the helper function along with a list of names to insert into the funciton
  //  ['lead', 'tin', 'bronze', 'silver', 'steel', 'nickel', 'constantan', 'electrum', 'invar'].forEach(metal => maessence(`thermal:${metal}_ingot`, 4, `mysticalagriculture:${metal}_essence`))
  // Uses the helper function for an item not following the above template.
  //  maessence('mekanism:ingot_uranium', 2, 'mysticalagriculture:uranium_essence')

  // works to get an array from a tag but may not be reliable
  //const botaniaflowers = []
  //Ingredient.of('#botania:mystical_flowers').getItemIds().forEach(item => {
  //	botaniaflowers.push(item);
  //});

  for (let i in botaniaflowers) {
    event.recipes.thermal
      .insolator(botaniaflowersreturn[i], [
        Fluid.of("minecraft:water", 8000),
        botaniaflowers[i],
      ])
      .energy(1000000);
  }
});
