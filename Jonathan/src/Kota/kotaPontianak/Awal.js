import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import MapPontianak from "./pontianak-img/pontianak.jpg";
import car1 from "./pontianak-img/pontianak-car-1.jpg";
import car2 from "./pontianak-img/pontianak-car-2.jpeg";
import car3 from "./pontianak-img/pontianak-car-3.jpeg";
import car4 from "./pontianak-img/pontianak-car-4.jpg";
import car5 from "./pontianak-img/pontianak-car-5.jpeg";
import car6 from "./pontianak-img/pontianak-car-6.jpg";
import car7 from "./pontianak-img/pontianak-car-7.jpeg";
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
                  <h1>PONTIANAK</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 img-prov justify-content-center">
                <img src={MapPontianak} alt="jakarta" />
              </div>
              <div className="col-md-7 mt-3 desc-provinsi">
                <h3>Fun Fact:</h3>
                <p>
                Nama Pontianak memiliki beberapa legenda yang beredar di masyarakat. Salah satu legenda 
                mengatakan bahwa nama Pontianak berasal dari Ayunan Anak di sekitar Masjid Jami. Legenda 
                lain mengatakan bahwa Pontianak berasal dari kata "pohon punti" yang berarti pohon-pohon 
                tinggi. Ada juga cerita mengenai kata "Buntinganak" yang memiliki kaitan dengan asal usul 
                nama Pontianak.
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
