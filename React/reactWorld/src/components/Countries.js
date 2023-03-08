import React, {useEffect, useState} from 'react';
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState([])
 
    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        return () => {
            axios
                .get("https://restcountries.com/v3.1/all")
                .then((res) => setData(res.data));
        };
    }, []);
    
    
    return (
        <div>
            <h1 className="countries">COUNTRIES</h1>
        </div>
    );
};

export default Countries;