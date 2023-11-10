import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../mainComponents";
import { Homepage } from "../pages";
import Courseroute from "./Courseroute";

function Activityroute() {
  return (
    <div>
      
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="" element={<Homepage />} />
        <Route exact path="/course" element={<Courseroute/>} />
      </Routes>
    </div>
  );
}

export default Activityroute;
