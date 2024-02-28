## IN NEW DIMENSION AS TELEPORTEE AT PORTAL COORDS

# Tp player to other side's coords
tp @s ^ ^-1 ^ ~ ~
tag @s add p1_teleported
# IF Portal
execute at @e[tag=portal1,distance=0..20] run tp @s ^ ^-1 ^ ~ ~

# If no portal
execute unless entity @e[tag=portal1,distance=0..20] unless predicate tf_portals:in_overworld run fill ^4.7 ^4 ^5.7 ^-4.7 ^-1 ^-5.7 air
execute unless entity @e[tag=portal1,distance=0..20] unless predicate tf_portals:in_overworld run fill ~4.7 ~-2 ~5.7 ~-4.7 ~-2 ~-5.7 minecraft:stone
execute unless entity @e[tag=portal1,distance=0..20] run fill ^1.5 ^2 ^ ^-1.5 ^-2 ^ kubejs:honey_latex_bricks
execute unless entity @e[tag=portal1,distance=0..20] run fill ^0.5 ^1 ^ ^-0.5 ^-1 ^ air
execute unless entity @e[tag=portal1,distance=0..20] unless predicate tf_portals:in_overworld run setblock ~3.2 ~-1 ~3.2 torch
execute unless entity @e[tag=portal1,distance=0..20] unless predicate tf_portals:in_overworld run setblock ~-3.2 ~-1 ~-3.2 torch
execute unless entity @e[tag=portal1,distance=0..20] unless predicate tf_portals:in_overworld run setblock ~-3.2 ~-1 ~3.2 torch
execute unless entity @e[tag=portal1,distance=0..20] unless predicate tf_portals:in_overworld run setblock ~3.2 ~-1 ~-3.2 torch
execute unless entity @e[tag=portal1,distance=0..20] run function tf_portals:portal1/give

# Disabled destination-side portal creation because it won't work properly in 1.18.1 like this
# execute unless entity @e[tag=portal1,distance=0..20] run summon minecraft:armor_stand ^ ^ ^ {Invisible:1b,ArmorItems:[{},{},{},{id:"minecraft:nether_brick",Count:1b,tag:{CustomModelData:919190}}],Small:1b,NoGravity:1b,Invulnerable:1b,Tags:["portal1","forced"]}

execute as @e[tag=forced,distance=0..20] run tp @s ^ ^ ^ ~ ~
execute as @e[tag=forced,distance=0..20] run tag @s remove forced
execute at @e[tag=portal1,distance=0..20] run tp @s ^ ^-1 ^ ~ ~

playsound minecraft:block.portal.travel block @a[distance=0..15] ~ ~ ~ 0.5 2 0.1
playsound minecraft:block.water.ambient block @a[distance=0..15] ~ ~ ~ 2 2 1
# playsound minecraft:entity.generic.splash block @a[distance=0..15] ~ ~ ~ 0.5 1.2 0.1