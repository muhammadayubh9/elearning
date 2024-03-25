import React from 'react'
import './Footer.css'
import logo from '../../assets/img/Logo.svg'

function Footer() {
  return (
    <footer>
        <div className="top">
            <img src={logo} alt="" />
            <hr />
            <h1>Virtual Class <br /> for Zoom</h1>
        </div>
        <div className="middle">
            <h1>Subscribe to get our Newsletter <br /></h1>
            <div>
                <input type="text" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className="bottom">
            <div className='p'><a href="#" className='footer_links'>Careers</a> <hr /> <a href="#" className='footer_links'>Privacy Policy</a> <hr /> <a href="#" className='footer_links'>Terms & Conditions</a></div>
           
            <p className='p'>© 2021 Class Technologies Inc. </p>
        </div>
    </footer>
  )
}

export default Footer