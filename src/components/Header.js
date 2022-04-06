import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <div class="logo">
        <a title="Home" href="/">
          <img className="img img-fluid" src={logo} />
        </a>
      </div>
    </div>
  );
};

export default Header;
