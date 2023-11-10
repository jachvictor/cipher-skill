import React from "react";
import Courseicon from "../couresIcon/Courseicon";
import image from "../../../assets/codebackground.png";

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
