import React from "react";
import logo from "../assets/investment-calculator-logo.png";
function Header() {
  return (
    <div id="Header">
      <h1>Investment Calculator</h1>
      <img src={logo} alt="" width="150" />
    </div>
  );
}

export default Header;
