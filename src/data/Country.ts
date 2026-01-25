import type {City} from "./City.ts";
import type {Currency} from "./currency.ts";

export type Country = {
    geographicalName: string;
    officialName: string;
    capitalCity: City;
    largestCity: City;
    area: {
        km2: number;
        rank: number;
    }
    population: {
        number: number;
        rank: number;
    }
    callingCode: string;
    iso3166: string;
    tld: string[];
    currency: Currency;
}
