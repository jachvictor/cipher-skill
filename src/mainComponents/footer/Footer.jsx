import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-container">
      <div className="image">
        <img src={logo} alt="" className="footer-logo" />
      </div>

      <section className="info">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/aboutus"
            >
              About us
            </Link>
          </li>
          {/* <div className="divide"></div> */}
          <li>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to={"/contactus"}
            >
              Contact us
            </Link>
          </li>
          {/* <div className="divide"></div> */}

          {/* <div className="divide"></div> */}
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to={"/termsofservice"}
          >
            <li>Terms of service</li>
          </Link>

          <p className="copyright">
            <BiCopyright />
            Copyright 2023 Cipherskill. All Rights Reserved
          </p>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
