import { DependencyContainer } from "tsyringe";

// SPT types
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

//Pull in config
import * as config from "../config/config.json";
const logging = config.Logging;

class Mod implements IPostDBLoadMod, IPreAkiLoadMod {
    logger: ILogger
    modName: string
    modVersion: string

    constructor() {
        this.modName = "Cargo Pants"; // Set name and version of the mod so we can log it to console later
        this.modVersion = "1.0.0";
    }

    // Code added here will load BEFORE the server has started loading

    public postDBLoad(container: DependencyContainer): void {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables = databaseServer.getTables();
        const pockets = tables.templates.items["627a4e6b255f7527fb05a0f6"]; // Pockets item: "Карманы 1 на 4 со спец слотами" 

        this.logger.log(`[${this.modName} : ${this.modVersion}] : Mod loading`, "green");

        //Begin logic code here
        pockets._props.Grids[0]._props.cellsV = config.PocketSizes.Pocket1
        pockets._props.Grids[1]._props.cellsV = config.PocketSizes.Pocket2
        pockets._props.Grids[2]._props.cellsV = config.PocketSizes.Pocket3
        pockets._props.Grids[3]._props.cellsV = config.PocketSizes.Pocket4

        if (config.Logging) {
            for (let i = 0; i < pockets._props.Grids.length; i++) {
                this.logger.log(`[${this.modName} : ${this.modVersion}] : Pocket ${i + 1} resized to ${pockets._props.Grids[i]._props.cellsV} cell(s) long`, "green");
            }
        }
    }
}

module.exports = { mod: new Mod() }