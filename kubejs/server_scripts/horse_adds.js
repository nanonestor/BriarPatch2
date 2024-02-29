console.log("KubeJS loading horse additions...");

const horse_armor_crafting_recipe = (event, item, inputs) => {
  event.shaped(Item.of(item, 1), ["  H", "IAI", "L L"], {
    A: inputs.horse_armor,
    H: inputs.helmet,
    I: inputs.ingot,
    L: inputs.leggings,
  });
};

const tiers = ["iron", "golden", "diamond"];
let previousTier = "leather";

ServerEvents.recipes((event) => {
  tiers.forEach((tier) => {
    const inputs = {
      horse_armor: `minecraft:${previousTier}_horse_armor`,
      helmet: `minecraft:${tier}_helmet`,
      ingot: `minecraft:${tier === "golden" ? "gold" : tier}${
        tier !== "diamond" ? "_ingot" : ""
      }`,
      leggings: `minecraft:${tier}_leggings`,
    };

    horse_armor_crafting_recipe(event, `minecraft:${tier}_horse_armor`, inputs);

    previousTier = tier;
  });

  event.shaped(Item.of("minecraft:saddle", 1), ["LLL", "S S", "I I"], {
    I: "minecraft:iron_ingot",
    L: "minecraft:leather",
    S: "minecraft:string",
  });
});

console.log("KubeJS loaded horse additions.");
