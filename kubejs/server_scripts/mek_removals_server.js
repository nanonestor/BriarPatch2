// Remove Mekanism Recipes
ServerEvents.recipes((event) => {
  global.MEK_TIERS.forEach((tier) => {
    global.MEK_PIPES.forEach((pipe) => {
      event.remove({ id: `mekanism:transmitter/${pipe}/${tier}` });
    });
  });
  event.remove({ id: "mekanism:upgrade/anchor" });
  event.remove({ id: "mekanism:logistical_sorter" });
  event.remove({ id: "mekanism:transmitter/restrictive_transporter" });
  event.remove({ id: "mekanism:transmitter/diversion_transporter" });
});
