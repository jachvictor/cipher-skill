import React from "react";
import "./ErrorPage.css";
import image from "../../assets/error.png";
import { MdError } from "react-icons/md";
function ErrorPage() {
  return (
    <div className="error-page">
      <div className="marginn"></div>
      {/* <img src={image} alt="" className="error" /> */}
      <MdError size={500} />
      <section className="error-mes">
        <h1>Sorry, page not found</h1>
        <p>
          the link you followed is probably  broken or the page has been removed
        </p>
      </section>
    </div>
  );
}

export default ErrorPage;
