import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import About_Courses from '../../components/About_Courses/About_Courses'
import Comments from '../../components/Comments/Comments'
import HomeNews from '../../components/HomeNews/HomeNews'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import girl from "../../assets/img/Landing/girl.png"
import datas from "../../assets/img/Landing/datas.png"
import everything_video from '../../assets/img/Landing/everything_video.jpg'
import antina from '../../assets/img/Landing/antina.svg'
import apps_img from '../../assets/img/Landing/apps.jpg'
import notes from '../../assets/img/Landing/notes.jpg'
import users from '../../assets/img/Landing/users.jpg'
import tools_img from '../../assets/img/Landing/tools_img.png'
import class_menagement from '../../assets/img/Landing/class_menagement.png'
import assestments from '../../assets/img/Landing/assestments.png'
import one_on_one from '../../assets/img/Landing/one_on_one.png'
import {HomeCardsData} from '../../lib/HomeCardsData'

function Home() {
  document.title = "Home"
  return (
    <div className='home_page'>
      <Header />

      <div className="intro">
        <div className="intro_left">
          <h1><span>Studying</span> Online is now much easier</h1>
          <h3>TOTC is an interesting platform that will teach you in more an interactive way</h3>
          <div className='intro_btns'>
            <button className='join_for_free'>Join for free</button>
            <button className='watch_how_it_works'><i className='bi bi-play-fill'></i> Watch how it works</button>
          </div>
        </div>
        <div className="intro_right">
          <img src={girl} className='thinking_girl' alt="" />
          <img src={datas} className='thinking_datas' alt="" />
        </div>
      </div>


      <div className="our_success">
        <h1>Our success</h1>
        <h3>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </h3>
        <div className='success'>
          <div className="succes">
            <p className='succes_number'>15K+</p>
            <p className='succes_name'>Students</p>
          </div>
          <div className="succes">
            <p className='succes_number'>75%</p>
            <p className='succes_name'>Total success</p>
          </div>
          <div className="succes">
            <p className='succes_number'>35</p>
            <p className='succes_name'>Main questions</p>
          </div>
          <div className="succes">
            <p className='succes_number'>26</p>
            <p className='succes_name'>Chief experts</p>
          </div>
          <div className="succes">
            <p className='succes_number'>16</p>
            <p className='succes_name'>Years of experience</p>
          </div>
        </div>
      </div>
      <div className="software title">
        <h1 className='title_comp'>All-In-One <span>Cloud Software.</span></h1>
        <h3 className='coment_comp'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</h3>
        <div className="software_datas">
          <div className="software_data">
            <i className="bi bi-file-earmark-richtext software_icons"></i>
            <h3>Online Billing, Invoicing, & Contracts</h3>
            <h4>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</h4>
          </div>
          <div className="software_data">
            <i className="bi bi-calendar3 software_icons"></i>
            <h3>Easy Scheduling & Attendance Tracking</h3>
            <h4>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</h4>
          </div>
          <div className="software_data">
            <i className='bi bi-people software_icons'></i>
            <h3>Customer Tracking</h3>
            <h4>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </h4>
          </div>
        </div>
      </div>
      <div className="what_is_totc title">
        <h1 className='title_comp'>What is <span>TOTC?</span></h1>
        <h3 className='coment_comp'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</h3>
        <div className="courses">
          <div className='start center'>
            <h1>FOR INSTRUCTORS</h1>
            <button>Start a class today</button>
          </div>
          <div className='enter center'>
            <h1>FOR STUDENTS</h1>
            <button>Enter access code</button>
          </div>
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
      <div className="our_futures">
        <div className='title'>
          <h1 className='title_comp'>Our <span>Features</span></h1>
          <h1 className='coment_comp'>This very extraordinary feature, can make learning activities more efficient</h1>
        </div>
        <div className="a_user_interface">
          <div className="ellipsex140"></div>
          <div className="ellipsex30"></div>
          <div className="ellipsex260"></div>
          <div className="ellipsex30f5"></div>

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

          <div className="right">
            <h1 className='title_interface'>A <span>user interface</span> designed for the classroom</h1>
            <div className="interface_data">
              <div className="img_hover">
                <img src={apps_img} className='interface_data_img' alt="" />
              </div>
              <h3>Teachers don’t get lost in the grid view and have a dedicated Podium space.</h3>
            </div>
            <div className="interface_data">
              <div className="img_hover">
                <img src={notes} className='interface_data_img' alt="" />
              </div>
              <h3>TA’s and presenters can be moved to the front of the class.</h3>
            </div>
            <div className="interface_data">
              <div className="img_hover">
                <img src={users} className='interface_data_img' alt="" />
              </div>
              <h3>Teachers can easily see all students and class data at one time.</h3>
            </div>
          </div>
        </div>
        <div className="tools_for_teachers">
          <div className="left">
            <h1 className="title_interface"><span>Tools</span> For Teachers And Learners</h1>
            <h4 className='coment_comp'>Class has a dynamic set of teaching tools built to be deployed and used during class.
              Teachers can handout assignments in real-time for students to complete and submit.</h4>
          </div>
          <img src={tools_img} alt="" />
        </div>
        <div className="tools_for_teachers">
          <img src={assestments} alt="" />
          <div className="left">
            <h1 className="title_interface">Assessments, <span>Quizzes</span>, Tests</h1>
            <h4 className='coment_comp'>Easily launch live assignments, quizzes, and tests.
              Student results are automatically entered in the online gradebook.</h4>
          </div>
        </div>
        <div className="tools_for_teachers">
          <div className="left">
            <h1 className="title_interface"><span>Class Management</span> Tools for Educators</h1>
            <h4 className='coment_comp'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</h4>
          </div>
          <img src={class_menagement} alt="" />
        </div>
        <div className="tools_for_teachers">
          <img src={one_on_one} alt="" />
          <div className="left">
            <h1 className="title_interface">One-on-One <span>Discussions</span></h1>
            <h4 className='coment_comp'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</h4>
          </div>
        </div>
        <button className='see_more_features'>See more features</button>
      </div>

      <div className="explore_course">
        <div>
          <h1>Explore Course</h1>
          <h4>Ut sed eros finibus, placerat orci id, dapibus.</h4>
        </div>
          <About_Courses datas={{
            title: "Lorem ipsum",
            icon: "bi bi-palette ",
            cards: HomeCardsData,
            active: 7
          }} />
          <About_Courses datas={{
            title: "Quisque a Consequat",
            icon: "bi bi-globe ",
            cards: HomeCardsData,
            active: 4
          }} />
          <About_Courses datas={{
            title: "Aenean Facilisis",
            icon: "bi bi-award ",
            cards: HomeCardsData,
            active: 1
          }} />
      </div>
      <div className="what_they_say">
        <div className="testimonial_hover">
          <h3>TESTIMONIAL</h3>
          <h1>What They Say?</h1>
          <p>TOTC has got more than 100k positive ratings from our users around the world.</p>
          <p>Some of the students and teachers were greatly helped by the Skilline.</p>
          <p>Are you too? Please give your assessment</p>
          <div className='inp_hover'>
            <input type="text"  />
            <button><i className='bi bi-arrow-right'></i></button>
          </div>
        </div>
        <Comments/>
      </div>
        <HomeNews/>
      <Footer />
    </div>
  )
}

export default Home