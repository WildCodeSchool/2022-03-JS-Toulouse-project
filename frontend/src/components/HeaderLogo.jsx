import React from "react";
import ROAD from "../assets/ROAD_BLUE.png";

function HeaderLogo() {
  return (
    <div className="logo-container">
      <img className="logo-img" src={ROAD} alt="logo" />
    </div>
  );
}

export default HeaderLogo;
