console.log("KubeJS: Removing Mekanism recipes on server...");

const mek_tiers = ["basic", "advanced", "elite", "ultimate"];
const mek_pipes = [
  "pressurized_tube",
  "mechanical_pipe",
  "logistical_transporter",
  "universal_cable",
];

ServerEvents.recipes((event) => {
  mek_tiers.forEach((tier) => {
    mek_pipes.forEach((pipe) => {
      event.remove(event, `mekanism:transmitter/${pipe}/${tier}`);
    });
  });

  event.remove({ id: "mekanism:upgrade/anchor" });
  event.remove({ id: "mekanism:logistical_sorter" });
});

console.log("KubeJS: Removed Mekanism recipes on server.");
