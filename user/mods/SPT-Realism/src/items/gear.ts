import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import { Arrays } from "../utils/arrays";
import { ParentClasses } from "../utils/enums";
import { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";

export class Gear {
    constructor(private arrays: Arrays, private tables: IDatabaseTables, private logger: ILogger) { }

    itemDB(): Record<string, ITemplateItem> {
        return this.tables.templates.items;
    }

    public loadMaskChanges() {

        //GP-5
        this.itemDB()["5b432c305acfc40019478128"]._props.FaceShieldComponent = true;
        this.itemDB()["5b432c305acfc40019478128"]._props.FaceShieldMask = "NoMask";

        //GP-7
        this.itemDB()["60363c0c92ec1c31037959f5"]._props.FaceShieldComponent = true;
        this.itemDB()["60363c0c92ec1c31037959f5"]._props.FaceShieldMask = "NoMask";

        //Ronin
        this.itemDB()["5b4329f05acfc47a86086aa1"]._props.FaceShieldComponent = true;
        this.itemDB()["5b4329f05acfc47a86086aa1"]._props.FaceShieldMask = "NoMask";

        //Atomic
        this.itemDB()["657089638db3adca1009f4ca"]._props.FaceShieldComponent = true;
        this.itemDB()["657089638db3adca1009f4ca"]._props.FaceShieldMask = "Narrow";

        //Glorious
        this.itemDB()["62a09e08de7ac81993580532"]._props.FaceShieldComponent = true;
        this.itemDB()["62a09e08de7ac81993580532"]._props.FaceShieldMask = "Narrow";

        //Shattered
        this.itemDB()["5b432b2f5acfc4771e1c6622"]._props.FaceShieldComponent = true;
        this.itemDB()["5b432b2f5acfc4771e1c6622"]._props.FaceShieldMask = "Narrow";

        //Death
        this.itemDB()["6570aead4d84f81fd002a033"]._props.FaceShieldComponent = true;
        this.itemDB()["6570aead4d84f81fd002a033"]._props.FaceShieldMask = "Narrow";
    }

    public loadSpecialSlotChanges() {
        this.itemDB()["627a4e6b255f7527fb05a0f6"]._props.Slots.forEach(slot => {
            slot._props.filters[0].Filter.push("5672cb724bdc2dc2088b456b", "590a3efd86f77437d351a25b");
        });
       
    }

    public loadGearConflicts() {

        let confMasks = this.arrays.conflMasks;
        let confHats = this.arrays.conflHats;
        let confNVG = this.arrays.conflNVGomponents
        let armorCompArr = [];

        this.itemDB()["60363c0c92ec1c31037959f5"]._props.ConflictingItems = this.itemDB()["60363c0c92ec1c31037959f5"]._props.ConflictingItems.filter(i => i !== "5e4bfc1586f774264f7582d3");

        for (let item in this.itemDB()) {
            let serverItem = this.itemDB()[item];
            if (serverItem._parent === ParentClasses.ARMOREDEQUIPMENT && serverItem._props.HasHinge == true) {
                armorCompArr.push(serverItem._id);
            }
        }
        for (let nvg in confNVG) {
            for (let item in this.itemDB()) {
                let serverItem = this.itemDB()[item];
                if (serverItem._id === confNVG[nvg]) {
                    let confItems = serverItem._props.ConflictingItems;
                    serverItem._props.ConflictingItems = confItems.concat(armorCompArr)
                }
            }
        }
        for (let hat in confHats) {
            for (let item in this.itemDB()) {
                if (this.itemDB()[item]._id === confHats[hat]) {
                    let confItems = this.itemDB()[item]._props.ConflictingItems;
                    this.itemDB()[item]._props.ConflictingItems = confMasks.concat(confItems);
                }
            }
        }

        for (let item in this.itemDB()) {
            if (this.itemDB()[item]._parent === ParentClasses.HEADWEAR) {
                for (let c in this.itemDB()[item]._props.ConflictingItems) {
                    let confItem = this.itemDB()[item]._props.ConflictingItems[c];
                    if (this.itemDB()[confItem] !== undefined && this.itemDB()[confItem]._parent === ParentClasses.HEADSET) {
                        this.itemDB()[item]._props.ConflictingItems[c] = "";
                    }
                }
            }
        }
    }

    public loadHeadsetTweaks() {
        for (let item in this.itemDB()) {
            let serverItem = this.itemDB()[item];

            //Sordin
            if (serverItem._id === "5aa2ba71e5b5b000137b758f") {
                serverItem._props.Distortion = 0.1;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -45;
                serverItem._props.AmbientVolume = -2.25;
                serverItem._props.CompressorGain = 7;
            }

            //GSSH
            if (serverItem._id === "5b432b965acfc47a8774094e") {
                serverItem._props.Distortion = 0.31;
                serverItem._props.Resonance = 3;
                serverItem._props.DryVolume = -46;
                serverItem._props.AmbientVolume = -2.35;
                serverItem._props.CompressorGain = 6;
                serverItem._props.CompressorVolume = -4;
                serverItem._props.CompressorTreshold = -26;
            }

            //Peltor ComTac 2
            if (serverItem._id === "5645bcc04bdc2d363b8b4572") {
                serverItem._props.Distortion = 0.22;
                serverItem._props.Resonance = 2;
                serverItem._props.DryVolume = -48;
                serverItem._props.AmbientVolume = -2.45;
                serverItem._props.CompressorGain = 8;
            }

            //Peltor Sport
            if (serverItem._id === "5c165d832e2216398b5a7e36") {
                serverItem._props.Distortion = 0.28;
                serverItem._props.Resonance = 2.5;
                serverItem._props.DryVolume = -49;
                serverItem._props.AmbientVolume = -2.5;
                serverItem._props.CompressorGain = 8;
            }

            //Peltor ComTac 4
            if (serverItem._id === "628e4e576d783146b124c64d") {
                serverItem._props.Distortion = 0.05;
                serverItem._props.Resonance = 1;
                serverItem._props.DryVolume = -51;
                serverItem._props.AmbientVolume = -2.65;
                serverItem._props.CompressorGain = 10;
                serverItem._props.CompressorTreshold = -22;
            }

            //FAST RAC
            if (serverItem._id === "5a16b9fffcdbcb0176308b34") {
                serverItem._props.Distortion = 0.15;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -52;
                serverItem._props.AmbientVolume = -2.75;
                serverItem._props.CompressorGain = 9;
                serverItem._props.CompressorTreshold = -23;
            }

            //Opsmen Earmor M32
            if (serverItem._id === "6033fa48ffd42c541047f728") {
                serverItem._props.Distortion = 0.2;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -55;
                serverItem._props.AmbientVolume = -2.85;
                serverItem._props.CompressorGain = 9;
                serverItem._props.CompressorTreshold = -24;
            }

            //Walker Razor Digital Headset
            if (serverItem._id === "5e4d34ca86f774264f758330") {
                serverItem._props.Distortion = 0.12;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -56;
                serverItem._props.AmbientVolume = -2.9;
                serverItem._props.CompressorGain = 10;
                serverItem._props.CompressorTreshold = -24;
            }

            //Walker XCEL 500BT
            if (serverItem._id === "5f60cd6cf2bcbb675b00dac6") {
                serverItem._props.Distortion = 0.1;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -57;
                serverItem._props.AmbientVolume = -3;
                serverItem._props.CompressorGain = 10;
                serverItem._props.CompressorTreshold = -25;
            }
        }

    }
}