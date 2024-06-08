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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAH = void 0;
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
let SWAH = class SWAH {
    loggingUtil;
    constructor(loggingUtil) {
        this.loggingUtil = loggingUtil;
    }
    determineSeason(probabilityHelper, weatherConfig, modConfig) {
        if (modConfig.shutErDown) {
            this.loggingUtil.red("SWAH disabled due to shutErDown being true.", false);
            return false;
        }
        if (weatherConfig.forceWinterEvent) {
            this.loggingUtil.cyan("Winter is here to stay...", modConfig.surpriseMe);
            return weatherConfig.forceWinterEvent;
        }
        if (probabilityHelper.rollChance(modConfig.rollingWinterChancePercentage, 100)) {
            weatherConfig.forceWinterEvent = true;
            this.loggingUtil.cyan("Winter is coming...", modConfig.surpriseMe);
            return weatherConfig.forceWinterEvent;
        }
        this.loggingUtil.green("The gopher or whatever said spring is still here.", modConfig.surpriseMe);
        return weatherConfig.forceWinterEvent;
    }
    preRaidForecastCheck(probabilityHelper, weatherConfig, modConfig) {
        if (modConfig.shutErDown) {
            this.loggingUtil.red("SWAH disabled due to shutErDown being true.", false);
            return false;
        }
        if (probabilityHelper.rollChance(modConfig.initialWinterChancePercentage, 100)) {
            weatherConfig.forceWinterEvent = true;
            this.loggingUtil.cyan("Hopefully you packed some cold weather gear...", modConfig.surpriseMe);
            return weatherConfig.forceWinterEvent;
        }
        this.loggingUtil.green("The weather is looking warm and breezy out there.", modConfig.surpriseMe);
        return weatherConfig.forceWinterEvent;
    }
};
exports.SWAH = SWAH;
exports.SWAH = SWAH = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("SWAHLoggingUtil")),
    __metadata("design:paramtypes", [Object])
], SWAH);
//# sourceMappingURL=SWAH.js.map