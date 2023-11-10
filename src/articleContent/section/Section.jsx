import React from "react";
import "./Section.css";

function Section({ night, text, header , id}) {
  return (
    <main  id={id} className={night === true ? "night general" : "section general"}>
      <h1 className={night === true ? "night-header" : "light-header"}>{header}</h1>
      <article className="content">{text}</article>
    </main>
  );
}

export default Section;