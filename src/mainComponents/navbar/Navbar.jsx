import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import Header from "../header/Header";
import "./Navbar.css";
import { Button, Input } from "../../components";
import { useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
// import { IoHomeSharp } from "react-icons/io";
import { ImHome, ImBooks } from "react-icons/im";
import { MdFavorite, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import SideNav from "../sideNav/SideNav";
import { TiDelete } from "react-icons/ti";

function Navbar(props) {
  const location = useLocation();
  const path = location.pathname;
  const [showmenu, setShowmenu] = useState(false);
  const [show, setShow] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [checkWidth, setCheckWidth] = useState(2);
  // import { SelectHTMLAttributes } from "react";

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (width > 900) {
      setCheckWidth(1);
    } else if (width < 900) {
      setCheckWidth(2);
    }
  });
  const handleShow = () => {
    if (
      path === "/home" ||
      path === "/fav" ||
      path === "/contactUs" ||
      path === "/search"
    ) {
      setShow(1);
    } else if (path === "/python") {
      setShow(2);
    }

    if (width > 900) {
      setCheckWidth(1);
    } else if (width < 900) {
      setCheckWidth(2);
    }
  };

  useEffect(() => {
    // handleShow();
  });

  const Icon = () => {
    return <IoMdMenu className="dropdown-icon" size={50} />;
  };
  useEffect(() => {
    const handler = (e) => setShowmenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const HandleIputClick = (e) => {
    e.stopPropagation();
    setShowmenu(!showmenu);
  };
  return (
    <div className="navbar-containe">
      {width < 900 && <>{showmenu && <SideNav setCancel={setShowmenu} />}</>}
      <nav className="header">
        <Link to={"/"}>
          <img src={logo} alt="" className="navlogo" />
        </Link>

        {width > 900 && (
          <div className="navlink">
            <Link className="link" to="/home">
              <p className={path === "/home" && "select"}>
                <ImBooks
                  className="icon"
                  color={path === "/home" && ""}
                  size={30}
                />
                Home
              </p>
            </Link>
            <Link className="link" to="/search">
              <p className={path === "/search" && "select"}>
                <MdSearch
                  className="icon"
                  color={path === "/search" && ""}
                  size={30}
                />
                Search
              </p>
            </Link>
            <Link className="link" to="/favourite">
              <p className={path === "/favourite" && "select"}>
                <MdFavorite
                  className="icon"
                  color={path === "/favourite" && ""}
                  size={30}
                />
                Favourite
              </p>
            </Link>
          </div>
        )}

        {width < 900 && (
          <div
            onClick={(e) => HandleIputClick(e)}
            style={{ cursor: "pointer" }}
            className="dropdown-tool"
          >
            {!showmenu && <Icon />}
            {showmenu && (
              <TiDelete
                cursor="pointer"
    
                size={60}
              />
            )}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
