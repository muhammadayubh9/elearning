import React from 'react'
import Header_Logined from '../../components/Header/Header_logined'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import everything_video from '../../assets/img/Landing/everything_video.jpg'
import TopEducation from '../../components/TopEducation/TopEducation'
import { all_courses, lessons } from '../../lib/CoursePageDatas'
import AllCourses from '../../components/AllCourses/AllCourses'
import './CourseDetail.scss'
import onLesson from '../../assets/img/onLesson.png'
import star from '../../assets/img/Landing/star.png'
import user_img from '../../assets/img/Landing/girl.png'
import time from '../../assets/img/Course/time.png'

import mbg from '../../assets/img/mbg.png'
import aoad from '../../assets/img/aoad.png'
import m32 from '../../assets/img/m32.png'
import coc from '../../assets/img/coc.png'

function CourseDetail() {
    document.title = "Course Detail"
    return (
        <div className="CourseDetail">
            <Header_Logined />
            <img src={onLesson} alt="" className='onLesson' />
            <div className="course_detail_hover">
                <div className="course_left">
                    <div className="left_top">
                        <button>Overview</button>
                        <button>Overview</button>
                        <button>Overview</button>
                        <button className='active'>Overview</button>
                    </div>
                    <div className="left_bottom">
                        <div className="corse_rate">
                            <div className="rate_words_hover">
                                <h2>4 out of 5</h2>
                                <div className="rate_img_hover">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <h4>Top Raiting</h4>
                            </div>
                            <div className="total_rates_hover">
                                <div className="total_rate">
                                    <p>5 Stars</p>
                                    <span><div></div></span>
                                </div>
                                <div className="total_rate">
                                    <p>4 Stars</p>
                                    <span><div></div></span>
                                </div>
                                <div className="total_rate">
                                    <p>3 Stars</p>
                                    <span><div></div></span>
                                </div>
                                <div className="total_rate">
                                    <p>2 Stars</p>
                                    <span><div></div></span>
                                </div>
                                <div className="total_rate">
                                    <p>1 Stars</p>
                                    <span><div></div></span>
                                </div>
                            </div>
                        </div>
                        <div className="course_comment_hover">
                            <div className="jcsb">
                                <div className="user_and_rate">
                                    <img className='rate_user_img' src={user_img} alt="" />
                                    <div className="username_and_rate">
                                        <h5>Line</h5>
                                        <div className="comment_rate">
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='diese'>
                                    <img src={time} alt="" />
                                    3 Month
                                </div>
                            </div>
                            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                        <div className="course_comment_hover">
                            <div className="jcsb">
                                <div className="user_and_rate">
                                    <img className='rate_user_img' src={user_img} alt="" />
                                    <div className="username_and_rate">
                                        <h5>Line</h5>
                                        <div className="comment_rate">
                                            <img src={star} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='diese'>
                                    <img src={time} alt="" />
                                    3 Month
                                </div>
                            </div>
                            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                    </div>
                </div>
                <div className="course_right_hover">
                    <div className="course_right">
                        <img src={onLesson} alt="" className='right_img' />
                        <div className="jcsb">
                            <h1>$49.65</h1>
                            <h3>$99.99</h3>
                            <h4>50% Off</h4>
                        </div>
                        <p className='time_to_off'>11 hour left at this price</p>
                        <Link className='buy_now_link' to="/checkout">Buy Now</Link>
                        <div className="this_course_included">
                            <h2>This Course included</h2>
                            <div className="icludes_hover">
                                <div className="include">
                                    <img src={mbg} alt="" />
                                    <p>Money Back Guarantee</p>
                                </div>
                                <div className="include">
                                    <img src={aoad} alt="" />
                                    <p>Access on all devices</p>
                                </div>
                                <div className="include">
                                    <img src={coc} alt="" />
                                    <p>Certification of completion</p>
                                </div>
                                <div className="include">
                                    <img src={m32} alt="" />
                                    <p>32 Moduls</p>
                                </div>
                            </div>
                        </div>
                        <div className="training">
                            <h2>Training 5 or more people</h2>
                            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        </div>
                        <div className="share_this_r">
                            <h2>Share this course</h2>
                            <div className="social_icons">
                                <Link to="#"><i className='bi bi-twitter'></i></Link>
                                <Link to="#"><i className='bi bi-facebook'></i></Link>
                                <Link to="#"><i className='bi bi-youtube'></i></Link>
                                <Link to="#"><i className='bi bi-instagram'></i></Link>
                                <Link to="#"><i className='bi bi-telegram'></i></Link>
                                <Link to="#"><i className='bi bi-whatsapp'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buyed_lessons_hover">
                <div className="jcsb">
                    <h1>Marketing Articles</h1>
                    <a href="#" className='see_all'>See all</a>
                </div>
                <AllCourses data={{ courses: all_courses, is_white: false }} />
                <div className="pagination_btns">
                    <button style={{ backgroundColor: "rgba(73, 187, 189, 0.6)" }}><i className='bi bi-chevron-left'></i></button>
                    <button><i className='bi bi-chevron-right'></i></button>
                </div>
            </div>

            <div className="everything_you_can_do">
                <div className="inner_hover">
                    <div className="x73x73"></div>
                    <div className="x138x138"></div>
                    <div className="x30x30"></div>
                    <div className="x231x231"></div>
                    <div className="inner">
                        <div className='inner_datas'>
                            <h2>Everything you can do in a physical classroom, <span>you can do with TOTC</span></h2>
                            <h4>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</h4>
                            <Link to="/">Learn more</Link>
                        </div>
                        <img src={everything_video} className='everything_video' alt="" />
                    </div>
                </div>
            </div>
            <TopEducation data={{ lessons, backgroundColor: "#FF0000" }} />
            <Footer />
        </div>
    )
}

export default CourseDetail