import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Currencies from './components/Currencies';
import Rates from './components/Rates';
import './components/Components.css';
import Countries from "./components/Countries.tsx";

function App() {
    return (
        <BrowserRouter basename="/gtc">
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="currencies" element={<Currencies/>}/>
                    <Route path="rates" element={<Rates/>}/>
                    <Route path="countries" element={<Countries/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
