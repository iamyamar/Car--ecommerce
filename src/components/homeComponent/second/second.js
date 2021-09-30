import React from "react";
import "./second.scss";
import Secondone from "../../../assets/Images/secondone.jpg";
import Secondtwo from "../../../assets/Images/secondtwo.jpg";
import Secondthree from "../../../assets/Images/secondthree.jpg";

const Second = () => {
  return (
    <div className="maincont">
      <div className="cardscont row">
        <div className="col-md-4">
          <div className="card carddes">
            <img
              class="card-img-top"
              src={Secondone}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-img-overlay">
              <div className="texttcont">
                <span className="textone">NEW COLLECTION</span>
                <span className="texttwo">NEW TRENDING 2021 - 2022</span>
                <span className="textthree">SALE UPTO 20% OFF</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card carddes">
            <img
              class="card-img-top"
              src={Secondtwo}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-img-overlay">
              <div className="texttcont">
                <span className="textone">NEW COLLECTION</span>
                <span className="texttwo">NEW TRENDING 2021 - 2022</span>
                <span className="textthree">SALE UPTO 20% OFF</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card carddes">
            <img
              class="card-img-top"
              src={Secondthree}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-img-overlay">
              <div className="texttcont">
                <span className="textone">NEW COLLECTION</span>
                <span className="texttwo">NEW TRENDING 2021 - 2022</span>
                <span className="textthree">SALE UPTO 20% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
