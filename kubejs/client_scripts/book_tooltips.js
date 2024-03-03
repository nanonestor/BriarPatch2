

const bp_books = [
  {item: 'alexsmobs:animal_dictionary' },
  {item: 'ae2:guide' },
  {item: 'immersiveengineering:manual' },
  {item: 'rftoolsbase:manual' },
  {item: 'croptopia:guide' },
  {item: 'botania:lexicon' },
  {item: 'cookingforblockheads:recipe_book' },
  {item: 'cookingforblockheads:crafting_book' },
  {item:'patchouli:guide_book' },
  {item:'tetra:holo', nbt: {"holo/core":"holo/core","holo/core_material":"frame/dim","holo/frame":"holo/frame","holo/frame_material":"core/ancient","holo/repo":"holo/repo","holo/repo_material":"repo/default","holo/scanner":"holo/scanner","holo/scanner_material":"scanner/default" }}
];


ItemEvents.tooltip((tooltip) => {
  bp_books.forEach((book) => {
    tooltip.addAdvanced(Item.of(book), (item, advanced, text) => {
      text.add(1, Text.gold("Guide / Manual / Book / Tome").bold(false));
    });
  });


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
