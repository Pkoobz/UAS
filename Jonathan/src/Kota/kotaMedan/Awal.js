import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import MapMedan from "./medan-img/medan.png";
import car1 from "./medan-img/medan-car1.jpg";
import car2 from "./medan-img/medan-car2.jpeg";
import car3 from "./medan-img/medan-car3.jpg";
import car4 from "./medan-img/medan-car4.jpg";
import car5 from "./medan-img/medan-car5.jpg";
import car6 from "./medan-img/medan-car6.jpg";
import car7 from "./medan-img/medan-car7.webp";
import background from "../shared-img/topbg.jpeg";

const Awal = () => {
  return (
    <section id="awal">
      <Parallax bgImage={background} strength={300} smooth={true}>
        <div className="parallax kota">
          <div className="row">
            <div className="col-sm-12 justify-content-center css-jakarta">
              <div className="content-box">
                <div
                  className="kota"
                  style={{
                    backgroundColor: "gray"
                  }}
                >
                  <h1>MEDAN</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 img-prov justify-content-center">
                <img src={MapMedan} alt="padang" />
              </div>
              <div className="col-md-7 mt-3 desc-provinsi">
                <h3>Fun Fact:</h3>
                <p>
                Lewat branding "The Kitchen of Asia," Kota Medan siap berbenah diri 
                untuk jadi destinasi wisata kuliner kenamaan. Ini diungkapkan Wali 
                Kota Medan, Bobby Nasution, yang mengatakan bahwa kuliner merupakan 
                jawaban dari semua permasalahan di Kota Medan.
                </p>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={car1} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car2} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car3} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car4} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car5} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car6} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car7} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car1} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car2} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car3} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car4} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car5} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car6} height="170" width="270" alt="" />
              </div>
              <div className="slide">
                <img src={car7} height="170" width="270" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Awal;
