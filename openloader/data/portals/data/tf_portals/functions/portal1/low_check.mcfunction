# AS AT UNCOMPLETED PORTAL CLOUD

# Align to the block with item frame
execute unless entity @e[tag=portal1_align,type=minecraft:item_frame,distance=0..1] run summon item_frame ~ ~ ~ {Tags:["portal1_align"],Facing:1,Invisible:1}

# Detect structure of portal frame for right or left offset on the x or z axis portals
# If specific portal structure is found, summon armor stand and correct offset to be in center

execute if block ~ ~-1 ~1 kubejs:honey_latex_bricks if block ~ ~-1 ~2 kubejs:honey_latex_bricks if block ~ ~-1 ~-1 kubejs:honey_latex_bricks if block ~ ~ ~-1 kubejs:honey_latex_bricks if block ~ ~ ~2 kubejs:honey_latex_bricks if block ~ ~1 ~-1 kubejs:honey_latex_bricks if block ~ ~1 ~2 kubejs:honey_latex_bricks if block ~ ~2 ~-1 kubejs:honey_latex_bricks if block ~ ~2 ~2 kubejs:honey_latex_bricks if block ~ ~3 ~-1 kubejs:honey_latex_bricks if block ~ ~3 ~2 kubejs:honey_latex_bricks if block ~ ~3 ~ kubejs:honey_latex_bricks if block ~ ~3 ~1 kubejs:honey_latex_bricks at @e[type=minecraft:item_frame,distance=0..1,tag=portal1_align] positioned ~ ~1 ~0.5 run summon minecraft:armor_stand ~ ~ ~ {Invisible:1b,ArmorItems:[{},{},{},{id:"minecraft:nether_brick",Count:1b,tag:{CustomModelData:919190}}],Small:1b,NoGravity:1b,Invulnerable:1b,Tags:["portal1_z","portal1","cloud_active"]}

execute if block ~ ~-1 ~-1 kubejs:honey_latex_bricks if block ~ ~-1 ~-2 kubejs:honey_latex_bricks if block ~ ~-1 ~1 kubejs:honey_latex_bricks if block ~ ~ ~1 kubejs:honey_latex_bricks if block ~ ~ ~-2 kubejs:honey_latex_bricks if block ~ ~1 ~1 kubejs:honey_latex_bricks if block ~ ~1 ~-2 kubejs:honey_latex_bricks if block ~ ~2 ~1 kubejs:honey_latex_bricks if block ~ ~2 ~-2 kubejs:honey_latex_bricks if block ~ ~3 ~1 kubejs:honey_latex_bricks if block ~ ~3 ~-2 kubejs:honey_latex_bricks if block ~ ~3 ~ kubejs:honey_latex_bricks if block ~ ~3 ~-1 kubejs:honey_latex_bricks at @e[type=minecraft:item_frame,distance=0..1,tag=portal1_align] positioned ~ ~1 ~-0.5 run summon minecraft:armor_stand ~ ~ ~ {Invisible:1b,ArmorItems:[{},{},{},{id:"minecraft:nether_brick",Count:1b,tag:{CustomModelData:919190}}],Small:1b,NoGravity:1b,Invulnerable:1b,Tags:["portal1_z","portal1","cloud_active"]}

