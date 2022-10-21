import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";


import Layout from "./Layout";
import About from "./components/About";
import CountriesRoutes from "./CountriesRoutes";
import NotFound from "./components/NotFound";
import Countries from "./components/Countries";


function App() {

 
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Countries />} />
                    <Route path="about" element={<About />} />
                    <Route path="countries/*" element={<CountriesRoutes />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
