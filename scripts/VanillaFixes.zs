
print("--- loading VanillaFixes.zs ---");

#Add recipe
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.CraftingTableRecipeManager;

craftingTable.addShapeless("any_sign_to_oak_sign",<item:minecraft:oak_sign>, [<tag:items:minecraft:signs>]);
craftingTable.addShapeless("vanilla_trapped_chest",<item:minecraft:trapped_chest>, [<tag:items:forge:chests/wooden>,<item:minecraft:tripwire_hook>]);
craftingTable.addShapeless("logs_to_sticks",<item:minecraft:stick> * 16, [<tag:items:minecraft:logs>,<tag:items:minecraft:logs>]);

print("--- VanillaFixes.zs initialized ---");