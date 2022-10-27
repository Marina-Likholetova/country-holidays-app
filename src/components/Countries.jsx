import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { api_get_countries } from "../data/api.js";
import useApi from "marinafetchreacthook";
import { getFilteredCountry } from "../utils";
import Input from "./Input";


export default function Countries() {
    const [inputData, setInputData] = useState("");
    const { isLoading, isError, data } = useApi(api_get_countries);
    const filtredCountries = getFilteredCountry(data, inputData);


    const onChangeInput = (e) => {
        setInputData(e.target.value);
    };



    return (
        <article>
            <h1>Country Holidays 2022</h1>
            <Input inputData={inputData} onChangeInput={onChangeInput} />
            <div className="countries row row-cols-1 row-cols-md-2">
                {data &&
                    filtredCountries.map((country) => (
                        <NavLink
                            to={`/countries/${country.countryCode}`}
                            key={country.countryCode}
                            className="col country hover-light pt-3 pb-3"
                        >
                            {country.name}({country.countryCode})
                        </NavLink>
                    ))}
                {isLoading && <div className="lds-ripple"><div></div><div></div></div>}
                {isError && <div>Error...</div>}
            </div>
        </article>
    );
}
