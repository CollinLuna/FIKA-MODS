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
exports.LoggingUtil = void 0;
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
let LoggingUtil = class LoggingUtil {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    green(message, surpriseMe) {
        if (!surpriseMe)
            this.logger.log(`SeasonalWeatherAtHome: ${message}`, LogTextColor_1.LogTextColor.GREEN);
    }
    cyan(message, surpriseMe) {
        if (!surpriseMe)
            this.logger.log(`SeasonalWeatherAtHome: ${message}`, LogTextColor_1.LogTextColor.CYAN);
    }
    red(message, surpriseMe) {
        if (!surpriseMe)
            this.logger.log(`SeasonalWeatherAtHome: ${message}`, LogTextColor_1.LogTextColor.RED);
    }
    error(message) {
        this.logger.error(`SeasonalWeatherAtHome: ${message}`);
    }
};
exports.LoggingUtil = LoggingUtil;
exports.LoggingUtil = LoggingUtil = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("WinstonLogger")),
    __metadata("design:paramtypes", [Object])
], LoggingUtil);
//# sourceMappingURL=LoggingUtil.js.map