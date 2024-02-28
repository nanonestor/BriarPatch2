# The Briar Patch Scripts
print("--- loading book.zs ---");

import crafttweaker.api.item.tooltip.ITooltipFunction;
import crafttweaker.api.text.Style;
import crafttweaker.api.text.Component;
import crafttweaker.api.text.TextColor;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.text.FormattedText;
import crafttweaker.api.text.BaseComponent;
import crafttweaker.api.text.MutableComponent;
import crafttweaker.api.text.TextComponent;
#import mods.jei.JEI;
#import mods.jei.recipe.JeiRecipe;
import mods.jeitweaker.Jei;


craftingTable.addShapeless("briar_patch_book", <item:patchouli:guide_book>.withTag({"patchouli:book":"patchouli:bpbook"}), [<item:minecraft:book>, <tag:items:forge:rods/wooden>]);
Jei.addIngredient(<item:patchouli:guide_book>.withTag({"patchouli:book":"patchouli:bpbook"})) as void;

var guidebooks = 
[<item:patchouli:guide_book>.withTag({"patchouli:book":"patchouli:bpbook"}),
<item:cookingforblockheads:recipe_book>,
<item:cookingforblockheads:crafting_book>,
#<item:tconstruct:materials_and_you>,
#<item:tconstruct:puny_smelting>,
#<item:tconstruct:mighty_smelting>,
#<item:tconstruct:tinkers_gadgetry>,
#<item:tconstruct:fantastic_foundry>,
#<item:tconstruct:encyclopedia>,
#<item:immersiveengineering:manual>,
<item:patchouli:guide_book>.withTag({"patchouli:book": "productivebees:guide" as string}),
<item:rftoolsbase:manual>,
<item:tetra:holo>.withTag({"holo/core": "holo/core" as string, "holo/frame": "holo/frame" as string, "holo/core_material": "frame/dim" as string, "holo/frame_material": "core/ancient" as string}),
<item:croptopia:guide>,
<item:botania:lexicon>,
#<item:patchouli:guide_book>.withTag({"patchouli:book": "mysticalagriculture:guide" as string}),
<item:patchouli:guide_book>.withTag({"patchouli:book": "littlelogistics:guide" as string}),
<item:patchouli:guide_book>.withTag({"patchouli:book": "lexicon:lexicon" as string}),
<item:patchouli:guide_book>.withTag({"patchouli:book": "advancedperipherals:manual" as string}),
<item:patchouli:guide_book>.withTag({"patchouli:book": "thermal:guidebook" as string}),
<item:patchouli:guide_book>.withTag({"patchouli:book": "industrialforegoing:industrial_foregoing" as string}),
<item:patchouli:guide_book>.withTag({"patchouli:book": "dimdungeons:guide_book" as string})
];

for element in guidebooks {
element.modifyTooltip((stack, tooltip, isAdvanced) => {
    val tooltipString = "Guide / Manual / Book / Tome" as crafttweaker.api.text.TextComponent;
    tooltip.insert(1, tooltipString.setStyle(crafttweaker.api.text.Style.empty().withColor(0xFFFF55)));
});
}

print("--- book.zs initialized ---");