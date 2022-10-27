import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from './context';
import './sass/main.sass'
import Layout from "./Layout";
import About from "./components/About";
import CountriesRoutes from "./CountriesRoutes";
import NotFound from "./components/NotFound";
import Countries from "./components/Countries";




function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => curr === 'dark' ? 'light' : 'dark')
    }
 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Countries />} />
                        <Route path="about" element={<About />} />
                        <Route path="countries/*" element={<CountriesRoutes />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
