console.log("KubeJS loading dye recipes...");

const dyeRecipe = (event, dye_item, amount) => {
  event.shaped(Item.of(dye_item, amount), ["A A", " B ", "A A"], {
    A: "thermal:phytogro",
    B: dye_item,
  });
};

const dyes = [
  "blue",
  "brown",
  "green",
  "red",
  "black",
  "white",
  "yellow",
  "purple",
  "cyan",
  "light_gray",
  "gray",
  "pink",
  "lime",
  "light_blue",
  "magenta",
  "orange",
];

// Add recipes here
ServerEvents.recipes((event) => {
  dyes.forEach((dye) => {
    dyeRecipe(event, `minecraft:${dye}_dye`, 16);
  });

  event.smelting("minecraft:green_dye", "minecraft:grass", 1, 400);
});

console.log("KubeJS loaded dye recipes.");
