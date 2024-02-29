console.log("Loading IE Fixes...");

ServerEvents.recipes((event) => {
  event
    .shapeless("material_elements:coke_block", ["immersiveengineering:coke"])
    .id("kubejs:material_elements_coke_block");
});

console.log("Loaded IE Fixes");
