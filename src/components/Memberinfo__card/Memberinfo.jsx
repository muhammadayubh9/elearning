import React from "react";
import './Memberinfo.scss'
import infoimg from "../../assets/img/Group 40.png";

function Memberinfo() {
  return (
    <div className="memberinfo" >
      <div className="memberinfo__card">
        <img src={infoimg} alt="" />
        <h2> Become a Teacher</h2>
        <p>
          Class, launched less than a year ago by Blackboard co-founder Michael
          Chasen, integrates exclusively...
        </p>
        <button> Apply a Teacher </button>
      </div>
      
      <div className="memberinfo__card">
        <img src={infoimg} alt="" />
        <h2> Become a Teacher</h2>
        <p>
          Class, launched less than a year ago by Blackboard co-founder Michael
          Chasen, integrates exclusively...
        </p>
        <button> Apply a Teacher </button>
      </div>
    </div>
  );
}

export default Memberinfo;
