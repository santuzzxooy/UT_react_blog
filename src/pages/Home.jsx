import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Content from "../components/Content";

const Home = () => {
    const [datos, setDatos] = useState([]);
    const url = "https://api.jsonbin.io/v3/b/67d37b128a456b7966755b7b";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Datos recibidos:", data);
                setDatos(data.record);
            })
            .catch((error) => console.error("Error al obtener los datos:", error));
    }, []);

    return (
        <div>
            <Header />
            {datos.map((dato) => (
                <Content key={dato.id} {...dato} />
            ))}
        </div>
    );
};

export default Home