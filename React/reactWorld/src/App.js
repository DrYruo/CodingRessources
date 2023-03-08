import React from 'react';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/*path="*" permet de ramener vers une page spécifique si l'url ne correspond a rien*/}
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;