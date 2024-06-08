"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigUtil = void 0;
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const ModConfig_1 = require("../model/ModConfig");
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const path_1 = __importDefault(require("path"));
let ConfigUtil = class ConfigUtil {
    loggingUtil;
    constructor(loggingUtil) {
        this.loggingUtil = loggingUtil;
    }
    parseModConfig() {
        const vfs = tsyringe_1.container.resolve("VFS");
        // attempt to parse the config file
        let modConfig;
        try {
            modConfig = jsonc_1.jsonc.parse(vfs.readFile(path_1.default.resolve(__dirname, "../../config/config.jsonc")));
        }
        catch (error) {
            this.loggingUtil.error("Disabling mod due to an error parsing the config file. Make sure your values are set up correctly.");
            //returns a mod config with the shut down flag set to true
            return new ModConfig_1.ModConfig(true);
        }
        return modConfig;
    }
};
exports.ConfigUtil = ConfigUtil;
exports.ConfigUtil = ConfigUtil = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("SWAHLoggingUtil")),
    __metadata("design:paramtypes", [Object])
], ConfigUtil);
//# sourceMappingURL=ConfigUtil.js.map