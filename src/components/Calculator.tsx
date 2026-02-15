import {useState} from 'react';
import {exchangeRatesData, exchangeRatesHeaders} from '../data/currencies';

export default function Calculator() {
    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<string>(exchangeRatesData[0]?.from || "CHF");
    const [toCurrency, setToCurrency] = useState<string>(exchangeRatesHeaders[0] || "CHF");
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = async () => {
        const fromData = exchangeRatesData.find(d => d.from === fromCurrency);
        if (fromData) {
            const toIndex = exchangeRatesHeaders.indexOf(toCurrency);
            if (toIndex !== -1 && fromData.rates[toIndex] !== undefined) {
                const rate = fromData.rates[toIndex];
                const calculatedResult = amount * rate;
                setResult(calculatedResult);

                const transaction = {
                    date: new Date().toISOString().split('T')[0],
                    userLogin: "demo_user",
                    sourceAmount: amount,
                    sourceCurrency: fromCurrency,
                    targetCurrency: toCurrency,
                    exchangeRate: rate
                };

                try {
                    await fetch('/gtc/rest/transactions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(transaction)
                    });
                } catch (error) {
                    console.error("Fehler beim Speichern der Transaktion:", error);
                }
            }
        }
    };

    return (
        <div className="content-page">
            <h2>Currency Converter</h2>
            <div style={{maxWidth: '150px', margin: '20px 0'}}>
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>Betrag:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        style={{width: '85%', padding: '8px'}}
                    />
                </div>
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>Von (Quellwährung):</label>
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        style={{width: '100%', padding: '8px'}}
                    >
                        {exchangeRatesData.map((data) => (
                            <option key={data.from} value={data.from}>
                                {data.from}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{marginBottom: '15px'}}>
                    <label style={{display: 'block', marginBottom: '5px'}}>Nach (Zielwährung):</label>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        style={{width: '100%', padding: '8px'}}
                    >
                        {exchangeRatesHeaders.map((header) => (
                            <option key={header} value={header}>
                                {header}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleCalculate}
                    style={{
                        padding: '10px 20px',
                        cursor: 'pointer',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px'
                    }}
                >
                    Berechnen
                </button>
            </div>

            {result !== null && (
                <div>
                    <h3>Ergebnis:</h3>
                    <p>
                        {amount} {fromCurrency} = <strong>{result.toFixed(2)} {toCurrency}</strong>
                    </p>
                </div>
            )}
        </div>
    );
}
