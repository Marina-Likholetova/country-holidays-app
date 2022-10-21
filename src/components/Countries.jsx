import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { api_get_countries } from "../data/api.js";
import { getFilteredCountry } from "../utils";
import Input from "./Input";


export default function Countries() {
    const [inputData, setInputData] = useState("");
    const [countries, setCountries] = useState("");
    const filtredCountries = getFilteredCountry(countries, inputData);

    useEffect(() => {
        fetch(api_get_countries)
            .then((data) => data.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((err) => console.log(err.message));
    }, []);


    const onChangeInput = (e) => {
        setInputData(e.target.value);
    };



    return (
        <article>
            <h1>Country Holidays 2022</h1>
            <Input inputData={inputData} onChangeInput={onChangeInput} />
            <div className="countries row row-cols-1 row-cols-md-2">
                {countries &&
                    filtredCountries.map((country) => (
                        <NavLink
                            to={`/countries/${country.countryCode}`}
                            key={country.countryCode}
                            className="col country hover-light pt-3 pb-3"
                        >
                            {country.name}({country.countryCode})
                        </NavLink>
                    ))}
            </div>
        </article>
    );
}
