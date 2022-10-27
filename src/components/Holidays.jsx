import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api_get_holidays } from "../data/api.js";
import { IoArrowBack } from "react-icons/io5";
import useApi from "marinafetchreacthook";

export default function Holidays() {
    const { countryCode } = useParams();
    const navigate = useNavigate();
    const { isLoading, isError, data } = useApi(api_get_holidays + countryCode);


    return (
        <>
            <div className="pt-3">
                <button
                    className="btn btn-back shadow hover-light"
                    onClick={() => navigate(-1)}>
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
                <tbody>
                    {data &&
                        data.map((holiday, i) => (
                            <tr key={i} className="hover-light">
                                <td>{new Date(holiday.date).toLocaleDateString()}</td>
                                <td className="md-display">{holiday.localName}</td>
                                <td>
                                    <strong className="sm-display">{holiday.localName}</strong>
                                    {holiday.name}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {isLoading && <div className="lds-ripple"><div></div><div></div></div>}
            {isError && <div>Error...</div>}
        </>
    );
}
