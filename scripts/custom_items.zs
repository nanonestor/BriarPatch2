
print("--- loading custom_items.zs ---");

#Add recipe
import crafttweaker.api.item.tooltip.ITooltipFunction;
import crafttweaker.api.text.Style;
import crafttweaker.api.text.Component;
import crafttweaker.api.text.TextColor;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.text.FormattedText;
import crafttweaker.api.text.BaseComponent;
import crafttweaker.api.text.MutableComponent;
import crafttweaker.api.recipe.CraftingTableRecipeManager;

<recipetype:thermal:smelter>.addRecipe("honey_glazed_carrot", [<item:kubejs:honey_glazed_carrot>], [<item:minecraft:carrot>, <item:minecraft:honeycomb>], 0, 5000);
<recipetype:thermal:smelter>.addRecipe("honey_glazed_beetroot", [<item:kubejs:honey_glazed_beetroot>], [<item:minecraft:beetroot>, <item:minecraft:honeycomb>], 0, 5000);

<recipetype:thermal:smelter>.addRecipe("honey_glazed_carrot4", [<item:kubejs:honey_glazed_carrot> * 4], [<item:minecraft:carrot> * 4, <item:minecraft:honey_block>], 0, 8000);
<recipetype:thermal:smelter>.addRecipe("honey_glazed_beetroot4", [<item:kubejs:honey_glazed_beetroot> * 4], [<item:minecraft:beetroot> * 4, <item:minecraft:honey_block>], 0, 8000);

print("--- custom_items.zs initialized ---");