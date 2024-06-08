"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const ConfigUtil_1 = require("./util/ConfigUtil");
const LoggingUtil_1 = require("./util/LoggingUtil");
const SWAH_1 = require("./SWAH");
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
class Mod {
    modConfig;
    probabilityHelper;
    weatherConfig;
    preAkiLoad(container) {
        container.register("SWAH", SWAH_1.SWAH, { lifecycle: tsyringe_1.Lifecycle.Singleton });
        container.register("SWAHConfigUtil", ConfigUtil_1.ConfigUtil, { lifecycle: tsyringe_1.Lifecycle.Singleton });
        container.register("SWAHLoggingUtil", LoggingUtil_1.LoggingUtil, { lifecycle: tsyringe_1.Lifecycle.Singleton });
        this.probabilityHelper = container.resolve("ProbabilityHelper");
        this.weatherConfig = container.resolve("ConfigServer").getConfig(ConfigTypes_1.ConfigTypes.WEATHER);
        this.modConfig = container.resolve("SWAHConfigUtil").parseModConfig();
        const staticRouterModService = container.resolve("StaticRouterModService");
        staticRouterModService.registerStaticRouter("SwahGetForecast", [
            {
                url: "/swah/forecast",
                action: (url, info, sessionId, output) => {
                    const result = container.resolve("SWAH").determineSeason(this.probabilityHelper, this.weatherConfig, this.modConfig);
                    if (result) {
                        return JSON.stringify({ season: "WINTER" });
                    }
                    return JSON.stringify({ season: "SPRING" });
                }
            }
        ], "swah-get");
    }
    postDBLoad(container) {
        container.resolve("SWAH").preRaidForecastCheck(this.probabilityHelper, this.weatherConfig, this.modConfig);
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map