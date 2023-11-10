import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdFavorite, MdSearch } from "react-icons/md";
import { ImHome, ImBooks } from "react-icons/im";
import {BiBook} from "react-icons/bi"
import { TiDelete } from "react-icons/ti";

function SideNav({ setCancel }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <main className="side-nav">
      <div className="dropdown-menu">
        {/* <div className="hold-navliink"> */}
        <Link className="link" to="/home">
          <p className={path === "/home" && "sub-select"}>
            <ImBooks
              // className="icon"
              color={path === "/home" && ""}
              size={30}
            />
            Home
          </p>
        </Link>
        <Link className="link" to="/search">
          <p className={path === "/search" && "sub-select"}>
            <MdSearch
              className="icon"
              color={path === "/search" && ""}
              size={30}
            />
            Search
          </p>
        </Link>
        <Link className="link" to="/favourite">
          <p className={path === "/favourite" && "sub-select"}>
            <MdFavorite
              className="icon"
              // color={path === "/favourite" && "sub-select"}
              size={30}
            />
            Favourite
          </p>
        </Link>
      
        {path==="/course" &&
        <p className={"sub-select"}>
        <BiBook
          className="icon"
          // color={path === "/favourite" && "sub-select"}
          size={30}
        />
        Course
      </p>
        }
      </div>
    </main>
  );
}

export default SideNav;
