"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Pull in config
const config = __importStar(require("../config/config.json"));
const logging = config.Logging;
class Mod {
    logger;
    modName;
    modVersion;
    constructor() {
        this.modName = "Cargo Pants"; // Set name and version of the mod so we can log it to console later
        this.modVersion = "1.0.0";
    }
    // Code added here will load BEFORE the server has started loading
    postDBLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        // get database from server
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const pockets = tables.templates.items["627a4e6b255f7527fb05a0f6"]; // Pockets item: "Карманы 1 на 4 со спец слотами" 
        this.logger.log(`[${this.modName} : ${this.modVersion}] : Mod loading`, "green");
        //Begin logic code here
        pockets._props.Grids[0]._props.cellsV = config.PocketSizes.Pocket1;
        pockets._props.Grids[1]._props.cellsV = config.PocketSizes.Pocket2;
        pockets._props.Grids[2]._props.cellsV = config.PocketSizes.Pocket3;
        pockets._props.Grids[3]._props.cellsV = config.PocketSizes.Pocket4;
        if (config.Logging) {
            for (let i = 0; i < pockets._props.Grids.length; i++) {
                this.logger.log(`[${this.modName} : ${this.modVersion}] : Pocket ${i + 1} resized to ${pockets._props.Grids[i]._props.cellsV} cell(s) long`, "green");
            }
        }
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map