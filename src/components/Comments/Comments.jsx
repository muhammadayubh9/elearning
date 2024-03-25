import './Comments.scss'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import women from "../../assets/img/Users/coment.png"
import star from "../../assets/img/Landing/star.png"
import { HomeCommentsData } from '../../lib/HomeCommentsData';

export default function Comments() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          HomeCommentsData.map((item,index) => (
            <SwiperSlide className='coment_hover'>
              <img src={women} className='comment_user_img' alt="" />
              <div className="coment">
                <h4>{item.comment}</h4>
                <div className="comment_user">
                  <h3>{item.user_name}</h3>
                  <div className="comment_rate">
                    <div className='rate_img_hover'>
                      {
                        item.rate.map(()=> <img src={star} alt="" /> )
                      }
                    </div>
                    <h5>{item.views} reviews at Yelp</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
