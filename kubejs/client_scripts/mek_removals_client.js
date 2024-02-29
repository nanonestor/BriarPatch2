console.log("KubeJS: Removing Mekanism JEI items on client...");

const mek_tiers = ["basic", "advanced", "elite", "ultimate"];
const mek_pipes = [
  "pressurized_tube",
  "mechanical_pipe",
  "logistical_transporter",
  "universal_cable",
];

JEIEvents.hideItems((event) => {
  mek_tiers.forEach((tier) => {
    mek_pipes.forEach((pipe) => {
      event.hide(event, `mekanism:${tier}_${pipe}`);
    });
  });

  event.hide("mekanism:upgrade_anchor");
  event.hide("mekanism:logistical_sorter");
});

console.log("KubeJS: Removed Mekanism JEI items on client.");
