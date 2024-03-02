JEIEvents.hideItems((event) => {
  global.MEK_TIERS.forEach((tier) => {
    global.MEK_PIPES.forEach((pipe) => {
      event.hide(Item.of(`mekanism:${tier}_${pipe}`));
    });
  });

  event.hide(Item.of("mekanism:upgrade_anchor"));
  event.hide(Item.of("mekanism:logistical_sorter"));
  event.hide(Item.of("mekanism:restrictive_transporter"));
  event.hide(Item.of("mekanism:diversion_transporter"));
});
