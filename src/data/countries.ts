import type {Country} from "./Country.ts";
import {cities} from "./cities.ts";
import {currencies} from "./currencies.ts";

export const countries: Country[] = [
    {
        geographicalName: "Austria",
        officialName: "Republic of Austria",
        capitalCity: cities.find(c => c.name === "Wien")!,
        largestCity: cities.find(c => c.name === "Wien")!,
        area: {
            km2: 83878,
            rank: 113
        },
        population: {
            number: 9216459,
            rank: 97
        },
        callingCode: "+43",
        iso3166: "AT",
        tld: [".at"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    },
    {
        geographicalName: "Belgium",
        officialName: "Kingdom of Belgium",
        capitalCity: cities.find(c => c.name === "Bruxelles")!,
        largestCity: cities.find(c => c.name === "Bruxelles")!,
        area: {
            km2: 30528,
            rank: 136
        },
        population: {
            number: 11917402,
            rank: 80
        },
        callingCode: "+32",
        iso3166: "BE",
        tld: [".be"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    },
    {
        geographicalName: "Czechia",
        officialName: "Czech Republic",
        capitalCity: cities.find(c => c.name === "Praha")!,
        largestCity: cities.find(c => c.name === "Praha")!,
        area: {
            km2: 78871,
            rank: 115
        },
        population: {
            number: 10882341,
            rank: 85
        },
        callingCode: "+420",
        iso3166: "CZ",
        tld: [".cz"],
        currency: currencies.find(c => c.iso4217 === "CZK")!
    },
    {
        geographicalName: "France",
        officialName: "French Republic",
        capitalCity: cities.find(c => c.name === "Paris")!,
        largestCity: cities.find(c => c.name === "Paris")!,
        area: {
            km2: 643801,
            rank: 42
        },
        population: {
            number: 68736000,
            rank: 21
        },
        callingCode: "+33",
        iso3166: "FR",
        tld: [".fr"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    },
    {
        geographicalName: "Germany",
        officialName: "Federal Republic of Germany",
        capitalCity: cities.find(c => c.name === "Berlin")!,
        largestCity: cities.find(c => c.name === "Berlin")!,
        area: {
            km2: 357581,
            rank: 63
        },
        population: {
            number: 83497147,
            rank: 19
        },
        callingCode: "+49",
        iso3166: "DE",
        tld: [".de", ".eu"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    },
    {
        geographicalName: "Italy",
        officialName: "Italian Republic",
        capitalCity: cities.find(c => c.name === "Roma")!,
        largestCity: cities.find(c => c.name === "Roma")!,
        area: {
            km2: 302068,
            rank: 71
        },
        population: {
            number: 58925596,
            rank: 25
        },
        callingCode: "+39",
        iso3166: "IT",
        tld: [".it"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    },
    {
        geographicalName: "Liechtenstein",
        officialName: "Principality of Liechtenstein",
        capitalCity: cities.find(c => c.name === "Vaduz")!,
        largestCity: cities.find(c => c.name === "Schaan")!,
        area: {
            km2: 160,
            rank: 190
        },
        population: {
            number: 41024,
            rank: 189
        },
        callingCode: "+423",
        iso3166: "LI",
        tld: [".li"],
        currency: currencies.find(c => c.iso4217 === "CHF")!
    },
    {
        geographicalName: "Spain",
        officialName: "Kingdom of Spain",
        capitalCity: cities.find(c => c.name === "Madrid")!,
        largestCity: cities.find(c => c.name === "Madrid")!,
        area: {
            km2: 505370,
            rank: 50
        },
        population: {
            number: 49442844,
            rank: 31
        },
        callingCode: "+34",
        iso3166: "ES",
        tld: [".es"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    },
    {
        geographicalName: "Sweden",
        officialName: "Kingdom of Sweden",
        capitalCity: cities.find(c => c.name === "Stockholm")!,
        largestCity: cities.find(c => c.name === "Stockholm")!,
        area: {
            km2: 450295,
            rank: 55
        },
        population: {
            number: 10610485,
            rank: 88
        },
        callingCode: "+46",
        iso3166: "SE",
        tld: [".se"],
        currency: currencies.find(c => c.iso4217 === "SEK")!
    },
    {
        geographicalName: "Switzerland",
        officialName: "Swiss Confederation",
        capitalCity: cities.find(c => c.name === "Bern")!,
        largestCity: cities.find(c => c.name === "Zürich")!,
        area: {
            km2: 41291,
            rank: 132
        },
        population: {
            number: 9104063,
            rank: 99
        },
        callingCode: "+41",
        iso3166: "CH",
        tld: [".ch", ".swiss"],
        currency: currencies.find(c => c.iso4217 === "CHF")!
    },
    {
        geographicalName: "Turkey",
        officialName: "Republic of Türkiye",
        capitalCity: cities.find(c => c.name === "Ankara")!,
        largestCity: cities.find(c => c.name === "İstanbul")!,
        area: {
            km2: 783562,
            rank: 36
        },
        population: {
            number: 85664944,
            rank: 18
        },
        callingCode: "+90",
        iso3166: "TR",
        tld: [".tr"],
        currency: currencies.find(c => c.iso4217 === "TRY")!
    },
    {
        geographicalName: "United Kingdom",
        officialName: "United Kingdom of Great Britain and Northern Ireland",
        capitalCity: cities.find(c => c.name === "London")!,
        largestCity: cities.find(c => c.name === "London")!,
        area: {
            km2: 244376,
            rank: 78
        },
        population: {
            number: 69487000,
            rank: 20
        },
        callingCode: "+44",
        iso3166: "GB",
        tld: [".uk"],
        currency: currencies.find(c => c.iso4217 === "GBP")!
    },
    {
        geographicalName: "United States",
        officialName: "United States of America",
        capitalCity: cities.find(c => c.name === "Washington, D.C.")!,
        largestCity: cities.find(c => c.name === "New York City")!,
        area: {
            km2: 9525067,
            rank: 4
        },
        population: {
            number: 340110988,
            rank: 3
        },
        callingCode: "+1",
        iso3166: "US",
        tld: [".us"],
        currency: currencies.find(c => c.iso4217 === "USD")!
    },
    {
        geographicalName: "Vatican City",
        officialName: "Vatican City State",
        capitalCity: cities.find(c => c.name === "Vatican City")!,
        largestCity: cities.find(c => c.name === "Vatican City")!,
        area: {
            km2: 0,
            rank: 195
        },
        population: {
            number: 882,
            rank: 195
        },
        callingCode: "+379",
        iso3166: "VA",
        tld: [".va"],
        currency: currencies.find(c => c.iso4217 === "EUR")!
    }
]
