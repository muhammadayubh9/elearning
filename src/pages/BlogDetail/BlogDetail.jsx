import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header_Logined from '../../components/Header/Header_logined'
import onLesson from '../../assets/img/onLesson.png'
import Slider from '../../components/Slider/Slider'
import './BlogDetail.scss'
import girl from '../../assets/img/Landing/girl.png'

function BlogDetail() {
    document.title = "Blog Detail"
    return (
        <div className='BlogDetail'>
            <Header_Logined />
            <img src={onLesson} alt="" className='onLesson' />
            <div className="blog_hover">
                <h2>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <div className="hashtags_hover">
                    <div className="hashtag">
                        <h3>affordable</h3>
                    </div>
                    <div className="hashtag">
                        <h3>Stunning</h3>
                    </div>
                    <div className="hashtag">
                        <h3>making</h3>
                    </div>
                    <div className="hashtag">
                        <h3>madbrawns</h3>
                    </div>
                </div>
                <div className="jcsb">
                    <div className="blog_user">
                        <img src={girl} alt="" />
                        <div className="writenby">
                            <h6>writen by</h6>
                            <h4>Line</h4>
                        </div>
                    </div>
                    <button className='blog_user_follow'>Follow</button>
                </div>
            </div>
            <Slider />
            <Footer />
        </div>
    )
}

export default BlogDetail