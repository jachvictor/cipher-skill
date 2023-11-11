import React from "react";
import "./RCourseIcon.css";
import { useNavigate } from "react-router-dom";

function RecommendCourseIcon({
  courseimg,
  des,
  title,
  name,

  link,
  date,
  duration,
}) {
  const navigate = useNavigate();

  return (
    <main className="icon-container2">
      <section
        onClick={() => navigate(`/course?title=${encodeURIComponent(link)}`)}
        className="back-img"
        style={{
          backgroundImage: `url(${courseimg})`,
          height: "auto",
        }}
      >
        <div className="icon-header">
          <p className="text1">
            <h4>{name}</h4>
          </p>
          <h1>{title}</h1>
          <p>
            {date} <br /> {duration}
          </p>
        </div>
      </section>
      <section className="dec2">{des}</section>
      {/* </Link> */}
    </main>
  );
}

export default RecommendCourseIcon;
