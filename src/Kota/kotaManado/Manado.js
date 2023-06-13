import React from "react";
import Navbar from "../Navbar";
import Awal from "./Awal";
import Wisata from "./Wisata";
import Kuliner from "./Kuliner";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

const Manado = () => {
  return (
    <div className="container-fluid p-0 mg-0">
      <Navbar />
      <Awal />
      <Wisata />
      <Kuliner />
      <Footer />
    </div>
  );
};

export default Manado;
