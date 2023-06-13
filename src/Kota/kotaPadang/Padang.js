import React from "react";
import Navbar from "../Navbar";
import Awal from "./Awal";
import WisataSection from "./WisataSection";
import KulinerSection from "./KulinerSection";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

const Padang = () => {
  return (
    <div className="container-fluid p-0 mg-0">
      <Navbar />
      <Awal />
      <WisataSection />
      <KulinerSection />
      <Footer />
    </div>
  );
};

export default Padang;
