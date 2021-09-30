import React from "react";
import "./footer.css";
import Bimage from "../../assets/Images/bimage.jpg";
import Payment from "../../assets/Images/payment.png";
import { Grid } from "@material-ui/core";
import Logo from "../../assets/Images/logo.png";
import {
  CallOutlined,
  EmailOutlined,
  Facebook,
  Instagram,
  KeyboardArrowDown,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${Bimage})` }} className="root">
      <div className="top-footer">
        <Grid container spacing={2}>
          <Grid className="firstb" id="box" item md={4} xs={12}>
            <img className="log" src={Logo} alt="logo" />
            <p className="paraf">
              We are a team of designers and developers who creates high quality
              premium Shopify themes.
            </p>
            <div className="footer-contact">
              <ol className="olfoot">
                <li className="address lif">
                  <span className="icon spanfoot">
                    <LocationOnOutlined
                      fontSize="small"
                      style={{ color: "red" }}
                    />
                  </span>
                  <span className="spanfoot">Address:</span>
                  <span className="spanfoot">
                    No 40 Baria Sreet 133/2, NewYork, USA.
                  </span>
                </li>
                <li className="phone lif">
                  <span className="icon spanfoot">
                    <CallOutlined fontSize="small" style={{ color: "red" }} />
                  </span>
                  <span className="spanfoot">Phone :</span>
                  <span className="spanfoot">(012) 800 456 789</span>
                </li>
                <li className="email lif">
                  <span className="icon spanfoot">
                    <EmailOutlined fontSize="small" style={{ color: "red" }} />
                  </span>
                  <span className="spanfoot">Email :</span>
                  <span className="spanfoot">support@masstechnologist</span>
                </li>
              </ol>
            </div>
          </Grid>
          <Grid className="secondb" id="box" item md={2} xs={12}>
            <h6 className="fl">
              MAIN MENU
              <KeyboardArrowDown className="drop" />
            </h6>
            <ul className="ulfoot">
              <li className="lif">
                <a href="#" className="linkf">
                  Home
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Shop
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Featured
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Layout
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Pages
                </a>
              </li>
            </ul>
          </Grid>
          <Grid className="thirdb" id="box" item md={2} xs={12}>
            <h6 className="fl">
              MAIN MENU
              <KeyboardArrowDown className="drop" />
            </h6>
            <ul className="ulfoot">
              <li className="lif">
                <a href="#" className="linkf">
                  Home
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Shop
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Featured
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Layout
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Pages
                </a>
              </li>
            </ul>
          </Grid>
          <Grid className="fourthb" id="box" item md={2} xs={12}>
            <h6 className="fl">
              MAIN MENU
              <KeyboardArrowDown className="drop" />
            </h6>
            <ul className="ulfoot">
              <li className="lif">
                <a href="#" className="linkf">
                  Home
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Shop
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Featured
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Layout
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Pages
                </a>
              </li>
            </ul>
          </Grid>
          <Grid className="fifthb" id="boxd" item md={2} xs={12}>
            <h6 className="fl">
              MAIN MENU
              <KeyboardArrowDown className="drop" />
            </h6>
            <ul className="ulfoot">
              <li className="lif">
                <a href="#" className="linkf">
                  Home
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Shop
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Featured
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Layout
                </a>
              </li>
              <li className="lif">
                <a href="#" className="linkf">
                  Pages
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
      <hr className="hrf" />
      <div className="bottom-footer">
        <div className="footer">
          <Grid container className="gridp">
            <Grid item>
              <p className="fl">
                Copyright © 2021
                <a className="inlinep" herf="#">
                  MassTechnologist.Com
                </a>
                . All Rights Reserved.
              </p>
            </Grid>
            <Grid item>
              <Facebook
                className="icons"
                fontSize="small"
                style={{ color: "grey" }}
              />
              <Twitter
                className="icons"
                fontSize="small"
                style={{ color: "grey" }}
              />
              <Pinterest
                className="icons"
                fontSize="small"
                style={{ color: "grey" }}
              />
              <Instagram
                className="icons"
                fontSize="small"
                style={{ color: "grey" }}
              />
            </Grid>
            <Grid item>
              <img className="pay" src={Payment} alt="Payment" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Footer;
