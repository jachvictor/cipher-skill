import React from "react";
import "./ArticleCat.css";
import noauthor from "../../assets/articleimg/noauthor.png";
import nocover from "../../assets/codedef.png";

import HomeCourseIcon from "../../articleComponsnts/couresIcon/homeCourseIcon/HCourseIcon";

function ArticleCat({ data, onClick }) {
  const holdValues = data.map((value) => {
    return (
      <>
        <HomeCourseIcon
          searchtitle={value.content.title}
          onClick={() => onClick(value.content.title)}
          title={value.content.title}
          courseimg={
            value.content.coverimg === null ? nocover : value.content.coverimg
          }
          dp={
            value.content.authorimg === null ? nocover : value.content.authorimg
          }
          date={value.content.date}
          des={value.content.description}
          name={value.content.author}
          key={value.content.id}
        />
      </>
    );
  });
  const v = [holdValues];
  return (
    <div className="article-cat">
      <section className="hold-result">{holdValues}</section>
    </div>
  );
}

export default ArticleCat;
