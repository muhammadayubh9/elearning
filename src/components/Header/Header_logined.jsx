import React from 'react'
import logo from '../../assets/img/LogoDark.svg'
import './Header.css'
import user_img from '../../assets/img/Users/user1.jpg'
import { Link } from 'react-router-dom'

function Header_Logined() {
  return (
    <div className="nav nav_logined">
      <Link href="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="nav__list">
        <li className="nav__item"><Link className="header_links" to="/">Home</Link></li>
        <li className="nav__item"><Link className="header_links" to="/courses">Courses</Link></li>
        <li className="nav__item"><Link className="header_links" to="/careers">Careers</Link></li>
        <li className="nav__item"><Link className="header_links" to="/blog">Blog</Link></li>
        <li className="nav__item"><Link className="header_links" to="/about">About Us</Link></li>
        <li className="nav__item user_profile_button">
            <img src={user_img} alt="" />
            <h4>Line</h4>
            <i className='bi bi-chevron-down'></i>
        </li>
      </ul>
    </div>
  )
}

export default Header_Logined