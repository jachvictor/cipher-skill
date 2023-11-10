import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

function Category({ setShowAll }) {
  const navigate = useNavigate();
  return (
    <div className="cat-container">
      {/* <h3>Categories</h3> */}
      <div className="hold-category">
        <button onClick={() => setShowAll(true)}>all</button>
      </div>
    </div>
  );
}

export default Category;
