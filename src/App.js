import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { api_get_countries } from "./data/api.js";
import CountryContainer from "./components/CountryContainer";


function App() {
    const [countries, setCountries] = useState("");

    useEffect(() => {
        fetch(api_get_countries)
            .then((data) => data.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((err) => console.log(err.message));
    }, []);

  
  return (
    <div className="App">
      {countries && <CountryContainer countries={countries}/>}
    </div>
  )
}


export default App;
