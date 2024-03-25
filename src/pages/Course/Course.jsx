import React, { useRef, useState } from 'react'
import './Course.scss'
import Header_Logined from '../../components/Header/Header_logined'
import Footer from '../../components/Footer/Footer'
import { all_courses, lessonCatigories, lessons } from '../../lib/CoursePageDatas'

import user_img from "../../assets/img/Users/user2.png"
import AllCourses from '../../components/AllCourses/AllCourses'
import Swiper from 'swiper'
import CoursesSlider from '../../components/CoursesSlider/CoursesSlider'

function Course() {
  document.title = "Courses"
  const swiperRef = useRef(null);
  React.useEffect(() => {
      swiperRef.current = new Swiper('.swiper-container', {
          navigation: true
      });
  }, []);
  var kere = [0, 0, 0]
  const [active, setActive] = useState(0)
  const handleSlide = (number) => {
      if (swiperRef.current) {
          swiperRef.current.slideTo(number);
          if(number >= 0 && number < kere.length)
          setActive(number)
      }
  }
  return (
    <div className="course_page">
      <Header_Logined />
      <div className="buyed_lessons_hover p0">
        <div className="jcsb p120">
          <h1>Literature course</h1>
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              kere.map((item, index) => (
                <div className="swiper-slide">
                  <div className="buyed_lessons">
                    {
                      lessons.map((item, index) => (

                        <div className="buyed_lesson" key={index}>
                          <img className='lesson_img' src={item.img} alt="" />
                          <h4>{item.title}</h4>
                          <div className="user">
                            <img src={user_img} alt="" />
                            <h5>Lina</h5>
                          </div>
                          <span><div style={{ width: item.read_lessons / (item.all_lessons / 100) + "%" }}></div></span>
                          <p>Lesson {item.read_lessons} of {item.all_lessons}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="pagination_btns p120">
          <button style={{ backgroundColor: "rgba(73, 187, 189, 0.6)" }}><i className='bi bi-chevron-left'></i></button>
          <button><i className='bi bi-chevron-right'></i></button>
        </div>
      </div>

      <div className="buyed_lessons_hover white">
        <h1>Choice favourite course from top category</h1>
        <div className="lesson_catigories">
          {
            lessonCatigories.map((item, index) => (
              <div className="lesson_catigory" key={index}>
                <div className="cat_img_hover" style={{ backgroundColor: item.background }}>
                  <img src={item.img} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
              </div>

            ))
          }
        </div>
      </div>
      <CoursesSlider />


      <div className="buyed_lessons_hover white">
        <div className="jcsb">
          <h1>Get choice of your course</h1>
          <a href="#" className='see_all'>See all</a>
        </div>
        <AllCourses data={{ courses: all_courses, is_white: true }} />
        <div className="remote_learning_hover">
          <h2>Online coaching lessons for remote learning.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className='start_learing_btn'>Start learning now</button>
        </div>
      </div>

      <div className="buyed_lessons_hover white">
        <div className="jcsb">
          <h1>The course in personal development</h1>
          <a href="#" className='see_all'>See all</a>
        </div>
        <AllCourses data={{ courses: all_courses, is_white: true }} />
      </div>

      <div className="buyed_lessons_hover">
        <div className="jcsb">
          <h1>Student are viewing</h1>
          <a href="#" className='see_all'>See all</a>
        </div>
        <AllCourses data={{ courses: all_courses, is_white: false }} />
      </div>
      <Footer />
    </div>
  )
}

export default Course