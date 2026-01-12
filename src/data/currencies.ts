import type {Currency} from "./currency.ts";

export const currencies: Currency[] = [
    {iso4217: "CHF", name: "Swiss Franc", countries: ["Liechtenstein", "Switzerland"]},
    {iso4217: "CZK", name: "Czech Koruna", countries: ["Czechia"]},
    {
        iso4217: "EUR",
        name: "Euro",
        countries: ["Austria", "Belgium", "France", "Germany", "Italy", "Spain", "Vatican City"]
    },
    {iso4217: "GBP", name: "Pound Sterling", countries: ["United Kingdom"]},
    {iso4217: "SEK", name: "Swedish Krona", countries: ["Sweden"]},
    {iso4217: "TRY", name: "Turkish Lira", countries: ["Turkey"]},
    {iso4217: "USD", name: "United States Dollar", countries: ["United States"]},
];

export const exchangeRatesHeaders = ["CHF", "EUR", "USD", "GBP"];

export const exchangeRatesData = [
    {from: "CHF", rates: [1.000000, 1.073860, 1.261140, 0.937044]},
    {from: "EUR", rates: [0.931216, 1.000000, 1.174400, 0.872591]},
    {from: "USD", rates: [0.792932, 0.851502, 1.000000, 0.743013]},
    {from: "GBP", rates: [1.067190, 1.146010, 1.345870, 1.000000]},
];
