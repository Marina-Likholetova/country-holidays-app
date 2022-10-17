import React from "react";


export default function CountryHolidayCard({ holidayName, holidayDate, holidayLocalName }) {
    const localDate = new Date(holidayDate).toLocaleDateString();

    return (
        <tbody>
            <tr className="hover-light">
                <td>{localDate}</td>
                <td className="md-display">{holidayLocalName}</td>
                <td>
                    <strong className="sm-display">{holidayLocalName}</strong>
                    {holidayName}
                </td>
            </tr>
        </tbody>
    );
}

