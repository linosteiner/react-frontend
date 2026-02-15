import {Link} from 'react-router-dom';
import './Components.css';

export default function Header() {
    return (
        <header className="gtc-header">
            <div className="logo">Global Travel Companion</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/currencies">Currencies</Link>
                <Link to="/rates">Rates</Link>
                <Link to="/countries">Countries</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/transactions">Transactions</Link>
            </nav>
        </header>
    );
}
