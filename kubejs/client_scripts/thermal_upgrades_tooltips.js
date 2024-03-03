// priority: 0

//onEvent('jei.remove.categories', event => {
//	event.remove(['create:automatic_shaped', 'create:automatic_shapeless', 'create:automatic_packing'])
//  })

// onEvent('jei.hide.items', event => {
// Hide items in JEI here
// event.hide('minecraft:cobblestone')
// })

const thermal_augments = [
  "thermal:area_radius_augment",
  "thermal:dynamo_fuel_augment",
  "thermal:dynamo_output_augment",
  "thermal:dynamo_throttle_augment",
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

const kubejs_augments = [
  "kubejs:dynamo_output_unstable",
  "kubejs:honey_upgrade",
  "kubejs:machine_catalyst_eco",
  "kubejs:machine_efficiency_eco",
  "kubejs:machine_sieve_picky",
  "kubejs:machine_speed_unstable",
  "kubejs:rf_coil_xfer_big",
  "kubejs:rf_coil_xfer_unstable",
];

const modifier_text_builder = (label, amount, isGood) => {
  const amount_label = Text.of(amount).color(isGood ? "green" : "red");
  return [Text.of(label + ": ").color("gray"), amount_label];
};

ItemEvents.tooltip((tooltip) => {
  // Adds a standardized tooltip to across all augments
  thermal_augments.concat(kubejs_augments).forEach((augment) => {
    tooltip.addAdvanced(augment, (item, advanced, text) => {
      text.add(1, Text.yellow("Thermal Augment / Upgrade"));
    });
  });

  // Add a shift indicator to all of the new augments
  kubejs_augments.forEach((augment) => {
    tooltip.addAdvanced(augment, (item, advanced, text) => {
      text.add(2, Text.yellow("(Hold Shift)"));
    });
  });

  // honey upgrade
  tooltip.addAdvanced("kubejs:honey_upgrade", (item, advanced, text) => {
    text.add(3, [
      Text.of(
        "Improves base attributes. Other augments may be more effective as a result."
      ).gold(),
    ]);

    if (tooltip.shift) {
      text.add(4, modifier_text_builder("Scale Factor", "8x", true));
    }
  });

  // rf_coil_xfer_big
  tooltip.addAdvanced("kubejs:rf_coil_xfer_big", (item, advanced, text) => {
    text.add(3, [Text.of("RF coil infused with honey and redstone").gold()]);
    text.add(4, [
      Text.of(
        "Because everything runs more smoothly when slathered in honey."
      ).gold(),
    ]);

    if (tooltip.shift) {
      text.add(5, modifier_text_builder("RF Capacity", "6x", true));
      text.add(6, modifier_text_builder("RF Transfer", "8x", true));
    }
  });

  // rf_coil_xfer_unstable
  tooltip.addAdvanced(
    "kubejs:rf_coil_xfer_unstable",
    (item, advanced, text) => {
      text.add(3, [
        Text.of(
          "A bunch of Honey Coated RF Coils squished into one unit."
        ).gold(),
      ]);
      text.add(4, [
        Text.of(
          "Quasi-creative unit - barely holding together at quark-gluon level."
        ).gold(),
      ]);
      text.add(5, [Text.of("* This may not be a good idea *").gold()]);

      if (tooltip.shift) {
        text.add(5, modifier_text_builder("RF Capacity", "2x", true));
        text.add(5, modifier_text_builder("Process Energy", "1.5x", false));
        text.add(6, modifier_text_builder("RF Transfer", "12x", true));
      }
    }
  );

  // machine_speed_unstable
  tooltip.addAdvanced(
    "kubejs:machine_speed_unstable",
    (item, advanced, text) => {
      text.add(3, [Text.of("Hyper hot-rodded Flux Linkage.").gold()]);
      text.add(4, [
        Text.of(
          "Super fast process speeds at the expense of voluminous RF consumption."
        ).gold(),
      ]);

      if (tooltip.shift) {
        text.add(6, modifier_text_builder("Maximum Power", "6x", true));
        text.add(7, modifier_text_builder("Base Power", "2x", true));
        text.add(7, modifier_text_builder("Process Energy", "2x", false));
      }
    }
  );

  // machine_efficiency_eco
  tooltip.addAdvanced(
    "kubejs:machine_efficiency_eco",
    (item, advanced, text) => {
      text.add(3, [
        Text.of(
          "Supercooled fluid honey acts as mega efficient heat sink!"
        ).gold(),
      ]);
      text.add(4, [
        Text.of(
          "Unfortunately with efficiency comes less overall speed / power levels."
        ).gold(),
      ]);

      if (tooltip.shift) {
        text.add(5, modifier_text_builder("Maximum Power", "0.5x", false));
        text.add(6, modifier_text_builder("Process Energy", "0.25x", true));
      }
    }
  );

  // machine_sieve_picky
  tooltip.addAdvanced("kubejs:machine_sieve_picky", (item, advanced, text) => {
    text.add(3, [
      Text.of(
        "Blast-smelted in Redstone! This Aux Sieve is now much more effective."
      ).gold(),
    ]);
    text.add(4, [
      Text.of(
        "It has a higher chance of producing secondary output results, with much higher energy needed."
      ).gold(),
    ]);

    if (tooltip.shift) {
      text.add(5, modifier_text_builder("Secondary Product", "+40%", true));
      text.add(6, modifier_text_builder("Process Energy", "3x", false));
    }
  });

  // machine_catalyst_eco
  tooltip.addAdvanced("kubejs:machine_catalyst_eco", (item, advanced, text) => {
    text.add(3, [
      Text.of(
        "A charred honeycomb/grass matrix helps protect Catalysts."
      ).gold(),
    ]);
    text.add(4, [
      Text.of(
        "They are consumed / burned at a lower rate, at the expense of more energy usage."
      ).gold(),
    ]);

    if (tooltip.shift) {
      text.add(5, modifier_text_builder("Catalyst Usage", "0.4x", true));
      text.add(6, modifier_text_builder("Process Energy", "1.5x", false));
    }
  });

  // dynamo_output_unstable
  tooltip.addAdvanced(
    "kubejs:dynamo_output_unstable",
    (item, advanced, text) => {
      text.add(3, [
        Text.of(
          "Experimental hexagonal Reaction Chamber pockets made with genuine honeycomb!"
        ).gold(),
      ]);
      text.add(4, [
        Text.of(
          "Greatly improved RF output, unfortunately much higher fuel burn rate."
        ).gold(),
      ]);

      if (tooltip.shift) {
        text.add(5, modifier_text_builder("Fuel Energy", "0.75x", false));
        text.add(6, modifier_text_builder("Maximum Output", "2.5x", true));
      }
    }
  );

  //     EXAMPLE TOOLTIP WITH VARIOUS COLORS AND SHIFT TEXT
  //	tooltip.addAdvanced('kubejs:honey_upgrade', (item, advanced, text) => {
  //		// shift, alt and ctrl are all keys you can check!
  //		if (!tooltip.shift) {
  //		  text.add(1, [Text.of('Hold whaaaaaat ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
  //		} else {
  //		  text.add(1, Text.green('Gives positive effects to players in a range').bold(true))
  //		  text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
  //		  text.add(3, [Text.white('Iron, '), Text.aqua('Diamonds, '), Text.gold('Gold '), Text.white('or even '), Text.green('Emeralds '), Text.white('are valid base blocks!')])
  //	}		text.add(4, [Text.of('Shift + Right Click').color('gold'), Text.of(' to see the range.').color(0x55FF55)]
  //		}
});

JEIEvents.subtypes((s) => {});
