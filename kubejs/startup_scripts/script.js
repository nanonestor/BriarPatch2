// priority: 0

console.info('KubeJS loading startup_scripts')

StartupEvents.registry("block", (event) => {
	event.create('honey_reinforced_bricks')
		.material('stone')
		.hardness(20.0)
		.displayName('Honey Reinforced Bricks')
  })

  StartupEvents.registry("block", (event) => {
	event.create('honey_latex_bricks')
		.material('stone')
		.hardness(50.0)
		.displayName('Honey Latex Bricks')
		.resistance(6000.0)
  })

  StartupEvents.registry("fluid", (event) => {
	event.create('hot_lead')
		.thickTexture(0x930931)
		.bucketColor(0x930931)
		.displayName('Hot Lead')
	event.create('lead_bismuth')
		.thickTexture(0xB3A2B9)
		.bucketColor(0xB3A2B9)
		.displayName('Lead Bismuth Eutectic Alloy')
	event.create('hot_lead_bismuth')
		.thickTexture(0xD30B20)
		.bucketColor(0xD30B20)
		.displayName('Hot Lead Bismuth Eutectic Alloy')
	event.create('hot_tin')
		.thickTexture(0xE73C00)
		.bucketColor(0xE73C00)
		.displayName('Hot Tin')
})

StartupEvents.registry("item", (event) => {
	// The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
	event.create('honey_upgrade')
	event.create('rf_coil_xfer_big')
	event.create('rf_coil_xfer_unstable')
	event.create('machine_speed_unstable')
	event.create('machine_efficiency_eco')
	event.create('machine_sieve_picky')
	event.create('machine_catalyst_eco')
	event.create('dynamo_output_unstable')
	
  })

  StartupEvents.registry("item", (event) => {
    event.create('honey_glazed_carrot').food(food => {
	    food
		  .hunger(8)
          .saturation(1)
        })
	event.create('honey_glazed_beetroot').food(food => {
		food
			.hunger(8)
			.saturation(1)
		})
})