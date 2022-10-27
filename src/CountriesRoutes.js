import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/main.sass'

import Countries from "./components/Countries";
import Holidays from "./components/Holidays";

export default function CountriesRoutes() {
    
    return (
        <>
            <Routes>
                <Route index element={<Countries />} />
                <Route path=":countryCode" element={<Holidays />} />
            </Routes>
        </>
    );
}
