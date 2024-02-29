console.log("Loading IE Fixes...");

ServerEvents.recipes((event) => {
  event
    .shapeless("material_elements:coke_block", ["immersiveengineering:coke"])
    .id("kubejs:material_elements_coke_block");

  event
    .shaped("immersiveengineering:furnace_heater", ["ICI", "CWC", "IRI"], {
      I: "#forge:ingots/iron",
      C: "#forge:ingots/copper",
      W: "immersiveengineering:wirecoil_copper",
      R: "#forge:dusts/redstone",
    })
    .id("kubejs:immersiveengineering_furnace_heater");
});

console.log("Loaded IE Fixes");
