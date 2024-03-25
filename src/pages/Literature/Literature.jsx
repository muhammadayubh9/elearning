import React from 'react'
import './Literature.scss'
import Header from '../../components/Header/Header'
import Header_Logined from '../../components/Header/Header_logined'
import Footer from '../../components/Footer/Footer'
import userIMg from '../../assets/img/Users/user2.png'
import { Creators } from '../../lib/Creators'
import BooksSlider from "../../components/BooksSlider/BooksSlider"

function Literature() {
  document.title = "Literature"
  return (
    <div className='literature_page'>
      <Header_Logined />
      <div className="literature_header_hover">
        <div className="literature_header">
          <img src={userIMg} alt="" className="header_img" />
          <div className="header_right">
            <div className="jcsb space_betwen">
              <h2>John Anderson</h2>
              <button>Enroll Now</button>
            </div>
            <p>Assistant Professor at Mcmaster University</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud</span>
            <div className="jcsb">
              <div className='gap5'>
                <i className='bi bi-star'></i>
                4.9 instructor Rating
              </div>
              <div className="gap5">
                <i className='bi bi-eye'></i>
                1,592 Students
              </div>
              <div className="gap5">
                <i className='bi bi-play'></i>
                Courses
              </div>
              <div className="social_icons">
                <i className='bi bi-twitter'></i>
                <i className='bi bi-youtube'></i>
                <i className='bi bi-instagram'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cat_btns_hover">
        <button>About</button>
        <button>Course</button>
        <button>Notes</button>
        <button>Project</button>
        <button>Podcast</button>
        <button className='active'>Book</button>
        <button>Review</button>
      </div>

            
        <BooksSlider />
      <Footer />
    </div>
  )
}

export default Literature