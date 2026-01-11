import { exchangeRatesHeaders, exchangeRatesData } from '../data';

export default function Rates() {
    return (
        <div className="content-page">
            <h2>Exchange Rates</h2>
            <p>Date: 01.01.2026</p>
            <table className="gtc-table">
                <thead>
                    <tr>
                        <th>von -&gt; nach</th>
                        {exchangeRatesHeaders.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {exchangeRatesData.map((row) => (
                        <tr key={row.from}>
                            <td><strong>{row.from}</strong></td>
                            {row.rates.map((rate, index) => (
                                <td key={index}>{rate.toFixed(6)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
