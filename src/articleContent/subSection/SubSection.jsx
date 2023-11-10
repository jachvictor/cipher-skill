import React from "react";
import "./SubSection.css"


function SubSection({ night, text, header }) {
    return (
      <main className={night === true ? "night general" : "section general"}>
        <h3 className={night === true ? "night-head-sub" : "light-head-sub"}>{header}</h3>
        <article className="content">{text}</article>
      </main>
    );
  }

  export default SubSection;