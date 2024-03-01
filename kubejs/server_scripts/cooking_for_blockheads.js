console.log("KubeJS loading cooking_for_blockheads.js...");

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

ServerEvents.recipes((event) => {
  COLORS.forEach((color) => {
    event.remove({ id: `cookingforblockheads:dye_${color}_oven` });

    const colorTag = color !== "white" ? `${color}_` : "";
    event
      .shapeless(`cookingforblockheads:${colorTag}oven`, [
        `#cookingforblockheads:ovens`,
        `minecraft:${color}_dye`,
      ])
      .id(`kubejs:cookingforblockheads_${colorTag}oven`);
  });
});

console.log("KubeJS loaded cooking_for_blockheads.js.");
