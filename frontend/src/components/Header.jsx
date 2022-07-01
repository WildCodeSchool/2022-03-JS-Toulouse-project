import React from "react";
import "../styles/Header.css";
import HeaderLogo from "./HeaderLogo";

function Header({ name }) {
  return (
    <div className="header-container">
      <HeaderLogo />
      <h2 className="header-title">{name}</h2>
      <div />
    </div>
  );
}

export default Header;
