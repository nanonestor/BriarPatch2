# The Briar Patch Scripts

print("--- loading ModItemFixes.zs ---");

#Add recipe

craftingTable.remove(<item:bno:tin_ingot>);

//craftingTable.addShapeless("nether_quartz_mek_to_ae2",<item:appliedenergistics2:nether_quartz_dust>, [<item:mekanism:dust_quartz>]);
//craftingTable.addShapeless("mek_gold_dust_to_ae2",<item:mekanism:dust_gold>, [<item:appliedenergistics2:gold_dust>]);
//craftingTable.addShapeless("ae2_gold_dust_to_mek",<item:appliedenergistics2:gold_dust>, [<item:mekanism:dust_gold>]);

//var talldooritem = 
//[<item:dramaticdoors:tall_oak_door>,
//<item:dramaticdoors:tall_spruce_door>,
//<item:dramaticdoors:tall_birch_door>,
//<item:dramaticdoors:tall_jungle_door>,
//<item:dramaticdoors:tall_acacia_door>,
//<item:dramaticdoors:tall_dark_oak_door>,
//<item:dramaticdoors:tall_iron_door>,
//<item:dramaticdoors:tall_crimson_door>,
//<item:dramaticdoors:tall_warped_door>,
//<item:dramaticdoors:tall_azalea_door>,
//<item:dramaticdoors:tall_quark_blossom_door>,
//<item:dramaticdoors:tall_honeycomb_door>
//];

//var talldoorblock = 
//[<block:dramaticdoors:tall_oak_door>,
//<block:dramaticdoors:tall_spruce_door>,
//<block:dramaticdoors:tall_birch_door>,
//<block:dramaticdoors:tall_jungle_door>,
//<block:dramaticdoors:tall_acacia_door>,
//<block:dramaticdoors:tall_dark_oak_door>,
//<block:dramaticdoors:tall_iron_door>,
//<block:dramaticdoors:tall_crimson_door>,
//<block:dramaticdoors:tall_warped_door>,
//<block:dramaticdoors:tall_azalea_door>,
//<block:dramaticdoors:tall_quark_blossom_door>,
//<block:dramaticdoors:tall_honeycomb_door>
//];

//<tag:items:minecraft:doors>.add(talldooritem);
//<tag:items:minecraft:wooden_doors>.add(talldooritem);
//<tag:blocks:minecraft:wooden_doors>.add(talldoorblock);
//<tag:blocks:buildinggadgets:blacklist/generic>.add(talldoorblock);
//<tag:blocks:minecraft:doors>.add(talldoorblock);
//<tag:blocks:buildinggadgets:blacklist/exchanging>.add(talldoorblock);

print("--- ModItemFixes.zs initialized ---");