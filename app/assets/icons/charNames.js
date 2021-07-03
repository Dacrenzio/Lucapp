const charNames = [
  {
    key: 0,
    src: require("./banjo_and_kazooie.png"),
    name: "Banjo & Kazooie",
  },
  { key: 1, src: require("./bayonetta.png"), name: "Bayonetta" },
  { key: 2, src: require("./bowser.png"), name: "Bowser" },
  { key: 3, src: require("./bowserj.png"), name: "Bowser Jr" },
  { key: 4, src: require("./byleth.png"), name: "Byleth" },
  {
    key: 5,
    src: require("./captain_falcon.png"),
    name: "Captain Falcon",
  },
  { key: 6, src: require("./chrom.png"), name: "Chrom" },
  { key: 7, src: require("./cloud.png"), name: "Cloud" },
  { key: 8, src: require("./corrin.png"), name: "Corrin" },
  { key: 9, src: require("./daisy.png"), name: "Daisy" },
  { key: 10, src: require("./dark_pit.png"), name: "Dark Pit" },
  { key: 11, src: require("./dark_samus.png"), name: "Dark Samus" },
  { key: 12, src: require("./diddy_kong.png"), name: "Diddy Kong" },
  { key: 13, src: require("./donkey_kong.png"), name: "Donkey Kong" },
  { key: 14, src: require("./dr_mario.png"), name: "Dr. Mario" },
  { key: 15, src: require("./duck_hunt.png"), name: "Duck Hunt" },
  { key: 16, src: require("./falco.png"), name: "Falco" },
  { key: 17, src: require("./fox.png"), name: "Fox" },
  { key: 18, src: require("./ganondorf.png"), name: "Ganondorf" },
  { key: 19, src: require("./greninja.png"), name: "Greninja" },
  { key: 20, src: require("./hero.png"), name: "Hero" },
  { key: 21, src: require("./ice_climbers.png"), name: "Ice Climbers" },
  { key: 22, src: require("./ike.png"), name: "Ike" },
  { key: 23, src: require("./incineroar.png"), name: "Incineroar" },
  { key: 24, src: require("./inkling.png"), name: "Inkling" },
  { key: 25, src: require("./isabelle.png"), name: "Isabelle" },
  { key: 26, src: require("./jigglypuff.png"), name: "Jigglypuff" },
  { key: 27, src: require("./joker.png"), name: "Joker" },
  { key: 28, src: require("./kazuya.png"), name: "Kazuya" },
  { key: 29, src: require("./ken.png"), name: "Ken" },
  { key: 30, src: require("./king_dedede.png"), name: "King Dedede" },
  { key: 31, src: require("./king_k_rool.png"), name: "King K Rool" },
  { key: 32, src: require("./kirby.png"), name: "Kirby" },
  { key: 33, src: require("./link.png"), name: "Link" },
  { key: 34, src: require("./little_mac.png"), name: "Little Mac" },
  { key: 35, src: require("./lucario.png"), name: "Lucario" },
  { key: 36, src: require("./lucas.png"), name: "Lucas" },
  { key: 37, src: require("./lucina.png"), name: "Lucina" },
  { key: 38, src: require("./luigi.png"), name: "Luigi" },
  { key: 39, src: require("./mario.png"), name: "Mario" },
  { key: 40, src: require("./marth.png"), name: "Marth" },
  { key: 41, src: require("./mega_man.png"), name: "Mega Man" },
  { key: 42, src: require("./meta_knight.png"), name: "Meta Knight" },
  { key: 43, src: require("./mewtwo.png"), name: "Mewtwo" },
  { key: 44, src: require("./mii_brawler.png"), name: "Mii Brawler" },
  { key: 45, src: require("./mii_gunner.png"), name: "Mii Gunner" },
  {
    key: 46,
    src: require("./mii_swordfighter.png"),
    name: "Mii Swordfighter",
  },
  { key: 47, src: require("./minmin.png"), name: "Minmin" },
  {
    key: 48,
    src: require("./mr_game_and_watch.png"),
    name: "Mr Game & Watch",
  },
  { key: 49, src: require("./ness.png"), name: "Ness" },
  { key: 50, src: require("./olimar.png"), name: "Olimar" },
  { key: 51, src: require("./pac_man.png"), name: "Pac Man" },
  { key: 52, src: require("./palutena.png"), name: "Palutena" },
  { key: 53, src: require("./peach.png"), name: "Peach" },
  { key: 54, src: require("./pichu.png"), name: "Pichu" },
  { key: 55, src: require("./pikachu.png"), name: "Pikachu" },
  {
    key: 56,
    src: require("./piranha_plant.png"),
    name: "Piranha Plant",
  },
  { key: 57, src: require("./pit.png"), name: "Pit" },
  {
    key: 58,
    src: require("./pokemon_trainer.png"),
    name: "Pokemon Trainer",
  },
  { key: 59, src: require("./pyra.png"), name: "Pyra/Mythra" },
  { key: 60, src: require("./richter.png"), name: "Richter" },
  { key: 61, src: require("./ridley.png"), name: "Ridley" },
  { key: 62, src: require("./rob.png"), name: "ROB" },
  { key: 63, src: require("./robin.png"), name: "Robin" },
  {
    key: 64,
    src: require("./rosalina_and_luma.png"),
    name: "Rosalina & Luma",
  },
  { key: 65, src: require("./roy.png"), name: "Roy" },
  { key: 66, src: require("./ryu.png"), name: "Ryu" },
  { key: 67, src: require("./samus.png"), name: "Samus" },
  { key: 68, src: require("./sephiroth.png"), name: "Sephiroth" },
  { key: 69, src: require("./sheik.png"), name: "Sheik" },
  { key: 70, src: require("./shulk.png"), name: "Shulk" },
  { key: 71, src: require("./simon.png"), name: "Simon" },
  { key: 72, src: require("./snake.png"), name: "Snake" },
  { key: 73, src: require("./sonic.png"), name: "Sonic" },
  { key: 74, src: require("./steve.png"), name: "Steve" },
  { key: 75, src: require("./terry.png"), name: "Terry" },
  { key: 76, src: require("./toon_link.png"), name: "Toon Link" },
  { key: 77, src: require("./villager.png"), name: "Villager" },
  { key: 78, src: require("./wario.png"), name: "Wario" },
  {
    key: 79,
    src: require("./wii_fit_trainer.png"),
    name: "Wii Fit Trainer",
  },
  { key: 80, src: require("./wolf.png"), name: "Wolf" },
  { key: 81, src: require("./yoshi.png"), name: "Yoshi" },
  { key: 82, src: require("./young_link.png"), name: "Young Link" },
  { key: 83, src: require("./zelda.png"), name: "Zelda" },
  {
    key: 84,
    src: require("./zero_suit_samus.png"),
    name: "Zero Suit Samus",
  },
];

export default charNames;
