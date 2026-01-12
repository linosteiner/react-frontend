import {countries} from "../data/countries.ts";

export default function Countries() {
    return (
        <div className="content-page">
            <h2>Country List</h2>
            <h3>Countries and Cities</h3>
            <table className="gtc-table">
                <thead>
                    <tr>
                        <th>Name Geographical</th>
                        <th>Official Name</th>
                        <th>Capital City</th>
                        <th>Largest City</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr key={country.geographicalName}>
                            <td>{country.geographicalName}</td>
                            <td>{country.officialName}</td>
                            <td>{country.capitalCity.name}</td>
                            <td>{country.largestCity.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Countries, Area, Population and Calling Code</h3>
            <table className="gtc-table">
                <thead>
                    <tr>
                        <th rowSpan={2}>Name</th>
                        <th colSpan={2}>Area [in km<sup>2</sup>]</th>
                        <th colSpan={2}>Population</th>
                        <th rowSpan={2}>Calling Code</th>
                    </tr>
                    <tr>
                        <th>Number</th>
                        <th>Rank</th>
                        <th>Number</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr key={country.geographicalName}>
                            <td>{country.geographicalName}</td>
                            <td className={"numeric"}>{country.area.km2.toLocaleString("de-CH")}</td>
                            <td className={"numeric"}>{country.area.rank.toLocaleString("de-CH")}</td>
                            <td className={"numeric"}>{country.population.number.toLocaleString("de-CH")}</td>
                            <td className={"numeric"}>{country.population.rank.toLocaleString("de-CH")}</td>
                            <td>{country.callingCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Countries, ISO Codes, TLDs and Currencies</h3>
            <table className="gtc-table">
                <thead>
                    <tr>
                        <th rowSpan={4}>Name</th>
                        <th rowSpan={2}>ISO 3166</th>
                        <th rowSpan={2}>Flag</th>
                        <th rowSpan={2}>TLD</th>
                        <th colSpan={2}>Currency</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>ISO 4217</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr key={country.geographicalName}>
                            <td>{country.geographicalName}</td>
                            <td>{country.iso3166}</td>
                            <td className={"center-content"}><img alt={`Flag of ${country.geographicalName}`} src={`${import.meta.env.BASE_URL}assets/img/flags/${country.iso3166.toLowerCase()}.svg`}/></td>
                            <td>{country.tld.join(", ")}</td>
                            <td>{country.currency.name}</td>
                            <td>{country.currency.iso4217}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
