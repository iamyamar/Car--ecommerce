import React from "react";
import "./first.scss";
import Tyres from "../../../assets/Images/tyres.png";

import Sign from "../../../assets/Images/sign.png";

const first = () => {
  return (
    <div className="main">
      <div className="titlef">
        <h2 className="backhead">HISTORY</h2>
        <h3 className="fronthead">
          WELCOME TO
          <strong>AERO CAR STORE</strong>
        </h3>
      </div>
      <div className="bodyf row">
        <div className="imgcont col-md-6 col-sm-12">
          <img src={Tyres} alt="tyre" className="imagef" />
        </div>
        <div className="textcont col-md-6 col-sm-12">
          <h3 className="texthead">
            <span className="word1">MEET OUR</span>
            <span className="word2">CAR CLUB SINCE 1892</span>
            <span className="word3">CUSTOME AND CLUB</span>
          </h3>
          <p className="firstp">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram, anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima.
          </p>
          <p className="second">
            Eodem modo typi, qui nunc nobis videntur parum clari, fiant
            sollemnes in futurum.
          </p>
          <div className="author">
            <h4 className="name">JOHN DOE - CEO AERO</h4>
            <img src={Sign} alt="sign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default first;
