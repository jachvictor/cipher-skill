import React from "react";
import "./ArticleNote.css";

function ArticleNote({ text, night, header }) {
  return (
    <div className={night === false ? "note-contain" : "dark-mode"}>
      <h3 className={night === true && "dark-mode-h3"}>{header}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ArticleNote;
