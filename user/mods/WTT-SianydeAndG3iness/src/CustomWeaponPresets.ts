/* eslint-disable @typescript-eslint/naming-convention */
import { WTTInstanceManager } from "./WTTInstanceManager";
import * as weaponPresets from "../db/CustomWeaponPresets/WeaponPresets.json";
import * as path from "path";
const modPath = path.normalize(path.join(__dirname, ".."));

export class CustomWeaponPresets 
{
    private Instance: WTTInstanceManager;
    private assortSchemes: any;

    public preAkiLoad(Instance: WTTInstanceManager): void 
    {
        this.Instance = Instance;
    }

    public postDBLoad(): void 
    {
        this.addWeaponPresets();
        this.addWeaponPresetLocales();
        
    }
    public addWeaponPresets(): void
    {
        for (const preset in weaponPresets.ItemPresets) this.Instance.database.globals.ItemPresets[preset] = weaponPresets.ItemPresets[preset];
    }
    public addWeaponPresetLocales(): void 
    {
        const serverLocales = ["ch", "cz", "en", "es", "es-mx", "fr", "ge", "hu", "it", "jp", "kr", "pl", "po", "ru", "sk", "tu"];
        const addedLocales = {};
    
        for (const locale of serverLocales) 
        {
            let localeFile;
            try 
            {
                // Attempt to require the locale file
                localeFile = require(`${modPath}/db/locales/${locale}.json`);
            }
            catch (error) 
            {
                // Log an error if the file cannot be found, but continue to the next iteration
                if (this.Instance.debug)
                {
                    console.error(`Error loading locale file for '${locale}':`, error);
                }
                continue;
            }
    
            // Proceed with adding locales if the file was successfully loaded
            if (Object.keys(localeFile).length < 1) continue;
    
            for (const currentItem in localeFile) 
            {
                this.Instance.database.locales.global[locale][currentItem] = localeFile[currentItem];
    
                if (!addedLocales[locale]) addedLocales[locale] = {};
                addedLocales[locale][currentItem] = localeFile[currentItem];
            }
        }
    
        // Placeholders
        for (const locale of serverLocales) 
        {
            if (locale === "en") continue;
    
            const englishItems = addedLocales["en"];
    
            if (!(locale in addedLocales)) 
            {
                for (const englishItem in englishItems) 
                {
                    if (this.Instance.database.locales.global[locale] && !(englishItem in this.Instance.database.locales.global[locale])) 
                    {
                        this.Instance.database.locales.global[locale][englishItem] = englishItems[englishItem];
                    }
                }
            }
        }
    }
}