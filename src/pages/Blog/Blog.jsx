import React from 'react'
import './Blog.scss'
import bgTop from '../../assets/img/bgTop.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { blogData } from '../../lib/BlogList'
import { Related } from '../../lib/Related'
import Header_Logined from '../../components/Header/Header_logined'
import GirlLogo from '../../assets/img/Landing/girl.png'
import AllCourses from '../../components/AllCourses/AllCourses'
import { all_courses } from '../../lib/CoursePageDatas'
import Slider from '../../components/Slider/Slider'
function Blog() {
  document.title = "Blog"
  return (
    <div className='page__control'>
      <Header_Logined />
      <div className='info'>
        <div className="left">
          <h3 className='title'>By Themadbrains in <span>inspiration</span></h3>
          <h1 className='about'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
          <p className='info_all'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className='btn__add'>Start learning now</button>
        </div>
        <div className="right">
          <img className='top__img' src={bgTop} alt="" />
        </div>
      </div>

      <div className='blog__list'>
        <h1 className='blog__title'>Reading blog list</h1>
        <ul className='blogdatas'>
          {
            blogData && blogData.map((item, index) => (
              <li className='list__item' key={index}>
                <div className="blog__img">
                  <img src={item.img} alt="" />
                  <b>{item.title}</b>
                </div>
              </li>

            ))
          }
        </ul>

      </div>
   <Slider/>

      <div className="buyed_lessons_hover white">
        <div className="jcsb">
          <h1>Marketing Articles</h1>
          <a href="#" className='see_all'>See all</a>
        </div>
        <AllCourses data={{ courses: all_courses, is_white: true }} />
      </div>
      <Footer />
    </div>


  )
}

export default Blog