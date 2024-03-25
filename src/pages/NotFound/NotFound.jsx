import React from 'react'
import svg404 from '../../assets/img/N404.svg'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    document.title = "Page Not found"
    return (
        <div className='not_found'>
            <div className="d404">
                <img src={svg404} alt="404 Illustration" className="N404" />
                <h1>Oops! Page Not Found</h1>
                <p>The page you are looking for could not be found. Please check the URL or go back to the <Link to="/">homepage</Link>.</p>
            </div>
        </div>
    )
}

export default NotFound