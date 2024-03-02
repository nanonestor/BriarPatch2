ServerEvents.recipes((event) => {
  const { alloy_smelting } = event.recipes.enderio;
  const { crystallizer } = event.recipes.thermal;
  const { createMixing } = event.recipes;
  const energy_cost = 500e3;

  // Honey Reinforced Bricks
  [
    "productivebees:honey",
    "create:honey",
    "cofh_core:honey",
    "the_bumblezone:honey_fluid_still",
  ].forEach((honey) => {
    const mod_tag = honey.replace(":", "_");

    crystallizer(
      Item.of("kubejs:honey_reinforced_bricks"),
      ["minecraft:cracked_stone_bricks", Fluid.of(honey, 1000)],
      0,
      energy_cost
    ).id(`kubejs:thermal.crystallizer.honey_reinforced_bricks_${mod_tag}`);

    createMixing("kubejs:honey_reinforced_bricks", [
      "kubejs:honey_reinforced_bricks",
      Fluid.of(honey, 1000),
    ])
      .superheated()
      .id(`kubejs:create.mixing.honey_reinforced_bricks_${mod_tag}`);
  });

  alloy_smelting(
    "kubejs:honey_reinforced_bricks",
    ["minecraft:cracked_stone_bricks", "minecraft:honey_block"],
    energy_cost
  ).id("kubejs:enderio.alloy_smelting.honey_reinforced_bricks");

  // Honey Latex Bricks
  ["industrialforegoing:latex", "thermal:latex"].forEach((latex) => {
    const mod_tag = latex.replace(":", "_");

    crystallizer(
      Item.of("kubejs:honey_latex_bricks"),
      ["kubejs:honey_reinforced_bricks", Fluid.of(latex, 1000)],
      0,
      energy_cost
    ).id(`kubejs:thermal.crystallizer.honey_latex_bricks_${mod_tag}`);

    createMixing("kubejs:honey_latex_bricks", [
      "kubejs:honey_latex_bricks",
      Fluid.of(latex, 1000),
    ])
      .superheated()
      .id(`kubejs:create.mixing.honey_latex_bricks_${mod_tag}`);
  });

  alloy_smelting(
    "kubejs:honey_latex_bricks",
    ["kubejs:honey_reinforced_bricks", "thermal:cured_rubber_block"],
    energy_cost
  ).id("kubejs:enderio.alloy_smelting.honey_latex_bricks");
});
