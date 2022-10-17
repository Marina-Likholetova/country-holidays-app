import React from "react";



export default function CountryCard({ countryName, countryCode, onCountryClick }) {
    const handleClick = (e) => {
        e.preventDefault();
        onCountryClick(countryCode);
    };

    return (
        <div className="col pt-3 pb-3 country hover-light" onClick={handleClick}>
            <a href="/" target="_blank" rel="noopener noreferrer">
                {countryName} ({countryCode})
            </a>
        </div>
    );
}
