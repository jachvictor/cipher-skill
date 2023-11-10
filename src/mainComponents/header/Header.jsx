import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="dexx">
      <nav className="navbar">
        <img src={logo} alt="" className="logo" />

        <Link to={"/home"}>
          <button className="start">get started</button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
