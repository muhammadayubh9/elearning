import React from 'react'
import user_img from "../../assets/img/Users/user2.png"
import apps from "../../assets/img/Course/apps.png"
import time from "../../assets/img/Course/time.png"
import {Link} from "react-router-dom"

function CourseCard(data) {
    var {is_white, item, index} = data.data
    return (
        <Link to="/course-detail" className="all_course" style={{ boxShadow: is_white ? "0 0 15px #2F327D1A" : "" }} key={index}>
            <img className='all_course_img' src={item.img} alt="" />
            <div className="jcsb">
                <div className="l_r">
                    <img src={apps} alt="" />
                    <span>Design</span>
                </div>
                <div className="l_r">
                    <img src={time} alt="" />
                    <span>{item.disease} Month</span>
                </div>
            </div>
            <h2>AWS Certified solutions Architect</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className="jcsb">
                <div className="l_r">
                    <img className='writer_img' src={user_img} alt="" />
                    <h4>Line</h4>
                </div>
                <div className="l_r">
                    <p className='old_price'>{item.price}</p>
                    <p className='now_price'>{item.price / 100 * 80}</p>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard