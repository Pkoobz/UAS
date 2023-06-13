import React from "react";
import "./map.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PadangImage from "./img/Padang.jpg";
import MedanImage from "./img/Denpasar.jpeg";
import PontianakImage from "./img/Pontianak.jpg";
import SamarindaImage from "./img/Samarinda.jpg";
import MakassarImage from "./img/Makassar.jpg";
import ManadoImage from "./img/Manado.jpg";
import JakartaImage from "./img/Jakarta.jpg";
import DenpasarImage from "./img/Denpasar.jpeg";
import JayapuraImage from "./img/Jayapura.jpg";
import SorongImage from "./img/Sorong.jpg";
import MapImage from "./img/Indo_map.png";

export default function About() {
  const currentHour = new Date().getHours();
  let greeting;
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Selamat siang";
  } else if (currentHour >= 6 && currentHour < 12) {
    greeting = "Selamat pagi";
  } else if (
    (currentHour >= 18 && currentHour <= 23) ||
    (currentHour >= 0 && currentHour < 6)
  ) {
    greeting = "Selamat malam";
  }

  return (
    <div style={{ backgroundColor: "rgb(46, 43, 43)" }}>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Travelindo</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                >
                  Back
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-link"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 style={{ color: "white" }}>
        Halo {greeting} {localStorage.getItem("username")}
      </h1>
      <div className="container">
        <div className="map-container">
          <div className="image-container">
            <img src={MapImage} alt="Image" className="map" />

            <div
              className="point"
              style={{ left: "12.1641%", top: "40.9815%" }}
            >
              <div className="point-name" id="pdg">
                Padang
              </div>
            </div>
            <div className="point" style={{ left: "8.01562%", top: "19.212%" }}>
              <div className="point-name" id="mdn">
                Medan
              </div>
            </div>
            <div
              className="point"
              style={{ left: "31.7109%", top: "37.4133%" }}
            >
              <div className="point-name">Pontianak</div>
            </div>
            <div className="point" style={{ left: "48.375%", top: "40.1432%" }}>
              <div className="point-name">Samarinda</div>
            </div>
            <div
              className="point"
              style={{ left: "53.0156%", top: "60.7438%" }}
            >
              <div className="point-name">Makassar</div>
            </div>
            <div
              className="point"
              style={{ left: "64.1953%", top: "30.3542%" }}
            >
              <div className="point-name">Manado</div>
            </div>
            <div className="point" style={{ left: "26.0859%", top: "66.588%" }}>
              <div className="point-name">Jakarta</div>
            </div>
            <div
              className="point"
              style={{ left: "43.8047%", top: "77.5458%" }}
            >
              <div className="point-name">Denpasar</div>
            </div>
            <div
              className="point"
              style={{ left: "97.8047%", top: "49.2016%" }}
            >
              <div className="point-name">Jayapura</div>
            </div>
            <div
              className="point"
              style={{ left: "78.3281%", top: "41.0198%" }}
            >
              <div className="point-name">Sorong</div>
            </div>
          </div>
        </div>
        <br />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="Card" id="k-Padang">
                <img
                  src={PadangImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Padang</h3>
                  <p>
                    Padang adalah kota di Provinsi Sumatera Barat, Indonesia.
                    Terkenal dengan keindahan alamnya dan masakan Padang yang
                    lezat, Padang menawarkan pengalaman wisata yang menarik.
                    Anda dapat menikmati pantai-pantai yang indah seperti Pantai
                    Air Manis dan Pantai Padang, serta menjelajahi warisan
                    budaya Minangkabau seperti Istana Pagaruyung. Jelajahi kota
                    ini dan nikmati keindahan alam serta kuliner yang khas.
                    <NavLink
                      exact
                      to="/Padang"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={MedanImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Medan</h3>
                  <p>
                    Medan, terletak di Sumatera Utara, adalah kota terbesar di
                    Pulau Sumatera, Indonesia. Dikenal sebagai "Kota Melayu
                    Deli," Medan memiliki sejarah yang kaya dan budaya yang
                    beragam. Kota ini memiliki pesona yang unik dengan gabungan
                    kekayaan warisan budaya Melayu, Tionghoa, dan Eropa. Medan
                    juga menjadi gerbang utama untuk menjelajahi keindahan alam
                    Sumatera Utara, termasuk Danau Toba yang terkenal. Dengan
                    berbagai atraksi wisata, kuliner yang lezat, dan keramahan
                    penduduknya, Medan adalah tempat yang menarik untuk
                    dijelajahi dan dinikmati.
                    <NavLink
                      exact
                      to="/Medan"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={PontianakImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Pontianak</h3>
                  <p>
                    Pontianak, "Kota Khatulistiwa," terletak di Provinsi
                    Kalimantan Barat, Indonesia. Dengan Equator Monument yang
                    menandai garis khatulistiwa dan Sungai Kapuas yang indah,
                    kota ini menawarkan pengalaman unik. Jelajahi warisan budaya
                    seperti Masjid Jami Pontianak dan Kota Tua Pontianak.
                    Nikmati pesona kota ini yang kaya akan keindahan alam dan
                    budaya.
                    <NavLink
                      exact
                      to="/Pontianak"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={SamarindaImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Samarinda</h3>
                  <p>
                    Samarinda adalah ibu kota Provinsi Kalimantan Timur,
                    Indonesia. Terkenal dengan Sungai Mahakam yang indah dan
                    hutan bakau yang luas, kota ini menawarkan pengalaman alam
                    yang menarik. Nikmati pemandangan sungai yang menakjubkan
                    dan jelajahi kekayaan alamnya.
                    <NavLink
                      exact
                      to="/Samarinda"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={MakassarImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Makassar</h3>
                  <p>
                    Makassar, juga dikenal sebagai Ujung Pandang, adalah kota
                    terbesar di Sulawesi Selatan, Indonesia. Terletak di pantai
                    barat daya pulau ini, Makassar menawarkan sejarah yang kaya
                    dan kuliner lezat. Jelajahi Benteng Rotterdam dan nikmati
                    makanan khas seperti Coto Makassar dan Konro. Nikmati pesona
                    kota ini yang mencerminkan kekayaan budaya dan keindahan
                    alam Sulawesi Selatan.
                    <NavLink
                      exact
                      to="/Makassar"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={ManadoImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Manado</h3>
                  <p>
                    Manado, ibu kota Provinsi Sulawesi Utara, Indonesia,
                    terkenal dengan keindahan alam bawah lautnya. Taman Laut
                    Bunaken adalah tujuan utama untuk menyelam dan menikmati
                    keanekaragaman terumbu karang yang menakjubkan. Kota ini
                    juga memiliki warisan budaya yang kaya dengan pengaruh suku
                    Minahasa. Nikmati pesona alam dan budaya Manado dalam
                    perjalanan Anda.
                    <NavLink
                      exact
                      to="/Manado"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={JakartaImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Jakarta</h3>
                  <p>
                    Jakarta adalah ibu kota dan kota terbesar di Indonesia.
                    Terletak di Pulau Jawa, Jakarta adalah pusat politik,
                    ekonomi, dan budaya negara ini. Kota ini menawarkan berbagai
                    atraksi, seperti Monumen Nasional (Monas), Taman Mini
                    Indonesia Indah, dan Ancol Dreamland. Selain itu, Jakarta
                    juga memiliki pusat perbelanjaan yang terkenal, seperti
                    Plaza Indonesia dan Grand Indonesia. Dengan kehidupan malam
                    yang beragam, kuliner lezat, dan keramahan penduduknya,
                    Jakarta adalah tempat yang menarik untuk dijelajahi dan
                    dinikmati.
                    <NavLink
                      exact
                      to="/Jakarta"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={DenpasarImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Denpasar</h3>
                  <p>
                    Denpasar adalah ibu kota Provinsi Bali, Indonesia. Terletak
                    di pantai selatan Pulau Bali, kota ini merupakan pusat
                    administrasi, perdagangan, dan budaya Bali. Jelajahi Pura
                    Jagatnatha, Pasar Badung, dan museum-museum yang menampilkan
                    seni dan budaya Bali. Nikmati pesona budaya Bali dan suasana
                    pantai yang indah di Denpasar.
                    <NavLink
                      exact
                      to="/Denpasar"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={JayapuraImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Jayapura</h3>
                  <p>
                    Jayapura adalah ibu kota Provinsi Papua, Indonesia, yang
                    terletak di pantai utara Pulau Papua. Kota ini dikenal
                    dengan keindahan alamnya yang menakjubkan, dengan pegunungan
                    yang mempesona dan air terjun yang spektakuler. Selain itu,
                    Jayapura juga memiliki pesona pantai yang memikat dan
                    danau-danau yang menyejukkan. Tempat ini merupakan surga
                    bagi para pecinta alam dan penggemar petualangan yang ingin
                    menjelajahi kekayaan alam Papua yang eksotis.
                    <NavLink
                      exact
                      to="/Jayapura"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Card" id="k-Medan">
                <img
                  src={SorongImage}
                  alt="Gallery Image"
                  className="max-size"
                />
                <div className="intro">
                  <h3>Sorong</h3>
                  <p>
                    Sorong, terletak di Provinsi Papua Barat, Indonesia, adalah
                    gerbang utama untuk menjelajahi keindahan alam Papua yang
                    menakjubkan. Kota ini terkenal sebagai titik awal untuk
                    menuju Raja Ampat, sebuah surga bagi penyelam dengan
                    keanekaragaman hayati bawah laut yang luar biasa. Selain
                    itu, Sorong juga menawarkan pantai-pantai yang indah,
                    pulau-pulau eksotis, dan hutan-hutan yang mempesona. Bagi
                    para petualang dan pencinta alam, Sorong menjadi pintu masuk
                    yang menarik untuk menjelajahi keajaiban alam yang tak
                    ternilai di Papua Barat.
                    <NavLink
                      exact
                      to="/Sorong"
                      activeClassName="active"
                      className="nav-link"
                    >
                      See more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
