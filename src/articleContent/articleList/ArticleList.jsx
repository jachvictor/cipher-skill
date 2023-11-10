import React from "react";
import "./ArticleList.css";

function ArticleList({ item, night }) {
  return (
    <div
      className={night === true ? "article-list night" : "article-list section"}
    >
      {/* <ul className={night === true ? "article-list night" : "article-list section"}> */}
        <li>{item}</li>
      {/* </ul> */}
    </div>
  );
}

export default ArticleList;
