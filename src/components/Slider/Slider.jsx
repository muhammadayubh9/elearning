import React, { useRef, useState } from 'react';
import Swiper from 'swiper';
import { Related } from '../../lib/Related';
import './Slider.css'
import GirlLogo from '../../assets/img/Landing/girl.png'
import { Creators } from '../../lib/Creators';
import {Link} from "react-router-dom"

function BlogSlider() {
  const swiperRef = useRef(null);
  React.useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      navigation: true
    });
  }, []);

  // Function to handle custom button click
  const [active, setActive] = useState(0)
  var kere = [0, 0, 0, 0]

  const handeNext = () => {
    if (swiperRef.current) {
      if (active < kere.length - 1) {
        swiperRef.current.slideTo(active + 1);
        setActive(active + 1)
      }
    }
  };
  const handePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      if (active > 0) {
        swiperRef.current.slideTo(active - 1);
        setActive(active - 1)
      }
    };
  }

  return (
    <div className="Blogswiper">
      <div className="jcsb">
        <h1>Related Blog </h1>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            kere.map((item, index) => (
              <div className="swiper-slide BlogSlider">
                <ul className='related__list'>
                  {
                    Related && Related.map((item, index) => (
                      <li key={index} className='related__item'>
                        <div className="related__blog">
                          <img src={item.img} />
                          <h4>{item.info}</h4>
                          <img className='related__logo' src={GirlLogo} alt="" /><h6 className='related__name'>{item.name}</h6>
                          <p>{item.text}</p>
                          <div className="related__position">
                            <Link to="blog-detail">Read more</Link><span><i className="bi bi-eye-fill"></i>251,232</span>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className="pagination_btns p120">
        <button onClick={handePrev} style={{ backgroundColor: active == 0 ? "rgba(73, 187, 189, 0.6)" : "" }}><i className='bi bi-chevron-left'></i></button>
        <button onClick={handeNext} style={{ backgroundColor: active == kere.length - 1 ? "rgba(73, 187, 189, 0.6)" : "" }}><i className='bi bi-chevron-right'></i></button>
      </div>
    </div>
  );
}

export default BlogSlider;