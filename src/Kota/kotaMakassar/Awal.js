import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import MapJakarta from "./makassar-img/makassar.jpg";
import car1 from "./makassar-img/makassar-car1.jpg";
import car2 from "./makassar-img/makassar-car2.jpg";
import car3 from "./makassar-img/makassar-car3.jpg";
import car4 from "./makassar-img/makassar-car4.jpg";
import car5 from "./makassar-img/makassar-car5.jpg";
import car6 from "./makassar-img/makassar-car6.jpg";
import car7 from "./makassar-img/makassar-car7.jpg";
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
                  <h1>MAKASSAR</h1>
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
                Hari Jadi Makassar ditetapkan pada tanggal 9 November 1607 bertepatan di hari Jumat. 
                Asal usul ditetapkan pada hari tersebut dikarenakan Raja Gowa ke-14 yaitu Mangngarangi 
                Daeng Manrabia memeluk agama Islam, lalu disusul Raja Tallo yaitu Mangkubumi I-Mallingkaang 
                Daeng Manyonri Kareng Katangka. Setelah kedua raja ini masuk Islam, pada tanggal 9 November 
                1607 digelar shalat Jumat pertama di Masjid Tallo.
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
