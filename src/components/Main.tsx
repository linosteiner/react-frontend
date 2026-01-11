import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Main() {
    return (
        <div className="app-container">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
