
const fetch = require("sync-fetch");
var requireDir = require('require-dir');
const { Gamemode } = require("./gamemode");
const { Stat } = require("./stat");
//var japi = requireDir('./');

class Player {
    constructor(username) {
        this.username = username;
        this.gamemodes = []

        this.json = fetch("https://stats.jartexnetwork.com/api/players/" + username).json(); // this sends logs result in console for some reason

        //    .then(res => res.json())
        //    .then(j => { this.parseJson(j) });
        this.parseJson();
    }

    getGamemode(gamemode) {
        return this.gamemodes[gamemode];
    }

    parseJson() {
        var json = this.json;

        for (var a = 0; a < json.gamemodes.length; a++) {
            var gamemode = json.gamemodes[a];
            for (var mode in gamemode.data) {
                var gamemodeName = gamemode.name.toUpperCase() + "_" + mode;
                var stats = []
                gamemode.data[mode].forEach(s => {
                    var stat = new Stat(s.name, s.total, s.weekly, s.monthly);
                    stats[stat.name] = stat;
                });

                this.gamemodes[gamemodeName] = new Gamemode(gamemodeName, stats);
                
            }
        }

        this.level = this.json.rank.level;
        this.experience = this.json.rank.experience;
        this.percentage = this.json.rank.percentage;
        this.prefix = this.json.rank.rankDisplay;
    }
}

module.exports = { Player: Player };