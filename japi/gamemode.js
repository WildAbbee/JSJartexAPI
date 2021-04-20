
class Gamemode {

    #statNames = [];

    constructor(name, stats) {
        this.name = name;
        this.stats = stats;
    }

    getStat(stat) {
        for (var s in this.stats) {
            if (this.stats[s].name === stat) {
                return this.stats[s];
            }
        }
    }
}

module.exports = { Gamemode: Gamemode };