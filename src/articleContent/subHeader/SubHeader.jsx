import React from "react";
import "./SubHeader.css";

function SubHeader({ night, text, header }) {
  return (
    <main className={night === true ? "night general" : "section general"}>
      <h6 className={night === true ? "night-subhead" : "light-subhead"}>{header}</h6>
      <article className="content">{text}</article>
    </main>
  );
}

export default SubHeader;