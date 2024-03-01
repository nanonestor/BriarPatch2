console.log("custom_items.js loading...");

const glazed_recipes = (event, ingredient) => {
  event.recipes.thermal
    .smelter(
      [`kubejs:honey_glazed_${ingredient}`],
      [`minecraft:${ingredient}`, "minecraft:honeycomb"],
      0,
      5000
    )
    .id(`kubejs:thermal.smelter.honey_glazed_${ingredient}`);

  event.recipes.thermal
    .smelter(
      [`4x kubejs:honey_glazed_${ingredient}`],
      [`4x minecraft:${ingredient}`, "minecraft:honey_block"],
      0,
      5000
    )
    .id(`kubejs:thermal.smelter.honey_glazed_${ingredient}_batch`);
};

ServerEvents.recipes((event) => {
  glazed_recipes(event, "carrot");
  glazed_recipes(event, "beetroot");
});

console.log("custom_items.js loaded");
