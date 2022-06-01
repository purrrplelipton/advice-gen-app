import React from "react";

import DiceIcon from "./dice_icon/dice_icon";
import diceIconClasses from "./button.module.css";

function Button(props) {
  return (
    <button className={diceIconClasses.Button}>
      <DiceIcon />
    </button>
  )
}

export default Button;