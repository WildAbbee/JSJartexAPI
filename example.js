
var requireDir = require('require-dir');
var japi = requireDir('./japi');

// Load data of a player. This will take a second as it has to contact jartex's api
var player = new japi.player.Player("WildAbbee");

// To get a players stats you first need to choose a gamemode.
/*
SKYWARS_SOLO, SKYWARS_DOUBLES, SKYWARS_ALL_MODES
BEDWARS_SOLO, BEDWARS_DOUBLES, BEDWARS_TRIPLES, BEDWARS_QUADS, BEDWARS_ALL_MODES
*/
var mode = player.getGamemode("SKYWARS_SOLO");

// Next you need to choose a stat
/*
SKYWARS: Kills, Deaths, Assists, Wins, Losses, Winstreak, Highest Winstreak, Games Played, Melee Kills, Bow Kills, Void Kills, Arrows Shot, Arrows Hit, Enderpearls Thrown,
Eggs/Snowballs Thrown, Brains Gathered, Chests Opened

BEDWARS: Kills, Deaths, Assists, Wins, Losses, Winstreak, Highest Winstreak, Games Played, Melee Kills, Bow Kills, Void Kills, Arrows Shot, Arrows Hit, Enderpearls Thrown, 
Eggs/Snowballs Thrown, Brains Gathered, Beds Destroyed, Beds Lost, Final Kills, Final Deaths

NOTE: In bedwars assists are not tracked and will always be 0
NOTE: In bedwars eggs/snowballs thrown refers to silverfish
*/
var stat = mode.getStat("Kills");

// Now you choose a timeframe
/*
overall, weekly, monthly
*/
var skywarsSoloKillsOverall = stat.overall;

// We can get some general player information:
/*
username (their username)
level (minigames level)
experience (experience, reset to 0 upon level up)
percentage (how close is the player to levelling up)
prefix (this is the minecraft prefix, for example "&8[&bDiamond&8]&b " for diamond rank)
*/
console.log(player.username + "'s prefix is &8[" + player.level + "] " + player.prefix);