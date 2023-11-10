import HomeCourseIcon from "../../couresIcon/homeCourseIcon/HCourseIcon";
import image from "../../../assets/chip.png";
import noauthor from "../../../assets/articleimg/noauthor.png"
import nocover from "../../../assets/codedef.png"

import "./Popular.css";
import { Article } from "../../../database";
import { useState, useEffect } from "react";

function Popular({ onClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = Article.filter(
      (item) =>
        item.content.section.includes("p") ||
        item.content.section.includes("pr")
    );
    setData(newData);
  });
  return (
    <div className="contain-cart">
      {data.map((item) => {
        return (
          <>
            <HomeCourseIcon
              des={item.content.description}
              title={item.content.title}
              searchtitle={item.content.title}
              onClick={() => onClick(item.content.title)}
              courseimg={
                item.content.coverimg === null ? nocover : item.content.coverimg
              }
              date={item.content.date}
              dp={
                item.content.authorimg === null
                  ? noauthor
                  : item.content.authorimg
              }
              name={item.content.author}
              key={item.content.id}
            />
          </>
        );
      })}
    </div>
  );
}

export default Popular;
