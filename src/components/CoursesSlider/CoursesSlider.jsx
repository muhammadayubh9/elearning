import React, { useRef, useState } from 'react'
import Swiper from 'swiper';
import { all_courses } from '../../lib/CoursePageDatas';
import AllCourses from '../AllCourses/AllCourses';

function CoursesSlider() {
    const swiperRef = useRef(null);
    React.useEffect(() => {
        swiperRef.current = new Swiper('.mySwiper', {
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
      
    <div className="buyed_lessons_hover p0">
      <div className="jcsb p120">
        <h1>Literature course</h1>
      </div>
      <div className="mySwiper">
        <div className="swiper-wrapper">
          {
            kere.map((item, index) => (
              <div className="swiper-slide">
                <AllCourses data={{ courses: all_courses, is_white: false }} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="pagination_btns p120">
        <button onClick={()=> handleSlide(active - 1)} style={{ backgroundColor: active == 0 ? "rgba(73, 187, 189, 0.6)" :"" }}><i className='bi bi-chevron-left'></i></button>
        <button onClick={()=> handleSlide(active + 1)} style={{ backgroundColor: active == kere.length - 1 ? "rgba(73, 187, 189, 0.6)" :"" }}><i className='bi bi-chevron-right'></i></button>
      </div>
    </div>
  )
}

export default CoursesSlider