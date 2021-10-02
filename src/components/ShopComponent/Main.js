import { Apps, FormatListBulleted } from "@material-ui/icons";
import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div className="uppermain">
        <div>
          <span className="iconmaintop">
            <Apps />
          </span>
          <span className="iconmaintop">
            <FormatListBulleted />
          </span>
          <span>Showing 1 - 9 of 37 Items</span>
        </div>
        <div>
          <span>Sort By</span>
        </div>
      </div>
      <div className="lowermain"></div>
    </>
  );
};

export default Main;
