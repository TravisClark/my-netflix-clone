import React from "react";
import classes from "./Backdrop.module.css";

function Backdrop() {
  return (
    <div className={`${classes.bgImg} absolute top-0 left-0`}>
      <div className={`${classes.backdrop} absolute w-full h-full `}></div>
    </div>
  );
}

export default Backdrop;
