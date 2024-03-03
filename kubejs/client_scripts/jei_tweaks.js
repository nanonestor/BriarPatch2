JEIEvents.information((event) => {
  event.addItem('kubejs:honey_reinforced_bricks', ['what', 'hey'])
  event.addItem('pipez:item_pipe', ['  Used for transferring items.         When upgrades are placed in extraction points they get faster, have more capacity, and get ADDITIONAL FEATURES.  See the Pipez wiki or upgrade JEI information for which feature(s) each upgrade adds. -- For more advanced filtering to specify destination - use the FILTER DESTINATION TOOL (See Wiki for use).']);
  event.addItem('pipez:fluid_pipe', ['  Used for transferring fluids.         When upgrades are placed in extraction points they get faster, have more capacity, and get ADDITIONAL FEATURES.  See the Pipez wiki or upgrade JEI information for which feature(s) each upgrade adds. -- For more advanced filtering to specify destination - use the FILTER DESTINATION TOOL (See Wiki for use).']);
  event.addItem('pipez:energy_pipe', ['  Used for transferring energy.         When upgrades are placed in extraction points they get faster, have more capacity, and get ADDITIONAL FEATURES.  See the Pipez wiki or upgrade JEI information for which feature(s) each upgrade adds. -- For more advanced filtering to specify destination - use the FILTER DESTINATION TOOL (See Wiki for use).']);
  event.addItem('pipez:gas_pipe', ['  Used for transferring gasses.         When upgrades are placed in extraction points they get faster, have more capacity, and get ADDITIONAL FEATURES.  See the Pipez wiki or upgrade JEI information for which feature(s) each upgrade adds. -- For more advanced filtering to specify destination - use the FILTER DESTINATION TOOL (See Wiki for use).']);
  event.addItem('pipez:universal_pipe', ['  Transfers anything - expensive.         When upgrades are placed in extraction points they get faster, have more capacity, and get ADDITIONAL FEATURES.  See the Pipez wiki or upgrade JEI information for which feature(s) each upgrade adds. -- For more advanced filtering to specify destination - use the FILTER DESTINATION TOOL (See Wiki for use).']);
  event.addItem('pipez:basic_upgrade', ['  Upgrades are placed in pipe extraction points by right clicking and placing the upgrade in the GUI slot.     Basic upgrades add -- REDSTONE MODES.']);
  event.addItem('pipez:improved_upgrade', ['    Upgrades are placed in pipe extraction points by right clicking and placing the upgrade in the GUI slot.     Improved upgrades add -- REDSTONE MODES, DISTRIBUTION MODES.']);
  event.addItem('pipez:advanced_upgrade', ['    Upgrades are placed in pipe extraction points by right clicking and placing the upgrade in the GUI slot.     Advanced upgrades add -- REDSTONE MODES, DISTRIBUTION MODES, FILTER MODES, FILTERS.']);
  event.addItem('pipez:ultimate_upgrade', ['    Upgrades are placed in pipe extraction points by right clicking and placing the upgrade in the GUI slot.     Ultimate upgrades add -- REDSTONE MODES, DISTRIBUTION MODES, FILTER MODES, FILTERS.']);
  event.addItem('pipez:wrench', ['  Wrench for configuring Pipez mod pipes.  Sneak-rightclick on the end of a connected pipe to create an extraction point.  Once an extraction point is made, it can be right-clicked on to open a GUI where upgrades can be placed, and features can be managed for that extraction point.                         To set specific destinations for what is extracted, use a FILTER DESTINATION TOOL (See Wiki for use - linked in Briar Patch Field Guide).']);
//  event.addItem('', [''])
//  event.addItem('', [''])

event.addFluid(Fluid.of('mekanism:superheated_sodium', 1000), ['  Superheated Sodium is a product of heating Sodium in a Bigger Reactor as a coolant.,  It can be piped into a heat exchanger to transfer it\'s heat to water in the evaporator channel.  It then cools off into regular sodium.'])
event.addFluid(Fluid.of('biggerreactors:liquid_obsidian', 1000), ['  Liquid obsidian is obtained by cooling lava in a Bigger Reactors heat exchanger, by tranferring its\' heat to water in the evaporator channel.\,  It can be used as a coolant in a reactor, and the resuling heated lava being piped back to the heat exchanger.'])

//Jei.addIngredientInformation(<item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:bpbook" as string}), Component.literal("  Guide book for the Briar Patch modpack!                       Includes entries for most mods and features, and contains links to website wikis for many mods."));



});



JEIEvents.hideItems(event => {
  event.hide('ae2:facade')
  event.hide('/.*creative.*/')
//  event.hide('/.*creative_fluid.*/')
//  event.hide('/.*creative_chemical.*/')
})

JEIEvents.hideFluids(event => {



})