ServerEvents.recipes((event) => {
  ["industrialforegoing:latex", "thermal:latex"].forEach((latex) => {
    const mod_tag = latex.replace(":", "_");

    event.recipes.thermal
      .crystallizer(
        Item.of("kubejs:honey_reinforced_bricks", 1),
        ["minecraft:cracked_stone_bricks", Fluid.of(latex, 1000)],
        0,
        1e6
      )
      .id(`kubejs:thermal.crystallizer.honey_reinforced_bricks_${mod_tag}`);

    event.recipes
      .createMixing("kubejs:honey_reinforced_bricks", [
        "kubejs:honey_reinforced_bricks",
        Fluid.of(latex, 1000),
      ])
      .id(`kubejs:create.mixing.honey_reinforced_bricks_${mod_tag}`);
  });

  [
    "productivebees:honey",
    "create:honey",
    "cofh_core:honey",
    "the_bumblezone:honey_fluid_still",
  ].forEach((honey) => {
    const mod_tag = honey.replace(":", "_");

    event.recipes.thermal
      .crystallizer(
        Item.of("kubejs:honey_latex_bricks", 1),
        ["kubejs:honey_reinforced_bricks", Fluid.of(honey, 1000)],
        0,
        1e6
      )
      .id(`kubejs:thermal.crystallizer.honey_latex_bricks_${mod_tag}`);

    event.recipes
      .createMixing("kubejs:honey_latex_bricks", [
        "kubejs:honey_latex_bricks",
        Fluid.of(honey, 1000),
      ])
      .id(`kubejs:create.mixing.honey_latex_bricks_${mod_tag}`);
  });
});
