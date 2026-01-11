export interface Currency {
    code: string;
    name: string;
    countries: string[];
}

export const currencies: Currency[] = [
    {code: "CHF", name: "Swiss Franc", countries: ["Liechtenstein", "Switzerland"]},
    {code: "CZK", name: "Czech Koruna", countries: ["Czechia"]},
    {
        code: "EUR",
        name: "Euro",
        countries: ["Austria", "Belgium", "France", "Germany", "Italy", "Spain", "Vatican City"]
    },
    {code: "GBP", name: "Pound Sterling", countries: ["United Kingdom"]},
    {code: "SEK", name: "Swedish Krona", countries: ["Sweden"]},
    {code: "TRY", name: "Turkish Lira", countries: ["Turkey"]},
    {code: "USD", name: "United States Dollar", countries: ["United States"]},
];

export const exchangeRatesHeaders = ["CHF", "EUR", "USD", "GBP"];

export const exchangeRatesData = [
    {from: "CHF", rates: [1.000000, 1.073860, 1.261140, 0.937044]},
    {from: "EUR", rates: [0.931216, 1.000000, 1.174400, 0.872591]},
    {from: "USD", rates: [0.792932, 0.851502, 1.000000, 0.743013]},
    {from: "GBP", rates: [1.067190, 1.146010, 1.345870, 1.000000]},
];
