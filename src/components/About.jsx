import React from "react";


export default function About() {

    return (
        <article>
            <h1 className="about-title mt-3 mb-3">Hi, everyone!</h1>
            <p className="about-text shadow-sm p-4 mb-5 bg-light rounded">
                This project was created with <strong>React.js</strong> and external <strong>API</strong>
                which is called Nager.Date - public holidays for more than 90 countries. Just type a few
                letters of your country's name in the search line to see all National Holidays of desired
                country in 2022. <br />
                <strong> Keep Track Of Holidays Around The World! </strong>
            </p>
        </article>
    );
}
