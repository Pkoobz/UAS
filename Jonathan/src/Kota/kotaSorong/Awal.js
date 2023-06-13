import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import MapSorong from "./sorong-img/sorong.jpg";
import car1 from "./sorong-img/sorong-car-1.jpeg";
import car2 from "./sorong-img/sorong-car-2.jpeg";
import car3 from "./sorong-img/sorong-car-3.jpeg";
import car4 from "./sorong-img/sorong-car-4.jpeg";
import car5 from "./sorong-img/sorong-car-5.jpeg";
import car6 from "./sorong-img/sorong-car-6.jpeg";
import car7 from "./sorong-img/sorong-car-7.jpeg";
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
                  <h1>SORONG</h1>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 img-prov justify-content-center">
                <img src={MapSorong} alt="padang" />
              </div>
              <div className="col-md-7 mt-3 desc-provinsi">
                <h3>Fun Fact:</h3>
                <p>
                Kota Sorong adalah ibukota provinsi Papua Barat Daya, Indonesia. Kota ini dikenal dengan 
                sebutan Kota Minyak, di mana Nederlands Nieuw-Guinea Petroleum Maatschappij (NNGPM) mulai 
                melakukan aktivitas pengeboran minyak bumi di Sorong sejak tahun 1935. Sorong adalah kota 
                terbesar kedua di Papua Indonesia, setelah Kota Jayapura. Sorong merupakan nama yang berasal 
                dari kata Soren. Dalam bahasa Biak Numfor, Soren berarti laut yang dalam dan bergelombang.
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
