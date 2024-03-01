console.log("KubeJS: Removing Mekanism JEI items on client...");

const MEK_TIERS = ["basic", "advanced", "elite", "ultimate"];
const MEK_PIPES = [
  "pressurized_tube",
  "mechanical_pipe",
  "logistical_transporter",
  "universal_cable",
];

JEIEvents.hideItems((event) => {
  MEK_TIERS.forEach((tier) => {
    MEK_PIPES.forEach((pipe) => {
      event.hide(event, `mekanism:${tier}_${pipe}`);
    });
  });

  event.hide("mekanism:upgrade_anchor");
  event.hide("mekanism:logistical_sorter");
});

console.log("KubeJS: Removed Mekanism JEI items on client.");
