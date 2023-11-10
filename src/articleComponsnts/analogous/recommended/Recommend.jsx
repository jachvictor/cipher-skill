// import { RecommendCourseIcon } from "../../couresIcon/Courseicon";
import RecommendCourseIcon from "../../couresIcon/RecommendCourseIcon/RCourseIcon";
import image from "../../../assets/codebackground2.png";
import noauthor from "../../../assets/articleimg/noauthor.png";
import nocover from "../../../assets/codedef.png";

import "./Recommend.css";
import { Article } from "../../../database";
import { useEffect, useState } from "react";

function Recommend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = Article.filter(
      (item) =>
        item.content.section.includes("pr") ||
        item.content.section.includes("nr") ||
        item.content.section.includes("fr")
    );
    setData(newData);
  },[]);
  return (
    <div className="recommend-contain">
      <>
        {data.map((item) => {
          return (
            <RecommendCourseIcon
              courseimg={
                item.content.coverimg === null ? nocover : item.content.coverimg
              }
              date={item.content.date}
              des={item.content.description}
              duration={item.content.duration}
              name={item.content.author}
              title={item.content.title}
              key={item.content.id}
              link={item.content.title}
            />
          );
        })}
      </>
    </div>
  );
}

export default Recommend;
