# The Briar Patch Scripts

print("--- loading HorseAdds.zs ---");

#Add recipe

craftingTable.addShaped("ironhorsearmor", <item:minecraft:iron_horse_armor>, [[<item:minecraft:air>,<item:minecraft:air>,<item:minecraft:iron_helmet>], [<item:minecraft:iron_ingot>,<item:minecraft:leather_horse_armor>,<item:minecraft:iron_ingot>], [<item:minecraft:iron_leggings>,<item:minecraft:air>,<item:minecraft:iron_leggings>]], null);
craftingTable.addShaped("goldenhorsearmor", <item:minecraft:golden_horse_armor>, [[<item:minecraft:air>,<item:minecraft:air>,<item:minecraft:golden_helmet>], [<item:minecraft:gold_ingot>,<item:minecraft:iron_horse_armor>,<item:minecraft:gold_ingot>], [<item:minecraft:golden_leggings>,<item:minecraft:air>,<item:minecraft:golden_leggings>]], null);
craftingTable.addShaped("diamondhorsearmor", <item:minecraft:diamond_horse_armor>, [[<item:minecraft:air>,<item:minecraft:air>,<item:minecraft:diamond_helmet>], [<item:minecraft:diamond>,<item:minecraft:golden_horse_armor>,<item:minecraft:diamond>], [<item:minecraft:diamond_leggings>,<item:minecraft:air>,<item:minecraft:diamond_leggings>]], null);

craftingTable.addShaped("horsesaddle", <item:minecraft:saddle>, [[<item:minecraft:leather>,<item:minecraft:leather>,<item:minecraft:leather>], [<item:minecraft:string>,<item:minecraft:air>,<item:minecraft:string>], [<item:minecraft:iron_ingot>,<item:minecraft:air>,<item:minecraft:iron_ingot>]], null);

print("--- HorseAdds.zs initialized ---");