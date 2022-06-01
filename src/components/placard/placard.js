import React from "react";
import Button from "./button/button";

import DividerIcon from "./dividerIcon/dividerIcon";

import placardStyles from "./placard.module.css";

function Placard(props) {

  return (
    <div className={placardStyles.Placard}>
      <p className={placardStyles.FirstP}>advice #{props.id}</p>
      <p className={placardStyles.mainP}>“{props.advice}”</p>
      <DividerIcon />
      <Button />
    </div>
  )
}

export default Placard;