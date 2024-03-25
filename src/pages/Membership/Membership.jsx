import React from "react";
import "./Membership.scss";
import Footer from "../../components/Footer/Footer";
import iconmember1 from "../../assets/img/Membership/Icon Acrylic (2).png";
import iconmember2 from "../../assets/img/Membership/Icon Acrylic (1).png";
import iconmember3 from "../../assets/img/Membership/Icon Acrylic (2).png";
import "react-multi-carousel/lib/styles.css";
import icon11 from "../../assets/img/Membership/.png";
import icon12 from "../../assets/img/Membership/.png";

import Membersay from "../../components/Membersaycard/Membersay";
import Memberinfo from "../../components/Memberinfo__card/Memberinfo";
import Header_Logined from "../../components/Header/Header_logined";
import AboutLearning from "../../components/AboutLearning/AboutLearning";
import herocardimg2 from "../../assets/img/Membership/Corporate (1).png"
import herocard1 from "../../assets/img/Membership/Individual (1).png"
import {Link} from "react-router-dom"



function Membership() {
  document.title = "MemberShip"
  return (
    <div>
      <Header_Logined />
      <div className="member__hero">
        <h2>Affordable pricing</h2>
        <div className="membering_cards_hover">
          <div className="membering_card">
            <p className="membering_type">Like a pussy</p>
            <h3 className="membering_title">
            Free <span>/forever</span>
            </h3>
            <div className="types_hover">
              <div className="types">
                <img src={iconmember1} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember1} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember1} alt="" />
                <text>Components-driven system</text>
              </div>

            </div>
            <Link to="/checkout">Try for free </Link>
          </div>

          <div className="membering_card">
            <p className="membering_type">
            <img src={herocard1} alt="" />
             <a href="#" className="best">best!</a>
            </p>
            <h3 className="membering_title">
              $24 <span>/ month</span>
            </h3>
            <div className="types_hover">
              <div className="types">
                <img src={iconmember2} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember2} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember2} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember2} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember2} alt="" />
                <text>Components-driven system</text>
              </div>

            </div>
            <Link to="checkout" className="active">Regular license</Link>
          </div>

          <div className="membering_card">
            <p className="membering_type" >
            <img src={herocardimg2} alt="" />
            </p>
            <h3 className="membering_title">
              $12 <span>/ editor</span>
            </h3>
            <div className="types_hover">
              <div className="types">
                <img src={iconmember3} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember3} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember3} alt="" />
                <text>Components-driven system</text>
              </div>
              <div className="types">
                <img src={iconmember3} alt="" />
                <text>Components-driven system</text>
              </div>

            </div>
            <Link to="checkout">Try for free </Link>
          </div>
        </div>
      </div>

      <div className="buyed_lessons_hover white">
        <div className="jcsb">
          <h1>Get choice of your course</h1>
          <a href="#" className='see_all'>See all</a>
        </div>
        <div className="remote_learning_hover">
          <h2>Online coaching lessons for remote learning.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className='start_learing_btn'>Start learning now</button>
        </div>
      </div>


      <div className="learing_about">
        <h2>Online coaching lessons for remote learning</h2>
        <AboutLearning />
      </div>

      <div className="members_hover">
        <h2 className="title__mc">What our students have to say</h2>
        <Membersay />
      </div>

      <div className="member__download container ">
        <h2>APP is available for free</h2>

        <span>
          <a href="">
            <img src={icon11} alt="" />

            <p>Android APP</p>
          </a>

          <a href="#" className="button2__mc">
            <img src={icon12} alt="" />
            <p>IOS APP</p>
          </a>
        </span>
      </div>

      <Memberinfo />

      <Footer />
    </div>
  );
}

export default Membership;
