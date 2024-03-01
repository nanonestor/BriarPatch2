console.log("KubeJS: Removing Mekanism recipes on server...");

const MEK_TIERS = ["basic", "advanced", "elite", "ultimate"];
const MEK_PIPES = [
  "pressurized_tube",
  "mechanical_pipe",
  "logistical_transporter",
  "universal_cable",
];

ServerEvents.recipes((event) => {
  MEK_TIERS.forEach((tier) => {
    MEK_PIPES.forEach((pipe) => {
      event.remove({ id: `mekanism:transmitter/${pipe}/${tier}` });
    });
  });

  event.remove({ id: "mekanism:upgrade/anchor" });
  event.remove({ id: "mekanism:logistical_sorter" });
});

console.log("KubeJS: Removed Mekanism recipes on server.");
