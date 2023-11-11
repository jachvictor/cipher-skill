import React from "react";

import Recommend from "../analogous/recommended/Recommend";
import "./SideView.css";


function SideView() {
  return (
    <div className="sideview">
      <section className="recommend">
        <Recommend />
      </section>
    </div>
  );
}

export default SideView;
