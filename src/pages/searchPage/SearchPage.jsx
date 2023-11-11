import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import { Input, Button } from "../../components";

import { ArticleCat } from "../../mainComponents";
import { Article } from "../../database";
import { useLocation, useNavigate} from "react-router-dom";
import Category from "../../mainComponents/categories/Category";
import { BiSearch } from "react-icons/bi";
import { TbMoodEmpty } from "react-icons/tb";
function SearchPage({ addToFavorite }) {
  const [search, setSearch] = useState();
  const [display, setDisplay] = useState();
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const newData = Article.filter((item) =>
      item.content.title.toLowerCase().includes(query)
    );

    setData(newData);
  }, [query]);

  useEffect(() => {
    displayInfo();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAll(false);
    navigate(`/search?query=${search.toLowerCase()}`);
  };

  const displayInfo = () => {
    if (query === null) {
      setDisplay(1);
    } else if (data.length === 0 || query === undefined) {
      setDisplay(2);
    } else if (query === "") {
      setDisplay(2);
      // setDisplay(4)
    } else {
      setDisplay(4);
    }
  };
  return (
    <main className="search-container">
      <div className="marginn"></div>
      <form onSubmit={(e) => handleSubmit(e)} className="for-input">
        <div>
          <BiSearch className="search-icon2" size={40} />
        </div>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type={"text"}
          placeholder={"search"}
        />
        {width > 900 && (
          <Button onClick={(e) => handleSubmit(e)} text={"search"} />
        )}
      </form>
      <section className="section-head">
        {/* <h3>Articles</h3> */}
        <p>
          <Category setShowAll={setShowAll} />
        </p>
      </section>
      {!showAll && (
        <section className="search-result">
          {display === 1 && (
            <main className="welcome">
              <div className="hold-wimg">Delve into the core of technology</div>
            </main>
          )}
          {display === 2 && (
            <main className="no-result">
              {/* <img src={noResult} alt="" /> */}
              <TbMoodEmpty strokeWidth={0.5} color="silver" size={300} />
              <h2>No result found</h2>
            </main>
          )}
          {display === 4 && <ArticleCat onClick={addToFavorite} data={data} />}
        </section>
      )}

      <section className="all-search">
        {showAll && <ArticleCat onClick={addToFavorite} data={Article} />}
      </section>
    </main>
  );
}

export default SearchPage;
