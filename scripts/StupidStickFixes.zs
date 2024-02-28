
print("--- loading StupidStickFixes.zs ---");

#Add recipe
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.recipe.type.CraftingRecipe;

craftingTable.removeByName("structurize:sceptergold");
craftingTable.addShaped("structurize_build_tool", <item:structurize:sceptergold>, [[<item:minecraft:air>, <item:minecraft:air>, <tag:items:forge:cobblestone>], [<item:minecraft:air>, <tag:items:forge:rods/wooden>, <item:minecraft:air>], [<tag:items:forge:rods/wooden>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShapeless("stickfix",<item:minecraft:stick>, [<tag:items:material_elements:wooden_sticks>]);

// furnace.removeByName("material_elements:coke_from_charcoal_by_smelting");
// furnace.removeByName("material_elements:coke_from_coal_by_smelting");
#craftingTable.addShapeless("coal_coke_block_switch",<item:material_elements:coke_block>, [<item:immersiveengineering:coke>]);


print("--- StupidStickFixes.zs initialized ---");