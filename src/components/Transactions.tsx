import {useEffect, useState} from "react";

export default function Transactions() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/gtc/rest/transactions')
            .then(res => res.json())
            .then(data => setList(data));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Von</th>
                    <th>Nach</th>
                    <th>Betrag</th>
                </tr>
            </thead>
            <tbody>
                {list && list.length > 0 ? (
                    list.map((t) => (
                        <tr key={t.id}>
                            <td>{t.date}</td>

                            <td>{t.sourceCurrency}</td>
                            <td>{t.targetCurrency}</td>

                            <td>
                                {t.sourceAmount !== undefined && t.sourceAmount !== null
                                    ? t.sourceAmount.toFixed(2)
                                    : '0.00'}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} style={{textAlign: 'center'}}>Keine Transaktionen vorhanden</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
