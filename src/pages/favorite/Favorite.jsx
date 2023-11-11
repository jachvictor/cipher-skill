import React, { useEffect, useState } from "react";
import "./Favorite.css";
import { Article } from "../../database";
import { Confirm } from "../../mainComponents";
import { AiOutlineDelete } from "react-icons/ai";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nocover from "../../assets/codedef.png";

import { Link } from "react-router-dom";
function Favorite({ favorites, setFavorites }) {
  const holdFav = localStorage.getItem("favlist");
  const fav = JSON.parse(holdFav);
  const g = [fav];
  useEffect(() => {
    console.log(fav);
  });
  const favoriteArt = Article.filter((item) =>
    favorites.includes(item.content.title)
  );

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const removeFromFavorites = (article) => {
    setItemToDelete(article);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      const updatedFavorites = favorites.filter((fav) => fav !== itemToDelete);
      setFavorites(updatedFavorites);
      toast.success("removed successfully");
    }
    // Close the dialog
    setShowConfirmDialog(false);

    // alert("ggg")
  };

  const handleCancelDelete = () => {
    // Close the dialog
    setShowConfirmDialog(false);
  };
  return (
    <div className="favorite-contain">
      <div className="marginn"></div>

      <Confirm
        isOpen={showConfirmDialog}
        message="Remove from favourite?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <h1 className="fav-header">Favourite Courses</h1>
      {favoriteArt.length === 0 && (
        <div className="empty-fav">
          <GiEmptyMetalBucketHandle className="empty-icon" size={100} />
          <p>List is empty, add courses to favourite to view here</p>
        </div>
      )}

      <div className="fav-list">
        {favoriteArt.map((item) => {
          return (
            <div className="fav-card">
              {/* <section> */}
              <Link
                className="hold-fav-img"
                
                to={`/course?title=${encodeURIComponent(item.content.title)}`}
              >
                <img
                  className="fav-img"
                  src={
                    item.content.coverimg === null
                      ? nocover
                      : item.content.coverimg
                  }
                  alt=""
                />
                {/* </section> */}{" "}
              </Link>
              <section className="fav-info">
                <div>
                  <h2>{item.content.title}</h2>
                  <p>{item.content.author}</p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="fav-icon"
                    size={50}
                    onClick={() => removeFromFavorites(item.content.title)}
                  />
                </div>
              </section>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Favorite;
