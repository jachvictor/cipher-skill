import React from "react";
import "./Category.css";

function Category({ setShowAll }) {
  return (
    <div className="cat-container">
      <div className="hold-category">
        <button onClick={() => setShowAll(true)}>all</button>
      </div>
    </div>
  );
}

export default Category;
