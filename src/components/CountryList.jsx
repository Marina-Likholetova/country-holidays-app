import React from "react";
import CountryCard from "./CountryCard";


export default function CountryList({ countries, onCountryClick }) {
    return (
        <div className="countries row row-cols-1 row-cols-md-2">
            {countries.map((country, i) => (
                <CountryCard
                    countryName={country.name}
                    countryCode={country.countryCode}
                    onCountryClick={onCountryClick}
                    key={i}
                />
            ))}
        </div>
    );
}
