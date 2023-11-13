import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [select, setSelect] = useState();
  const [showmenu, setShowmenu] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleNavigate = (e) => {
    const select = e.target.value;
    // You can perform actions based on the selected option value here
    // For navigation, you can use React Router or other navigation methods

    // Example: Redirect to a different page based on the selected option
    if (select === "/contactus") {
      // Redirect to Page 1
      navigate("/contactus");
    } else if (select === "/aboutus") {
      navigate("/aboutus");
    } else if (select === "/home") {
      navigate("/home");
    }

    // Update the selectedValue state
    setSelect(select);
  };
  return (
    <div className="dexx">
      <nav className="navbar">
        <img src={logo} alt="" className="logo" />
        {/* <section className="hold-extra"> */}
        <div className="extra">
          {width > 900 && (
            <>
              <Link
                to={"/aboutus"}
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <p>About Us</p>
              </Link>
              <Link
                to="/contactus"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <p>Contact Us</p>
              </Link>
              <Link to={"/home"}>
                <button className="start">Get Started</button>
              </Link>{" "}
            </>
          )}
        </div>
        {width < 900 && (
          <div className="dropdown-input">
            <div
              style={{ cursor: "pointer", color: "black" }}
              className="select-route"
            >
              <p onClick={() => navigate("/home")}>Get Started</p>
              <IoMdArrowDropdown
                onClick={HandleIputClick}
                className="arrow-down"
                size={30}
                color="black"
              />
            </div>

            {showmenu && (
              <div className="hold-nav-item">
                {/* {searchQuery2.map((items) => {
                return ( */}
                <p onClick={() => navigate("/aboutus")} className="nav-item">
                  About Us
                </p>
                <p onClick={() => navigate("/contactus")} className="nav-item">
                  Contact Us
                </p>
                {/* );
              })} */}
              </div>
            )}
          </div>
        )}
        {/* </section> */}
      </nav>
    </div>
  );
}

export default Header;
