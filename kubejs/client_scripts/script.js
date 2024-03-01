// priority: 0

console.info("KubeJS loading client_scripts");

//onEvent('jei.remove.categories', event => {
//	event.remove(['create:automatic_shaped', 'create:automatic_shapeless', 'create:automatic_packing'])
//  })

// onEvent('jei.hide.items', event => {
// Hide items in JEI here
// event.hide('minecraft:cobblestone')
// })

ItemEvents.tooltip((tooltip) => {
  const AUGMENTS = [
    "kubejs:dynamo_output_unstable",
    "kubejs:honey_upgrade",
    "kubejs:machine_catalyst_eco",
    "kubejs:machine_efficiency_eco",
    "kubejs:machine_sieve_picky",
    "kubejs:machine_speed_unstable",
    "kubejs:rf_coil_xfer_big",
    "kubejs:rf_coil_xfer_unstable",
    "thermal:area_radius_augment",
    "thermal:dynamo_fuel_augment",
    "thermal:dynamo_output_augment",
    "thermal:fluid_filter_augment",
    "thermal:fluid_tank_augment",
    "thermal:item_filter_augment",
    "thermal:machine_catalyst_augment",
    "thermal:machine_cycle_augment",
    "thermal:machine_efficiency_augment",
    "thermal:machine_null_augment",
    "thermal:machine_output_augment",
    "thermal:machine_speed_augment",
    "thermal:potion_amplifier_augment",
    "thermal:potion_duration_augment",
    "thermal:rf_coil_augment",
    "thermal:rf_coil_storage_augment",
    "thermal:rf_coil_xfer_augment",
    "thermal:rs_control_augment",
    "thermal:side_config_augment",
    "thermal:upgrade_augment_1",
    "thermal:upgrade_augment_2",
    "thermal:upgrade_augment_3",
    "thermal:xp_storage_augment",
  ];

  // Adds a standardized tooltip to all augments in the AUGMENTS array
  AUGMENTS.forEach((augment) => {
    tooltip.addAdvanced(augment, (item, advanced, text) => {
      text.add(1, Text.yellow("Thermal Augment / Upgrade").bold(false));
      text.add(2, Text.yellow("(Hold Shift)").bold(false));
    });
  });

  // Adds shift-tooltips to individual augments - they're all different
  tooltip.addAdvanced("kubejs:honey_upgrade", (item, advanced, text) => {
    if (!tooltip.shift) {
    } else {
      text.add(1, [
        Text.of(
          "Improves base attributes. Other augments may be more effective as a result"
        ).gold(),
      ]);
      text.add(1, [Text.of("Scale Factor: 8x").green()]);
    }
  });

  //     EXAMPLE TOOLTIP WITH VARIOUS COLORS AND SHIFT TEXT
  //	tooltip.addAdvanced('kubejs:honey_upgrade', (item, advanced, text) => {
  //		// shift, alt and ctrl are all keys you can check!
  //		if (!tooltip.shift) {
  //		  text.add(1, [Text.of('Hold whaaaaaat ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
  //		} else {
  //		  text.add(1, Text.green('Gives positive effects to players in a range').bold(true))
  //		  text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
  //		  text.add(3, [Text.white('Iron, '), Text.aqua('Diamonds, '), Text.gold('Gold '), Text.white('or even '), Text.green('Emeralds '), Text.white('are valid base blocks!')])
  //		}
});
