import React from "react";
import { IoSearch } from "react-icons/io5";



export default function Input({ inputData, onChangeInput }) {
  
    return (
        <div className="search-box input-group mt-3 mb-3 shadow p-3 rounded">
            <span className="input-group-text hover-light">
                <IoSearch />
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Search for a country..."
                value={inputData}
                onChange={onChangeInput}
            />
        </div>
    );
}
