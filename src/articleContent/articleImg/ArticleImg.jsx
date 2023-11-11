import React from "react";
import "./ArticleImg.css";

function ArticleImg({ image, info, night }) {
  return (
    <div className={night === true ? "article-img" : " article-img back-light"}>
      <img src={image} className="art-img"alt="" />
      <p>{info}</p>
    </div>
  );
}
export default ArticleImg;
