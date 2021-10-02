import React from "react";
import "./Backtotop.sass";
import { useState } from "react";
import { KeyboardArrowUp } from "@material-ui/icons";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const handelBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${"back_to_top"} ${show ? "visible" : "invisible"}`}
      onClick={handelBackToTop}
    >
      <KeyboardArrowUp />
    </div>
  );
};

export default BackToTop;
