import React from "react";
import Navbar from "./Navbar7";
import Awal from "./Awal";
import Wisata from "./Wisata";
import Kuliner from "./Kuliner";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

const Denpasar = () => {
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

export default Denpasar;
