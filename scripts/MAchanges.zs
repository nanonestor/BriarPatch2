# The Briar Patch Scripts
print("--- loading MAchanges.zs ---");

#import mods.jei.JEI;
#import mods.jei.component.JeiIngredient;

#<recipetype:thermal:insolator>.removeByRegex(".*mysticalag.*");
#<recipetype:create:mixing>.removeByRegex(".*inferium.*");
#<recipetype:create:mixing>.removeByRegex(".*prudentium.*");
#<recipetype:create:mixing>.removeByRegex(".*tertium.*");
#<recipetype:create:mixing>.removeByRegex(".*imperiuim.*");
#<recipetype:create:mixing>.removeByRegex(".*supremium.*");
#<recipetype:create:mixing>.removeByRegex(".*insanium.*");

#<recipetype:productivebees:bee_breeding>.removeByRegex(".*inferium_bee.*");
#<recipetype:productivebees:bee_breeding>.removeByRegex(".*prudentium_bee.*");
#<recipetype:productivebees:bee_breeding>.removeByRegex(".*tertium_bee.*");
#<recipetype:productivebees:bee_breeding>.removeByRegex(".*imperium_bee.*");
#<recipetype:productivebees:bee_breeding>.removeByRegex(".*supremium_bee.*");
#<recipetype:productivebees:bee_breeding>.removeByRegex(".*insanium_bee.*");

#<recipetype:productivebees:bee_conversion>.removeByRegex(".*inferium_bee.*");
#<recipetype:productivebees:bee_conversion>.removeByRegex(".*prudentium_bee.*");
#<recipetype:productivebees:bee_conversion>.removeByRegex(".*tertium_bee.*");
#<recipetype:productivebees:bee_conversion>.removeByRegex(".*imperium_bee.*");
#<recipetype:productivebees:bee_conversion>.removeByRegex(".*supremium_bee.*");
#<recipetype:productivebees:bee_conversion>.removeByRegex(".*insanium_bee.*");

#<recipetype:productivebees:advanced_beehive>.removeByRegex(".*inferium.*");
#<recipetype:productivebees:advanced_beehive>.removeByRegex(".*prudentium.*");
#<recipetype:productivebees:advanced_beehive>.removeByRegex(".*tertium_bee.*");
#<recipetype:productivebees:advanced_beehive>.removeByRegex(".*imperium_bee.*");
#<recipetype:productivebees:advanced_beehive>.removeByRegex(".*supremium_bee.*");
#<recipetype:productivebees:advanced_beehive>.removeByRegex(".*insanium_bee.*");

// Hides inferium essence from centrifuge but oh well, they'll figure it out.
#<recipetype:productivebees:centrifuge>.removeByRegex(".*mysticalag.*");

#<recipetype:mysticalagriculture:infusion>.removeByName("productivebees:mysticalagriculture/inferium_bee");
#<recipetype:mysticalagriculture:infusion>.removeByName("productivebees:mysticalagriculture/prudentium_bee");
#<recipetype:mysticalagriculture:infusion>.removeByName("productivebees:mysticalagriculture/tertium_bee");
#<recipetype:mysticalagriculture:infusion>.removeByName("productivebees:mysticalagriculture/imperium_bee");
#<recipetype:mysticalagriculture:infusion>.removeByName("productivebees:mysticalagriculture/supremium_bee");
#<recipetype:mysticalagriculture:infusion>.removeByName("productivebees:mysticalagriculture/insanium_bee");

print("--- manerfs.zs initialized ---");