import React from "react";
import "./InnerSection.css";

function InnerSection({ night, text, header }) {
  return (
    <main className={night === true ? "night general" : "section general"}>
      <h5 className={night === true ? "night-inner" : "light-inner"}>
        {header}
      </h5>
      <article className="content">{text}</article>
    </main>
  );
}

export default InnerSection;
