import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import MapJayapura from "./jayapura-img/jayapura/jayapura.jpg";
import car1 from "./jayapura-img/jayapura-car1.png";
import car2 from "./jayapura-img/jayapura-car2.jpg";
import car3 from "./jayapura-img/jayapura-car3.jpg";
import car4 from "./jayapura-img/jayapura-car4.jpg";
import car5 from "./jayapura-img/jayapura-car5.jpg";
import car6 from "./jayapura-img/jayapura-car6.webp";
import car7 from "./jayapura-img/jayapura-car7.jpg";
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
                  <h1>Jayapura</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 img-prov justify-content-center">
                <img src={MapJayapura} alt="padang" />
              </div>
              <div className="col-md-7 mt-3 desc-provinsi">
                <h3>Fun Fact:</h3>
                <p>
                Kota Jayapura adalah sebuah kota dan juga ibu kota dari Provinsi Papua, 
                Indonesia. Kota ini merupakan ibu kota provinsi yang terletak paling 
                Timur di Indonesia, dan berbatasan langsung dengan negara tetangga 
                Papua Nugini, yang terletak di Teluk Jayapura. 
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
