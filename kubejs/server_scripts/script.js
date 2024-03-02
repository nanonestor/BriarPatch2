// priority: 0

// Listen to item tag event
//onEvent('tags.fluids', event => {
//	event.add('forge:latex', 'kubejs:bp_latex')
//  })

const ITEM_WEAPON_TIER = ["iron", "golden", "diamond", "emerald", "netherite"];
const BOW_TYPE = ["bow", "crossbow"];

// Adds bow tags to make bows compatible with various mods
const add_bow_tags = (event, item, type) => {
  event.add(`forge:${type}s`, item);
  event.add("forge:tools", item);
  event.add(`forge:tools/${type}s`, item);
  event.add(`bookshelf:${type}s`, item);
  event.add("minecolonies:blacksmith_product_excluded", item);
};

ServerEvents.tags("item", (event) => {
  ["lead", "silver", "nickel", "uranium"].forEach((metal) => {
    event.add(
      `forge:raw_materials/${metal}`,
      `immersiveengineering:raw_${metal}`
    );
  });

  ["industrialforegoing:latex", "thermal:latex"].forEach((latex) => {
    event.add("forge:latex", latex);
  });

  event.add("forge:rubber", "thermal:rubber");

  ITEM_WEAPON_TIER.forEach((tier) => {
    BOW_TYPE.forEach((type) => {
      add_bow_tags(event, `ironbows:${tier}_${type}`, type);

      if (tier !== "emerald")
        add_bow_tags(event, `nyfsarcheryplus:${tier}_${type}`, type);
    });
  });
});

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

  // cycle through the colors and create the recipes for the test tubes, glow sticks, and botania flowers
  global.COLORS.forEach((color) => {
    event.shapeless(`material_elements:test_tube_color_${color}`, [
      "material_elements:test_tube_glow",
      `minecraft:${color}_dye`,
    ]);

    event.shapeless(`glow_sticks:glow_stick_${color}`, [
      `material_elements:test_tube_color_${color}`,
      "material_elements:test_tube_glow",
    ]);

    event.recipes.thermal
      .insolator(`2x botania:${color}_mystical_flower`, [
        Fluid.of("minecraft:water", 8000),
        `botania:${color}_mystical_flower`,
      ])
      .energy(1e6); // short for 1_000_000 or 1 million
  });

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
});
