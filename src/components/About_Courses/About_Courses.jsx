import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './About_Courses.scss'
import moon from "../../assets/img/Landing/moon.jpg"
import star from "../../assets/img/Landing/star.png"

function get3words(words) {
    var all_words = words.split(" ")
    var returndata = ""
    if (all_words.length > 3) {
        for (let i = 0; i < 3; i++) {
            const element = all_words[i];
            returndata += " " + element
        }
        returndata += "..."
        return returndata
    } else {
        return words
    }
}

function About_Courses(datas) {
    var { title, icon, cards, active } = datas.datas
    const [act, setAct] = useState(active)
    return (
        <div className="about_courses_hover">
            <div className="see_all_hover">
                <h4><i className={icon}></i> {title}.</h4>
                <Link to="#">See all <i className='bi bi-arrow-right'></i></Link>
            </div>
            <div className="about_courses">
                {
                    cards.map((item, index) =>
                    (
                        act != index ? <div className="about_course" onClick={()=> setAct(index)}>
                            <div className="course_hover" style={{ backgroundColor: item.background }}>
                                <h4>{get3words(item.name)}</h4>
                            </div>
                        </div> : <div className="about_course active" style={{border: `3px solid ${item.background}`}}>
                            <img src={moon} className='course_img' alt="" />
                            <div className='course_right'>
                                <h3 className="course_title">{item.name}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste rerum deserunt ullam?</p>
                                <div className="rate_price">
                                    <div className="rate">
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                    </div>
                                    <h3 className="price">{item.price}</h3>
                                </div>
                                <button className='explore_btn'>explore</button>
                            </div>
                        </div> 
                        )
                    )
                }
                <div className="bottom"></div>
            </div>
        </div>

    )
}

export default About_Courses