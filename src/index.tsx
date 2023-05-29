import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import EcoflightFuels from './pages/EcoflightFuels';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GlobalPage from "./components/utils/HomePageGlobal";
import {ThankYou} from "./components/ThankYou";
import {Advance} from "./pages/Advance";

// File is not to be touched, this is the entry point for the website.



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// CHANGE ALL ROUTES HERE
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<GlobalPage />} />
                <Route path="/ecoflightfuels" element={<EcoflightFuels />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="/advance" element={<Advance />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
