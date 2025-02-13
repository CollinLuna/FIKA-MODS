"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationProcessor = void 0;
const CustomRaidTimes_1 = require("../CustomRaidTimes");
const RaidTimeAdjuster_1 = require("../adjusters/RaidTimeAdjuster");
const TrainTimeAdjuster_1 = require("../adjusters/TrainTimeAdjuster");
/**
 * LocationProcessor class.
 *
 * Handles processing of different game locations. This class currently adjusts various parameters of a location
 * including raid times, spawn waves, and train times.
 */
class LocationProcessor {
    locations;
    /**
     * Mapping of internal location names to their respective configuration and human-readable names.
     */
    /* eslint-disable @typescript-eslint/naming-convention */
    static locationNames = {
        bigmap: { config: "customs", human: "Customs" },
        factory4_day: { config: "factoryDay", human: "Factory (Day)" },
        factory4_night: { config: "factoryNight", human: "Factory (Night)" },
        interchange: { config: "interchange", human: "Interchange" },
        laboratory: { config: "laboratory", human: "Laboratory" },
        lighthouse: { config: "lighthouse", human: "Lighthouse" },
        rezervbase: { config: "reserve", human: "Reserve" },
        sandbox: { config: "groundZero", human: "Ground Zero" },
        shoreline: { config: "shoreline", human: "Shoreline" },
        tarkovstreets: { config: "streets", human: "Streets of Tarkov" },
        woods: { config: "woods", human: "Woods" },
    };
    /* eslint-enable @typescript-eslint/naming-convention */
    /**
     * Constructs a new instance of the `LocationProcessor` class.
     */
    constructor() {
        this.locations = CustomRaidTimes_1.CustomRaidTimes.container.resolve("DatabaseServer").getTables().locations;
    }
    /**
     * Processes the enabled locations by adjusting raid times, spawn waves, and train times.
     */
    processLocations() {
        const enabledLocations = Object.keys(LocationProcessor.locationNames);
        for (const locationName of enabledLocations) {
            const location = this.locations[locationName].base;
            new RaidTimeAdjuster_1.RaidTimeAdjuster(location).adjust();
            new TrainTimeAdjuster_1.TrainTimeAdjuster(location).adjust();
        }
    }
}
exports.LocationProcessor = LocationProcessor;
//# sourceMappingURL=LocationProcessor.js.map