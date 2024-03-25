import React from 'react'
import logo from '../../assets/img/Logo.svg'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  var path = useLocation().pathname
  return (
    <div className={path == "/" ? "nav" : "nav no_bg"}>
      <Link href="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="nav__list">
        <li className="nav__item"><Link className="header_links" to="/">Home</Link></li>
        <li className="nav__item"><Link className="header_links" to="/courses">Courses</Link></li>
        <li className="nav__item"><Link className="header_links" to="/careers">Careers</Link></li>
        <li className="nav__item"><Link className="header_links" to="/blog">Blog</Link></li>
        <li className="nav__item"><Link className="header_links" to="/about">About Us</Link></li>
        <li className="nav__item"><Link className='log__in' to="/login">Log in</Link></li>
        <li className="nav__item"><Link className='sign__up'to="/register">Sign up</Link></li>
      </ul>
    </div>
  )
}

export default Header
