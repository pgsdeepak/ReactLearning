import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const fontClass = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    fontClass.push(classes.red);
  }
  if (props.persons.length > 3) {
    fontClass.push(classes.blue);
  }
  if (props.persons.length <= 1) {
    fontClass.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={fontClass.join(" ")}>HI, I am a React App</h1>
      <button className={btnClass} onClick={props.toggle}>
        Switch Name
      </button>
    </div>
  );
};
export default cockpit;
