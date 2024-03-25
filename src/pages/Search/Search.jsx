import React from 'react'
import './Search.scss'
import '../Course/Course.scss'
import Header_Logined from '../../components/Header/Header_logined'
import Footer from '../../components/Footer/Footer'
import { Searched_courses, all_courses } from '../../lib/CoursePageDatas'
import AllCourses from '../../components/AllCourses/AllCourses'
import antina from '../../assets/img/Landing/antina.svg'
import TopEducation from '../../components/TopEducation/TopEducation'
import { lessons } from '../../lib/CoursePageDatas'
import { Creators, CreatorsFour } from '../../lib/Creators'
import comment_student from '../../assets/img/comment_student.png'

function Search() {
    document.title = "Search"
    return (
        <div className='search_page'>
            <Header_Logined />
            <div className="search_bar">
                <div className="inp_hover">
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div className="types_hover">
                    <div><p>Subject</p> <i className='bi bi-chevron-down'></i></div>
                    <div><p>Partner</p> <i className='bi bi-chevron-down'></i></div>
                    <div><p>Program</p> <i className='bi bi-chevron-down'></i></div>
                    <div><p>Language</p> <i className='bi bi-chevron-down'></i></div>
                    <div><p>Abaliability</p> <i className='bi bi-chevron-down'></i></div>
                    <div><p>Learning Type</p> <i className='bi bi-chevron-down'></i></div>
                </div>
            </div>


            <div className="buyed_lessons_hover white">
                <div className="jcsb">
                    <h1>The course in personal development</h1>
                    <a href="#" className='see_all'>See all</a>
                </div>
                <AllCourses data={{ courses: Searched_courses, is_white: true }} />
            </div>

            <div className="know_about">
                <div className="right">
                    <h1>Know about learning learning platform</h1>
                    <div className='abouts'><span></span> <p>Free E-book, video & consolation</p></div>
                    <div className='abouts'><span></span> <p>Top instructors from around world</p></div>
                    <div className='abouts'><span></span> <p>Top courses from your team</p></div>
                    <button className='start_learing_btn'>Start learning now</button>
                </div>


                <div className="left">
                    <div className="mac_app">

                        <div className="call_user1">
                            <div className="call_user_image">
                                <div className="call_user_datas">
                                    <img src={antina} alt="" />
                                    <p>Eveny Howard</p>
                                </div>
                            </div>
                            <div className="present_or_call">
                                <button className='present'>Present</button>
                                <button className='call'><i className='bi bi-telephone'></i> Call</button>
                            </div>
                        </div>

                        <div className="call_user2_user3">
                            <div className="user2_3">
                                <div className="call_user_datas">
                                    <img src={antina} alt="" />
                                    <p>Tamara Clarke</p>
                                </div>
                            </div>
                            <div className="user2_3 user3">
                                <div className="call_user_datas">
                                    <img src={antina} alt="" />
                                    <p>Humbert Holland</p>
                                </div>
                            </div>
                        </div>

                        <div className="call_user2_user3 user4_5">
                            <div className="user2_3 user4">
                                <div className="call_user_datas">
                                    <img src={antina} alt="" />
                                    <p>Tamara Clarke</p>
                                </div>
                            </div>
                            <div className="user2_3 user5">
                                <div className="call_user_datas">
                                    <img src={antina} alt="" />
                                    <p>Humbert Holland</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="buyed_lessons_hover white">
                <div className="jcsb">
                    <h1>Classes tought by real creators</h1>
                    <a href="#" className='see_all'>See all</a>
                </div>
                <div className="creators_hover">
                    {
                        Creators.map((item, index) => (
                            <div className="creator">
                                <img className='creator_img' src={item.img} alt="" />
                                <div className="creator_datas">
                                    <h3>{item.name}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="buyed_lessons_hover">
                <div className="jcsb">
                    <h1>Classes tought by real creators</h1>
                    <a href="#" className='see_all'>See all</a>
                </div>
                <div className="coment_of_student">
                    <img src={comment_student} className='comment_student' alt="" />
                    <div className="comment_student_data">
                        <h2>Savannah Nguyen</h2>
                        <h3>tanya.hill@example.com</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                        </p>
                        <div className="social_icons">
                            <i className='bi bi-twitter'></i>
                            <i className='bi bi-facebook'></i>
                            <i className='bi bi-instagram'></i>
                        </div>
                    </div>
                    <div className="addition_user_img">
                        {
                            CreatorsFour.map((item, index) => (
                                <img src={item.img} alt="" />
                            ))
                        }
                    </div>
                </div>
            </div>
            <TopEducation data={{ lessons }} />
            <Footer />
        </div>
    )
}

export default Search