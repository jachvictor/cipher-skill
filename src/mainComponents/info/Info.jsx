import React from "react";
import "./Info.css";
import { Children } from "react";

function Info({ link, text, header, Children }) {
  return (
    <div className="contain">
      <div className="design">
        <h3>{header}</h3>
      </div>
      <div className="wrap-info wrap-res">
        <div className="img">{Children}</div>

        <p className="quote">
          <div>{text}</div>
        </p>
      </div>
    </div>
  );
}

export default Info;

export function Info2({ link, text, header, Children }) {
  return (
    <div className="contain">
      <div className="design">
        {/* <div className="left"></div> */}
        <h3>{header}</h3>
        {/* <div className="right"></div> */}
      </div>
      <div className="wrap-info">
        <p className="quote">{text}</p>
        {/* <img src={link} alt="" className="img" /> */}
        <div className="img">{Children}</div>
      </div>
    </div>
  );
}
