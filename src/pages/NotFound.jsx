import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div>
            <h1>Erroor</h1>
            <Link to={"/"}>
                <button>Volver</button>
            </Link>
        </div>
    )
}

export default NotFound