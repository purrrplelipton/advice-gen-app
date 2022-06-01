import React from "react";

import diceIcon from "../../../images/icon-dice.svg";
import diceIconClasses from "./dice_icon.module.css";

function DiceIcon(props) {
  return (
    <img src={diceIcon} alt="dice icon" className={diceIconClasses.DiceIcon} />
  )
}

export default DiceIcon;