import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdFavorite, MdSearch } from "react-icons/md";
import { MdPages, MdError, MdContactPage } from "react-icons/md";

import { ImBooks } from "react-icons/im";
import { BiBook } from "react-icons/bi";
import { useEffect,useState } from "react";

function SideNav({ setCancel, HandleIputClick2 }) {
  const location = useLocation();
  const path = location.pathname;
  const [show, setShow] = useState(false);

  useEffect(() => {
    // handleShow();
    if (
      path === "/contactus" ||
      path === "/aboutus" ||
      path === "/termsofservice" 
    ) {
      setShow(true);
    }else{
      setShow(false)
    }
  },[path]);

  return (
    <main className="side-nav">
      <div className="dropdown-menu">
        {/* <div className="hold-navliink"> */}
        <Link onClick={(e) => HandleIputClick2(e)} className="link" to="/home">
          <p className={path === "/home" ? "sub-select" : "select-link"}>
            <ImBooks
              // className="icon"
              color={path === "/home" && ""}
              size={30}
            />
            Home
          </p>
        </Link>
        <Link onClick={(e) => HandleIputClick2(e)} className="link" to="/search">
          <p className={path === "/search" ? "sub-select" : "select-link"}>
            <MdSearch
              className="icon"
              color={path === "/search" && ""}
              size={30}
            />
            Search
          </p>
        </Link>
        <Link onClick={(e) => HandleIputClick2(e)} className="link" to="/favourite">
          <p className={path === "/favourite" ? "sub-select" : "select-link"}>
            <MdFavorite
              className="icon"
              // color={path === "/favourite" && "sub-select"}
              size={30}
            />
            Favourite
          </p>
        </Link>
        {show && (
              <p style={{color:"white"}} className="sub-select" >
                <MdPages
                className="icon"
                  color="white"
                  size={30}
                />
                {path==="/contactus" && "Contact us"}
                {path==="/aboutus" && "About us"}
                {path==="/termsofservice" && "Terms"}
              </p>
            )}

        {path === "/course" && (
          <p className={"sub-select"}>
            <BiBook
              className="icon"
              // color={path === "/favourite" && "sub-select"}
              size={30}
            />
            Course
          </p>
        )}
      </div>
    </main>
  );
}

export default SideNav;
