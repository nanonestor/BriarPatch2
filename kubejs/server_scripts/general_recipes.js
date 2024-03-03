
ServerEvents.recipes((event) => {

  // BP Modpack Field Guide crafting table recipe
  event.shapeless(Item.of('patchouli:guide_book', { "patchouli:book" : "patchouli:bpbook" }),[ 'minecraft:book', '#forge:rods/wooden' ])

  // Crafting table recipes for general conversions, and augmentations to vanilla recipes.
  event.shapeless("minecraft:oak_sign", ["#minecraft:signs"]);
  event.shapeless("minecraft:oak_hanging_sign", ["#minecraft:hanging_signs"]);



  // Changes or augmentations to modded recipes.
  event.remove({ id: "structurize:sceptergold" });
  event.shaped(Item.of("structurize:sceptergold"), ["  C", " W ", "W  "], {C: "minecraft:cobblestone",W: "#forge:rods/wooden",}).id("structurize:sceptergold");

  event.shapeless("material_elements:coke_block", ["immersiveengineering:coke"]).id("kubejs:material_elements_coke_block");

  event.shapeless("minecraft:stick", ["#material_elements:wooden_sticks"]);

});
