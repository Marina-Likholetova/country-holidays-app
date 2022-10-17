import React from "react";
import CountryHolidayCard from "./CountryHolidayCard";
import {IoArrowBack} from "react-icons/io5";



export default function CountryHolidayList({ countryHolidays, resetStates }) {
    return (
        <>
            <div className="p-3 pt-0">
                <button className="btn btn-back shadow hover-light" onClick={resetStates}>
                    <IoArrowBack /> Back
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th className="md-display">Local Name</th>
                        <th>Name</th>
                    </tr>
                </thead>
                {countryHolidays.map((holiday, i) => (
                    <CountryHolidayCard
                        holidayLocalName={holiday.localName}
                        holidayName={holiday.name}
                        holidayDate={holiday.date}
                        key={i}
                    />
                ))}
            </table>
        </>
    );
}
