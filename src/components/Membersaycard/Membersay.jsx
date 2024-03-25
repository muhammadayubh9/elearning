import React from "react";
import "./Membersay.scss";
import Membercard from "../../assets/img/Membership/Membercard.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Membersay() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  var membersData = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
      <Carousel responsive={responsive} className="member_card_hover">
        {
          membersData.map(item => (
            <div className="members_card" key={item}>
              <img src={Membercard} alt="" />
              <h2>Bulkin Simons</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmod
              </p>
            </div>
          ))
        }

      </Carousel>
    </div>
  );
}

export default Membersay;
