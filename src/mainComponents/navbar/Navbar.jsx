import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { MdFavorite, MdPageview, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import SideNav from "../sideNav/SideNav";
import { TiDelete } from "react-icons/ti";
import { MdPages, MdError, MdContactPage } from "react-icons/md";
import { BiBook } from "react-icons/bi";

function Navbar(props) {
  const location = useLocation();
  const path = location.pathname;
  const [showmenu, setShowmenu] = useState(false);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState();
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

  useEffect(() => {
    // handleShow();
    if (
      path === "/contactus" ||
      path === "/aboutus" ||
      path === "/termsofservice"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [path]);

  const Icon = () => {
    return <IoMdMenu className="dropdown-icon" size={50} />;
  };
  // useEffect(() => {
  //   const handler = (e) => setShowmenu(false);
  //   window.addEventListener("click", handler);
  //   return () => {
  //     window.removeEventListener("click", handler);
  //   };
  // });

  const HandleIputClick = (e) => {
    e.stopPropagation();
    setShowmenu(true);
  };
  const HandleIputClick2 = (e) => {
    e.stopPropagation();
    setShowmenu(false);
  };
  return (
    <div className="navbar-containe">
      {width < 900 && <>{showmenu && <SideNav HandleIputClick2={HandleIputClick2} setCancel={setShowmenu} />}</>}
      <nav className="header">
        <Link onClick={()=>setShow(false)} to={"/"}>
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
            {show && (
              <p style={{ color: "white" }} className="current">
                <MdPages className="icon" color="white" size={30} />
                {path === "/contactus" && "Contact us"}
                {path === "/aboutus" && "About us"}
                {path === "/termsofservice" && "Terms"}
              </p>
            )}

            {path === "/course" && (
              <p style={{ color: "white" }} className="current">
                <BiBook className="icon" color={"white"} size={30} />
                Course
              </p>
            )}
          </div>
        )}

        {width < 900 && (
          <div style={{ cursor: "pointer" }} className="dropdown-tool">
            {!showmenu && (
              <div onClick={(e) => HandleIputClick(e)}>
                <Icon />
              </div>
            )}
            {showmenu && <TiDelete  onClick={(e) => HandleIputClick2(e)} cursor="pointer" size={60} />}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
