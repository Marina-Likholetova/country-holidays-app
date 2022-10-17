import React, { useState } from "react";
import Input from "./Input";
import CountryList from "./CountryList";
import CountryHolidayList from "./CountryHolidayList";
import { api_get_holidays } from "../data/api.js";



export default function CountryContainer({ countries }) {
    const [inputData, setInputData] = useState("");
    const [countryHolidays, setCountryHolidays] = useState("");

    const onChangeInput = (e) => {
        setInputData(e.target.value);
        setCountryHolidays("");
    };

    const onCountryClick = (countryCode) => {
        fetch(api_get_holidays + countryCode)
            .then((data) => data.json())
            .then((data) => setCountryHolidays(data));
    };

    const resetStates = () => {
        setCountryHolidays("");
        setInputData("");
    };

    const getFilteredCountry = (countries, input) => {
        if (!input) {
            return countries;
        }

        return countries.filter((item) => item.name.toLowerCase().startsWith(input.toLowerCase()));
    };

    const filtredCountries = getFilteredCountry(countries, inputData);

    return (
        <div className="container">
            <h1>Country Holidays 2022</h1>
            <Input inputData={inputData} onChangeInput={onChangeInput} />
            {(countryHolidays && (
                <CountryHolidayList countryHolidays={countryHolidays} resetStates={resetStates} />
            )) || <CountryList countries={filtredCountries} onCountryClick={onCountryClick} />}
        </div>
    );
}
