"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    modConfig = require("../config/config.json");
    postDBLoad(container) {
        // get database from server
        const databaseServer = container.resolve("DatabaseServer");
        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        const items = tables.templates.items;
        const config = this.modConfig;
        for (let i in items) {
            if (items[i]._parent === "5448bc234bdc2d3c308b4569" && items[i]._id !== "610720f290b75a49ff2e5e25") {
                if (items[i]._props.Cartridges[0]._max_count >=
                    config.speedLoader.smallest_capacity_magazine_to_speedup) {
                    items[i]._props.LoadUnloadModifier = config.speedLoader.load_unload_speed;
                    items[i]._props.CheckTimeModifier = config.speedLoader.mag_check;
                }
            }
        }
        const logger = container.resolve("WinstonLogger");
        logger.log("Loading: Nootropix-SpeedLoader", "blue");
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map