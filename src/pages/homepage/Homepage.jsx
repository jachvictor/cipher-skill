import React, { useState, useEffect } from "react";
// import SideView from "../../articleComponsnts";
// import SideView from "../../articleComponsnts";
// import SideBar from "../../articleComponsnts";
// import SideBar from "../../articleComponsnts";
import SideBar from "../../articleComponsnts/sideBar/SideBar";
import { Carousell } from "../../mainComponents";
import "./Homepage.css";
import { ImList } from "react-icons/im";
import {
  BiNews,
  BiSolidNews,
  BiBarChart,
  BiSolidNetworkChart,
  BiListCheck,
  BiTrophy,
  BiSearch,
} from "react-icons/bi";
import image from "../../assets/codebackground.png";
import { Button, Input } from "../../components";
import { BiCheckSquare } from "react-icons/bi";
// import { All, New, Recommend, Popular } from "../../articleComponsnts";
import { All, Recommend } from "../../articleComponsnts/analogous";
import { useNavigate } from "react-router-dom";
import { Article } from "../../database";

function Homepage({ addToFavorite }) {
  const [width, setWidth] = useState(window.innerWidth);

  const [height, setHeight] = useState(window.innerHeight);

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
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [select, setSelect] = useState(1);
  const [search, setSearch] = useState();
  const [onsearch, setOnsearch] = useState(false);
  const [feature, setFeature] = useState([]);
  const [new1, setNew1] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const newData = Article.filter(
      (item) =>
        item.content.section.includes("f") ||
        item.content.section.includes("fr")
    );
    setFeature(newData);
    const newData1 = Article.filter(
      (item) =>
        item.content.section.includes("n") ||
        item.content.section.includes("nr")
    );
    setNew1(newData1);
    const newData2 = Article.filter(
      (item) =>
        item.content.section.includes("p") ||
        item.content.section.includes("pr")
    );
    setPopular(newData2);
  }, []);
  // const
  const storeFav = [];
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="marginn"></div>
      <div className="search-icon">
        <BiSearch
          size={40}
          // color="silver"
          onClick={() => setOnsearch(!onsearch)}
          className={onsearch === true ? "light-icon" : "drop-search"}
        />
      </div>
      {onsearch === true && (
        <section className="search">
          <h1>Delve into the core of technology</h1>

          <form
            onSubmit={() =>
              navigate(`/search?query=${encodeURIComponent(search)}`)
            }
            className="hold-search"
          >
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"search"}
            />
            <Button
              onClick={() =>
                navigate(`/search?query=${encodeURIComponent(search.toLowerCase())}`)
              }
              text={"Search"}
            />
          </form>
        </section>
      )}
      <Carousell />
      <main className="hold-content">
        <section className="hold-cart">
          <nav className="options">
            <p
              className={select === 1 && "select1"}
              onClick={() => setSelect(1)}
            >
              Featured
              <BiListCheck />
            </p>
            <p
              className={select === 2 && "select1"}
              onClick={() => setSelect(2)}
            >
              The newest
              <BiSolidNews />
            </p>{" "}
            <p
              className={select === 3 && "select1"}
              onClick={() => setSelect(3)}
            >
              Most pupolar
              <BiBarChart />
            </p>
          </nav>
          <div className="hold-section">
            {select === 1 && <All data={feature} onClick={addToFavorite} />}
            {select === 2 && <All data={new1} onClick={addToFavorite} />}
            {select === 3 && <All data={popular} onClick={addToFavorite} />}
          </div>
        </section>
        
        <section className="hold-recommend">
        <div className="wrap-recommend">
          <h2 className="recommend-head">
            Recommended
            <BiCheckSquare />
          </h2>
          <Recommend />
          </div>
        </section>
      
      </main>
    </div>
  );
}

export default Homepage;
