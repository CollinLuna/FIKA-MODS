"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    postDBLoad(container) {
        // Log load
        const logger = container.resolve("WinstonLogger");
        logger.log("[Josh Mate] Better Backpacks is loading...", "blue");
        // get database from server
        const databaseServer = container.resolve("DatabaseServer");
        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();
        const items = tables.templates.items;
        const backpacks = [
            {
                "name": "6Sh118 raid backpack",
                "itemID": "5df8a4d786f77412672a1e3b",
                "horizontal": 6,
                "vertical": 12,
                "removeFilters": true
            },
            {
                "name": "Mystery Ranch NICE COMM 3 BVS frame system",
                "itemID": "628bc7fb408e2b2e9c0801b1",
                "horizontal": 6,
                "vertical": 11,
                "removeFilters": true
            },
            {
                "name": "Mystery Ranch Blackjack 50 backpack Multicam",
                "itemID": "5c0e774286f77468413cc5b2",
                "horizontal": 6,
                "vertical": 10,
                "removeFilters": true
            },
            {
                "name": "LBT-2670 Slim Field Med Pack",
                "itemID": "5e4abc6786f77406812bd572",
                "horizontal": 6,
                "vertical": 9,
                "removeFilters": true
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "Eberlestock F4 Terminator load bearing backpack Tiger Stripe",
                "itemID": "5f5e46b96bdad616ad46d613",
                "horizontal": 5,
                "vertical": 4,
                "removeFilters": true
            },
            {
                "name": "Sanitars bag",
                "itemID": "5e997f0b86f7741ac73993e2",
                "horizontal": 6,
                "vertical": 6,
                "removeFilters": true
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "3V Gear Paratus 3-Day Operators Tactical backpack",
                "itemID": "5c0e805e86f774683f3dd637",
                "horizontal": 5,
                "vertical": 5,
                "removeFilters": true
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "Eberlestock G2 Gunslinger II backpack Dry Earth",
                "itemID": "6034d2d697633951dc245ea6",
                "horizontal": 3,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "SSO Attack 2 raid backpack",
                "itemID": "5ab8ebf186f7742d8b372e80",
                "horizontal": 6,
                "vertical": 9,
                "removeFilters": true
            },
            {
                "name": "Santas Bag",
                "itemID": "61b9e1aaef9a1b5d6a79899a",
                "horizontal": 6,
                "vertical": 9,
                "removeFilters": true
            },
            {
                "name": "Pilgrim tourist backpack",
                "itemID": "59e763f286f7742ee57895da",
                "horizontal": 6,
                "vertical": 9,
                "removeFilters": true
            },
            {
                "name": "Tasmanian Tiger Trooper 35 backpack",
                "itemID": "639346cc1c8f182ad90c8972",
                "horizontal": 6,
                "vertical": 8,
                "removeFilters": true
            },
            {
                "name": "Gruppa 99 T30 Backpack",
                "itemID": "628e1ffc83ec92260c0f437f",
                "horizontal": 6,
                "vertical": 6,
                "removeFilters": true
            },
            {
                "name": "Gruppa 99 T30 Backpack (Multicam)",
                "itemID": "62a1b7fbc30cfa1d366af586",
                "horizontal": 6,
                "vertical": 6,
                "removeFilters": true
            },
            {
                // WARNING MAKING THIS ANY BIGGER WILL CAUSE GRID OVERLAPS
                "name": "Oakley Mechanism heavy duty backpack Black",
                "itemID": "5d5d940f86f7742797262046",
                "horizontal": 4,
                "vertical": 4,
                "removeFilters": true
            },
            {
                "name": "ANA Tactical Beta 2 Battle backpack",
                "itemID": "5b44c6ae86f7742d1627baea",
                "horizontal": 6,
                "vertical": 6,
                "removeFilters": true
            },
            {
                "name": "Camelbak TriZip assault backpack",
                "itemID": "545cdae64bdc2d39198b4568",
                "horizontal": 6,
                "vertical": 6,
                "removeFilters": true
            },
            {
                "name": "Eberlestock F5 Switchblade backpack Dry Earth",
                "itemID": "5f5e467b0bc58666c37e7821",
                "horizontal": 6,
                "vertical": 6,
                "removeFilters": true
            },
            {
                "name": "Gruppa 99 T20 backpack Black",
                "itemID": "618bb76513f5097c8d5aa2d5",
                "horizontal": 6,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Gruppa 99 T20 backpack Multicam",
                "itemID": "619cf0335771dd3c390269ae",
                "horizontal": 6,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Gruppa 99 T20 backpack",
                "itemID": "618bb76513f5097c8d5aa2d5",
                "horizontal": 6,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Hazard 4 Drawbridge backpack Coyote Tan",
                "itemID": "60a272cc93ef783291411d8e",
                "horizontal": 6,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "LBT-1476A 3Day Pack Woodland",
                "itemID": "618cfae774bb2d036a049e7c",
                "horizontal": 6,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Hazard 4 Takedown sling backpack Black",
                "itemID": "6034d103ca006d2dca39b3f0",
                "horizontal": 4,
                "vertical": 8,
                "removeFilters": true
            },
            {
                "name": "Hazard 4 Takedown sling backpack Multicam",
                "itemID": "6038d614d10cbf667352dd44",
                "horizontal": 4,
                "vertical": 8,
                "removeFilters": true
            },
            {
                "name": "Hazard 4 Pillbox backpack",
                "itemID": "60a2828e8689911a226117f9",
                "horizontal": 6,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "LBT-8005A Day Pack backpack",
                "itemID": "5e9dcf5986f7746c417435b3",
                "horizontal": 5,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Scav backpack",
                "itemID": "56e335e4d2720b6c058b456d",
                "horizontal": 5,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "WARTECH Berkut BB102 backpack",
                "itemID": "5ca20d5986f774331e7c9602",
                "horizontal": 5,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Flyye MBSS backpack",
                "itemID": "544a5cde4bdc2d39388b456b",
                "horizontal": 4,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Duffle bag",
                "itemID": "56e33634d2720bd8058b456b",
                "horizontal": 5,
                "vertical": 3,
                "removeFilters": true
            },
            {
                "name": "LolKek 3F Transfer tourist backpack",
                "itemID": "5f5e45cc5021ce62144be7aa",
                "horizontal": 3,
                "vertical": 5,
                "removeFilters": true
            },
            {
                "name": "Transformer Bag",
                "itemID": "56e33680d2720be2748b4576",
                "horizontal": 4,
                "vertical": 3,
                "removeFilters": true
            },
            {
                "name": "VKBO army bag",
                "itemID": "5ab8ee7786f7742d8f33f0b9",
                "horizontal": 3,
                "vertical": 4,
                "removeFilters": true
            },
            {
                "name": "Tactical sling bag",
                "itemID": "5ab8f04f86f774585f4237d8",
                "horizontal": 3,
                "vertical": 3,
                "removeFilters": true
            }
        ];
        // Loop through and update back pack stats in game
        let i = 0;
        while (i < backpacks.length) {
            // Update Base Grid with Configured Cells
            items[backpacks[i].itemID]._props.Grids[0]._props.cellsH = backpacks[i].horizontal;
            items[backpacks[i].itemID]._props.Grids[0]._props.cellsV = backpacks[i].vertical;
            // Remove filters if requested to
            if (backpacks[i].removeFilters === true) {
                items[backpacks[i].itemID]._props.Grids[0]._props.filters = [];
            }
            i++;
        }
        logger.log("[Josh Mate] Better Backpacks has finished loading for version AKI 3.7.1", "green");
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map