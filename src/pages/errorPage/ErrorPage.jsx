import React from "react";
import "./ErrorPage.css"
import image from "../../assets/error.png"
function ErrorPage() {
  return (
    <div className="error-page">
        <div className="marginn"></div>
      <img src={image} alt="" className="error" />
      {/* <img src={image} alt="" className="error" /> */}
    </div>
  );
}

export default ErrorPage;
