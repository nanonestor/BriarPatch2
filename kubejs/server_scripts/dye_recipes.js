console.log("KubeJS loading dye recipes...");

// COLORS declared in kubejs/server_scripts/script.js

let COLORS = [
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
