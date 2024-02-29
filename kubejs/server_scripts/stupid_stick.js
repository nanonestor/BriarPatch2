console.log("KubeJS: Adding a stupid stick recipes...");

ServerEvents.recipes((event) => {
  event.remove({ id: "structurize:sceptergold" });
  event
    .shaped(Item.of("structurize:sceptergold"), ["  C", " W ", "W  "], {
      C: "minecraft:cobblestone",
      W: "#forge:rods/wooden",
    })
    .id("structurize:sceptergold");
  event.shapeless("minecraft:stick", ["#material_elements:wooden_sticks"]);
});

console.log("KubeJS: Added a stupid stick recipes.");
