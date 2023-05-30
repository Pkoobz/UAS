import React from "react";
import "../styles.css";
import Sidebar from "./Sidebar"
import PilihKota from "./PilihKotaMana"
import GambarKota from "./GambarKota"
import Footer from "./Footer"

function Menu() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-6">
          <GambarKota />
        </div>
        <div className="col-sm-3">
          <PilihKota />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default Menu;
