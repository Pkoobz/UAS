import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import MapJakarta from "./denpasar-img/denpasar.jpg";
import car1 from "./denpasar-img/denpasar-car1.jpg";
import car2 from "./denpasar-img/denpasar-car2.jpg";
import car3 from "./denpasar-img/denpasar-car3.jpg";
import car4 from "./denpasar-img/denpasar-car4.jpg";
import car5 from "./denpasar-img/denpasar-car5.jpg";
import car6 from "./denpasar-img/denpasar-car6.jpg";
import car7 from "./denpasar-img/denpasar-car7.jpg";
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
                  <h1>DENPASAR</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 img-prov justify-content-center">
                <img src={MapJakarta} alt="jakarta" />
              </div>
              <div className="col-md-7 mt-3 desc-provinsi">
                <h3>Fun Fact:</h3>
                <p>
                Nama Denpasar sendiri berasal dari kata "den" yang berarti "utara" dan 
                "pasar" yang berarti "pasar", sehingga setelah digabung bermakna "Utara Pasar".
                Nama ini disematkan pada taman tersebut melihat lokasinya yang terletak di utara pasar. 
                Sekarang taman tersebut menjadi Jaya Sabha, rumah jabatan untuk Gubernur Bali.
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
