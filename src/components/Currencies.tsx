import {currencies} from '../data';

export default function Currencies() {
    return (
        <div className="content-page">
            <h2>Currency List</h2>
            <table className="gtc-table">
                <thead>
                    <tr>
                        <th>ISO 4217</th>
                        <th>Name</th>
                        <th>Countries</th>
                    </tr>
                </thead>
                <tbody>
                    {currencies.map((curr) => (
                        <tr key={curr.code}>
                            <td>{curr.code}</td>
                            <td>{curr.name}</td>
                            <td>{curr.countries.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
