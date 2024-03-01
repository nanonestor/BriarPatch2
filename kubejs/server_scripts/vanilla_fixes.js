console.log("Loading vanilla_fixes.js...");

ServerEvents.recipes((event) => {
  event.shapeless("minecraft:oak_sign", ["#minecraft:signs"]);
  event.shapeless("minecraft:oak_hanging_sign", ["#minecraft:hanging_signs"]);
});

console.log("Loaded vanilla_fixes.js");
