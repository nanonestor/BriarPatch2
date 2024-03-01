console.log("KubeJS loading dye recipes...");

const dyeRecipe = (event, dye_item, amount) => {
  event.shaped(Item.of(dye_item, amount), ["A A", " B ", "A A"], {
    A: "thermal:phytogro",
    B: dye_item,
  });
};

// Add recipes here
ServerEvents.recipes((event) => {
  COLORS.forEach((color) => {
    dyeRecipe(event, `minecraft:${color}_dye`, 16);
  });

  event.smelting("minecraft:green_dye", "minecraft:grass", 1, 400);
});

console.log("KubeJS loaded dye recipes.");
