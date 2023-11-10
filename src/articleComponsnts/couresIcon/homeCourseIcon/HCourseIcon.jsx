import React from "react";
import { useEffect, useState } from "react";
import "./HCourseIcon.css";
import { GiHeartPlus,GiLoveHowl, GiHeartShield } from "react-icons/gi";
import {BiBookHeart} from "react-icons/bi"
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HomeCourseIcon({
  courseimg,
  des,
  title,
  name,
  dp,
  link,
  searchtitle,
  date,
  onClick,
}) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="icon-container">
      <section className="writer">
        <img src={dp} alt="" className="dp" />
        <div className="hold-name">
          <h3 className="name">{name}</h3>
          <p>{date}</p>
        </div>
      </section>
      <section className="art-info">
        {width > 900 && (
          <div className="details">
            <h2 className="title">{title}</h2>

            <p className="description">{des}</p>
          </div>
        )}
        {/* <img src={courseimg} alt="" className="course-img" /> */}
        <div
          className="course-img"
          style={{
            backgroundImage: `linear-gradient(
                    180deg,
                    rgba(10, 5, 47, 0.8) 0%,
                    rgba(18, 6, 46, 0) 43.75%,
                    #03032c 100%
                  ),url(${courseimg})`,
          }}
        >
          {width < 900 && (
            <div className="hold-description">
              <h2 className="title">{title}</h2> <p>{des}</p>
            </div>
          )}
        </div>
      </section>
      <section className="feature">
        <BiBookHeart cursor={"pointer"} size={40} color="silver" onClick={() => onClick()} />
        {/* <Link to={link}> */}
        <Button
          onClick={() =>
            navigate(`/course?title=${encodeURIComponent(searchtitle)}`)
          }
          text={"read"}
        />
        {/* </Link> */}
      </section>
    </div>
  );
}

export default HomeCourseIcon;
