import React from 'react'
import Header from '../components/Header';
import Content from '../components/Content';
import { useState, useEffect } from "react";
import blogData from "../data.json";

const Home = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        setDatos(blogData);
    }, []);

    return (
        <div>
            <Header />
            {datos.map((dato) => (
                <Content key={dato.id} {...dato} />
            ))}
        </div>
    )
}

export default Home