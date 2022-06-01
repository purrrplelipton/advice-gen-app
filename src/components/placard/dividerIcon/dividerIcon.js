import React from "react";

import divideIcon from "../../images/pattern-divider-mobile.svg";

import dividerIconStyles from "./dividerIcon.module.css";

function DividerIcon(props) {

  return (
      <img src={divideIcon} alt="divider icon mobile" className={dividerIconStyles.DividerIcon} />
  )
}

export default DividerIcon;