import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div class="error">404</div>
            <br /><br />
            <span class="info">File not found</span>
            <Link to={"/UT_react_blog/"} className='enlace'>
                <Button variant="danger">Go Home</Button>
            </Link>
        </div>
    )
}

export default NotFound