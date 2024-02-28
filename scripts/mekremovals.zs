# The Briar Patch Scripts

print("--- loading mekremovals.zs ---");

#import mods.jei.JEI;
#import mods.jei.component.JeiIngredient;
import mods.jeitweaker.Jei;

craftingTable.removeByName("mekanism:upgrade/anchor");
craftingTable.removeByRegex(".*universal_cable.*");
craftingTable.removeByRegex(".*mechanical_pipe.*");
craftingTable.removeByRegex(".*pressurized_tube.*");
craftingTable.removeByRegex(".*logistical_transporter.*");

Jei.hideIngredient(<item:mekanism:upgrade_anchor>);
Jei.hideIngredientsByRegex(".*universal_cable.*");
Jei.hideIngredientsByRegex(".*mechanical_pipe.*");
Jei.hideIngredientsByRegex(".*pressurized_tube.*");
Jei.hideIngredientsByRegex(".*logistical_transporter.*");

print("--- mekremovals.zs initialized ---");