import React from "react";
import classes from "./Button.css";

const button = props => {
  const classStr = [classes.Button, classes[props.btnType]].join(" ");
  console.log(classStr);

  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default button;
