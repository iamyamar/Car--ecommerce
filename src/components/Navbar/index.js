import React from "react";
import "./navbar.css";
import Logo from "../../assets/Images/logo.png";
import { Apps, Search, ShoppingBasket } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Carouse from "../Carousel/index";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <Carouse />

      <div className="headbox mb-0">
        <div className="headder mb-0">
          <span>
            <img src={Logo} alt="logo" className="mainlogo" />
          </span>
          <span className="linkss">
            <Link to="/" className="linkdom ">
              <a href="/" className="linkhead ">
                HOME
              </a>
            </Link>
            <Link to="/shop" className="linkdom">
              <a href="/" className="linkhead">
                SHOP
              </a>
            </Link>
            <Link to="/featured" className="linkdom">
              <a href="/" className="linkhead">
                FEATURED
              </a>
            </Link>
            <Link to="/layout" className="linkdom">
              <a href="/" className="linkhead">
                LAYOUTS
              </a>
            </Link>
            <Link to="/pages" className="linkdom">
              <a href="/" className="linkhead">
                PAGES
              </a>
            </Link>
          </span>
          <span className="iconmain">
            <div className="iconhead">
              <Search fontSize="medium" style={{ color: "white" }} />
            </div>
            <div className="iconhead">
              <Apps fontSize="medium" style={{ color: "white" }} />
            </div>
            <div className="iconhead">
              <Badge badgeContent={4} color="primary">
                <ShoppingBasket fontSize="medium" style={{ color: "white" }} />
              </Badge>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