execute if block ~1 ~-1 ~ kubejs:honey_latex_bricks if block ~2 ~-1 ~ kubejs:honey_latex_bricks if block ~-1 ~-1 ~ kubejs:honey_latex_bricks if block ~-1 ~ ~ kubejs:honey_latex_bricks if block ~2 ~ ~ kubejs:honey_latex_bricks if block ~-1 ~1 ~ kubejs:honey_latex_bricks if block ~2 ~1 ~ kubejs:honey_latex_bricks if block ~-1 ~2 ~ kubejs:honey_latex_bricks if block ~2 ~2 ~ kubejs:honey_latex_bricks if block ~-1 ~3 ~ kubejs:honey_latex_bricks if block ~2 ~3 ~ kubejs:honey_latex_bricks if block ~ ~3 ~ kubejs:honey_latex_bricks if block ~1 ~3 ~ kubejs:honey_latex_bricks at @e[type=minecraft:item_frame,distance=0..1,tag=portal1_align] positioned ~0.5 ~1 ~ run summon minecraft:armor_stand ~ ~ ~ {Invisible:1b,ArmorItems:[{},{},{},{id:"minecraft:nether_brick",Count:1b,tag:{CustomModelData:919190}}],Small:1b,NoGravity:1b,Invulnerable:1b,Tags:["portal1_x","portal1","cloud_active"]}

execute if block ~-1 ~-1 ~ kubejs:honey_latex_bricks if block ~-2 ~-1 ~ kubejs:honey_latex_bricks if block ~1 ~-1 ~ kubejs:honey_latex_bricks if block ~1 ~ ~ kubejs:honey_latex_bricks if block ~-2 ~ ~ kubejs:honey_latex_bricks if block ~1 ~1 ~ kubejs:honey_latex_bricks if block ~-2 ~1 ~ kubejs:honey_latex_bricks if block ~1 ~2 ~ kubejs:honey_latex_bricks if block ~-2 ~2 ~ kubejs:honey_latex_bricks if block ~1 ~3 ~ kubejs:honey_latex_bricks if block ~-2 ~3 ~ kubejs:honey_latex_bricks if block ~ ~3 ~ kubejs:honey_latex_bricks if block ~-1 ~3 ~ kubejs:honey_latex_bricks at @e[type=minecraft:item_frame,distance=0..1,tag=portal1_align] positioned ~-0.5 ~1 ~ run summon minecraft:armor_stand ~ ~ ~ {Invisible:1b,ArmorItems:[{},{},{},{id:"minecraft:nether_brick",Count:1b,tag:{CustomModelData:919190}}],Small:1b,NoGravity:1b,Invulnerable:1b,Tags:["portal1_x","portal1","cloud_active"]}


# Tag cloud active means that the portal detection succeeded but the cloud is still detecting
# Execute as position of portal1 armorstand marker
execute at @e[tag=cloud_active,distance=0..2] run playsound minecraft:block.beacon.activate block @a[distance=0..25] ~ ~ ~ 1 2 1
execute at @e[tag=cloud_active,distance=0..2] run playsound minecraft:entity.enderman.teleport block @a[distance=0..25] ~ ~ ~ 1 0 1
execute at @e[tag=cloud_active,distance=0..2] run playsound minecraft:entity.enderman.teleport block @a[distance=0..25] ~ ~ ~ 1 1 1
execute at @e[tag=cloud_active,distance=0..2] run playsound minecraft:entity.enderman.teleport block @a[distance=0..25] ~ ~ ~ 1 2 1
execute at @e[tag=cloud_active,distance=0..2] run particle minecraft:instant_effect ~ ~ ~ 1 1 1 1 100

# Remove water
execute if entity @e[tag=cloud_active,distance=0..2] run setblock ~ ~ ~ air
# Kill alignment frame
kill @e[tag=portal1_align,distance=0..1]

# Cancel and kill detection cloud
execute if entity @e[tag=cloud_active,distance=0..2] run tag @s add p1_cancelled
execute if entity @e[tag=cloud_active,distance=0..2] run kill @s

# Rotate portal1 marker to face perpendicular to portal frame
execute as @e[tag=cloud_active,tag=portal1_x,distance=0..2] at @s run tp @s ~ ~ ~ 0 0
execute as @e[tag=cloud_active,tag=portal1_z,distance=0..2] at @s run tp @s ~ ~ ~ 90 0
# Remove cloud active tag after it has been deactivated
execute if entity @e[tag=cloud_active,distance=0..2] run tag @e[tag=cloud_active,distance=0..2] remove cloud_active