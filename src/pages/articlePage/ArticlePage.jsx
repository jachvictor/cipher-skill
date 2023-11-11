import React, { useState, useEffect } from "react";
import noimage from "../../assets/articleimg/noimg.png";
import nocover from "../../assets/codedef.png";
import noauthor from "../../assets/articleimg/noauthor.png";

import {
  ArticleCover,
  Section,
  SubSection,
  InnerSection,
  Table,
  SubHeader,
  ArticleImg,
  ArticleNote,
  ArticleList,
} from "../../articleContent";
import { Article } from "../../database";
import { useLocation } from "react-router-dom";
import "./ArticlePage.css";

function ArticlePage({ addToFavorite }) {
  const [night, setNight] = useState(false);
  const [data, setData] = useState([]);

  const location = useLocation();

  const { pathname } = location;

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("title");

  useEffect(() => {
    const newData = Article.filter((item) =>
      item.content.title.includes(query)
    );
    setData(newData);
  }, []);

  return (
    // <div>
    <div className="course">
      <>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <ArticleCover
                night={night}
                setNight={setNight}
                title={value.content.title}
                date={value.content.date}
                author={value.content.author}
                duration={value.content.duration}
                authorimg={
                  value.content.authorimg === null
                    ? noauthor
                    : value.content.authorimg
                }
                key={value.content.id}
                courseimg={
                  value.content.coverimg === null
                    ? nocover
                    : value.content.coverimg
                }
                onClick={() => addToFavorite(value.content.title)}
              />

              <Section
                key={index}
                header={value.content.intro.header}
                text={value.content.intro.content}
                night={night}
              />

              {value.content.intro.list.map((items, index) => {
                return <ArticleList key={index} night={night} item={items} />;
              })}

              <ArticleNote
                key={index}
                night={night}
                header={value.content.intro.note.header}
                text={value.content.intro.note.text}
              />

              <Table
                key={index}
                head={value.content.table.header}
                list={value.content.table.list}
                night={night}
              />
              {value.content.sections.map((items, index) => {
                return (
                  <>
                    <Section
                      key={index}
                      id={items.id}
                      header={items.header}
                      text={items.content}
                      night={night}
                    />
                    {items.list.map((lists, index) => {
                      return (
                        <ArticleList key={index} night={night} item={lists} />
                      );
                    })}
                    <ArticleNote
                      key={index}
                      night={night}
                      header={items.note.header}
                      text={items.note.text}
                    />
                    <div
                      key={index}
                      className={
                        night === true ? "flex-img" : " flex-img flex-light"
                      }
                    >
                      {items.img.map((img, index) => {
                        return (
                          <ArticleImg
                            key={index}
                            night={night}
                            info={img.title}
                            image={img.link === null ? noimage : img.link}
                          />
                        );
                      })}
                    </div>
                    {items.subsection.map((items1, index) => {
                      return (
                        <>
                          <SubSection
                            key={index}
                            header={items1.header}
                            night={night}
                            text={items1.content}
                          />

                          {items1.list.map((lists, index) => {
                            return (
                              <ArticleList

                                key={index}
                                night={night}
                                item={lists}
                              />
                            );
                          })}
                          <ArticleNote
                          key={index}
                            night={night}
                            header={items1.note.header}
                            text={items1.note.text}
                          />
                          <div
                          key={index}
                            className={
                              night === true
                                ? "flex-img"
                                : " flex-img flex-light"
                            }
                          >
                            {items1.img.map((items, index) => {
                              return (
                                <ArticleImg
                                  key={index}
                                  night={night}
                                  info={items.title}
                                  image={
                                    items.link === null ? noimage : items.link
                                  }
                                />
                              );
                            })}
                          </div>
                          {items1.innersection.map((items2, index) => {
                            return (
                              <>
                                <InnerSection
                                  key={index}
                                  header={items2.header}
                                  night={night}
                                  text={items2.content}
                                />

                                {items2.list.map((lists, index) => {
                                  return (
                                    <ArticleList
                                      key={index}
                                      night={night}
                                      item={lists}
                                    />
                                  );
                                })}
                                <ArticleNote
                                key={index}
                                  night={night}
                                  header={items2.note.header}
                                  text={items2.note.text}
                                />
                                <div
                                key={index}
                                  className={
                                    night === true
                                      ? "flex-img"
                                      : " flex-img flex-light"
                                  }
                                >
                                  {items2.img.map((items, index) => {
                                    return (
                                      <ArticleImg
                                        key={index}
                                        night={night}
                                        info={items.title}
                                        image={
                                          items.link === null
                                            ? noimage
                                            : items.link
                                        }
                                      />
                                    );
                                  })}
                                </div>

                                {items2.subheader.map((items3, index) => {
                                  return (
                                    <>
                                      <SubHeader
                                        key={index}
                                        header={items3.header}
                                        night={night}
                                        text={items3.content}
                                      />

                                      {items3.list.map((lists, index) => {
                                        return (
                                          <ArticleList
                                            key={index}
                                            night={night}
                                            item={lists}
                                          />
                                        );
                                      })}
                                      <ArticleNote
                                      key={index}
                                        night={night}
                                        header={items3.note.header}
                                        text={items3.note.text}
                                      />
                                      <div
                                      key={index}
                                        className={
                                          night === true
                                            ? "flex-img"
                                            : " flex-img flex-light"
                                        }
                                      >
                                        {items3.img.map((img,index) => {
                                          return (
                                            <ArticleImg
                                              key={index}
                                              night={night}
                                              info={img.title}
                                              image={
                                                img.link === null
                                                  ? noimage
                                                  : img.link
                                              }
                                            />
                                          );
                                        })}
                                      </div>
                                    </>
                                  );
                                })}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          );
        })}
      </>
    </div>
    // </div>
  );
}

export default ArticlePage;
