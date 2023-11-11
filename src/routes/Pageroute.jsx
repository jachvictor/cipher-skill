import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  Homepage,
  Contactus,
  AboutUs,
  SearchPage,
  Favorite,
  ArticlePage,
  ErrorPage,
  Terms,
} from "../pages";
import { Navbar, Footer } from "../mainComponents";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pageroute() {
  const initialState = JSON.parse(localStorage.getItem("favlist")) || [];
  const [favorite, setFavorite] = useState(initialState);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    localStorage.setItem("favlist", JSON.stringify(favorite));
  }, [favorite]);
  const addToFavorite = (id) => {
    if (!favorite.some((fav) => fav === id)) {
      setFavorite([...favorite, id]);
      toast.success("added successfully, check the favorite page to view");
    } else if (favorite.some((fav) => fav === id)) {
      toast.warning("already added to favourite");
    }

    // console.log(favorite);
    // const arraySting = JSON.stringify(favorite);
    // localStorage.setItem("favlist", arraySting);
  };

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("title");

  return (
    <>
      {path !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/home"
          element={<Homepage addToFavorite={addToFavorite} />}
        />
        {!query && <Route path="/course" element={<ErrorPage />} />}
        <Route
          path="/course"
          element={<ArticlePage addToFavorite={addToFavorite} />}
        />

        <Route
          exact
          path="/search"
          element={<SearchPage addToFavorite={addToFavorite} />}
        />
        <Route
          exact
          path="/favourite"
          element={<Favorite favorites={favorite} setFavorites={setFavorite} />}
        />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/termsofservice" element={<Terms />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Pageroute;
