console.log("KubeJS loading cooking_for_blockheads.js...");

ServerEvents.recipes((event) => {
  global.COLORS.forEach((color) => {
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
