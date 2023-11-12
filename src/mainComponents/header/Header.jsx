import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [select, setSelect] = useState();
  const navigate = useNavigate();

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
    }else if (select==="/home") {
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
                <button className="start">get started</button>
              </Link>{" "}
            </>
          )}
        </div>
        {width < 900 && (
          <select
            className="select-route"
            value={select}
            onChange={handleNavigate}
          >
            <option value="">
              <p>Select</p>
            </option>
            <option value="/home">
              <p>Get Started</p>
            </option>
            <option value="/aboutus">
              <p>About Us</p>
            </option>
            <option value="/contactus">
              <p>Contact Us</p>
            </option>
          </select>
        )}
        {/* </section> */}
      </nav>
    </div>
  );
}

export default Header;
