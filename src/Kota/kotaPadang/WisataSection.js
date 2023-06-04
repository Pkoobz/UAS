import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/road.webp";
import wisata1 from "./padang-img/wisata/museum-adityawarman.jpg";
import wisata2 from "./padang-img/wisata/air-terjun-sarasah.jpg";
import wisata3 from "./padang-img/wisata/kota-tua-padang.jpg";
import wisata4 from "./padang-img/wisata/pantai-air-manis.jpg";
import wisata5 from "./padang-img/wisata/pulau-sirandah.jpeg";

const WisataSection = () => {
  return (
    <section id="wisata">
      <Parallax bgImage={Road} strength={300} smooth={true}>
        <div className="br"></div>
        <br />
        <div className="container-wisata">
          <div
            className="cont-items cont-items1"
            style={{
              backgroundImage: `url(${wisata1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="icon">
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>Museum</p>
            </div>
            <div className="centerForm">
              <p>
                Museum Adityawarman adalah museum budaya yang terletak di Kota
                Padang, Sumatra Barat. Didirikan pada tahun 1977 dan dinamai
                setelah raja Malayapura, Adityawarman, pada abad ke-14.
                Berfungsi sebagai tempat untuk menyimpan dan melestarikan
                benda-benda bersejarah, terutama cagar budaya Minangkabau dan
                sekitarnya, termasuk bangunan berarsitektur tradisional Minang.
                Museum ini sering disebut sebagai "Taman Mini ala Sumatra Barat"
                karena koleksinya yang luas dan beragam mengenai kebudayaan dan
                sejarah daerah tersebut. Museum ini merupakan salah satu tujuan
                wisata budaya yang penting di Kota Padang.
              </p>
            </div>
          </div>
          <div
            className="cont-items cont-items2"
            style={{
              backgroundImage: `url(${wisata2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="icon">
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>Sirasah</p>
            </div>
            <div className="centerForm">
              <p>
                Air Terjun Sarasah adalah sebuah air terjun yang terletak di
                daerah Sumatra Barat, Indonesia. Air terjun ini memiliki
                keindahan alam yang memukau dengan air yang mengalir dari
                ketinggian dan jatuh ke kolam di bawahnya. Air Terjun Sarasah
                dikelilingi oleh hutan yang hijau dan pemandangan yang indah.
                Tempat ini sering menjadi tujuan wisata bagi pengunjung yang
                ingin menikmati keindahan alam dan menyegarkan diri dengan air
                terjun yang segar.
              </p>
            </div>
          </div>
          <div
            className="cont-items cont-items3"
            style={{
              backgroundImage: `url(${wisata3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="icon">
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>Kota Tua</p>
            </div>
            <div className="centerForm">
              <p>
                Kota Tua Padang, juga dikenal sebagai Padang Lama, adalah
                kawasan di sepanjang Sungai Batang Arau yang merupakan pusat
                peradaban awal di Kota Padang. Kawasan ini mencakup sebagian
                wilayah dua kecamatan, yaitu Padang Barat dan Padang Selatan.
                Sejarahnya sebagai pusat perdagangan yang ramai melalui
                Pelabuhan Muara. Kota Tua Padang memiliki nilai sejarah dan
                cagar budaya yang signifikan, dengan bangunan-bangunan tua yang
                masih tersisa hingga saat ini. Tempat ini sering dikunjungi oleh
                wisatawan dan menjadi saksi bisu perkembangan Kota Padang dari
                masa lampau.
              </p>
            </div>
          </div>
          <div
            className="cont-items cont-items4"
            style={{
              backgroundImage: `url(${wisata4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="icon">
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>Pantai</p>
            </div>
            <div className="centerForm">
              <p>
                Pantai Air Manis, terletak 10 km di selatan Kota Padang,
                merupakan destinasi wisata populer. Pantai ini memiliki ombak
                kecil, panorama indah, dan terdapat dua pulau kecil di dekatnya.
                Pantai Air Manis juga terkenal dengan legenda Malin Kundang.
              </p>
            </div>
          </div>
          <div
            className="cont-items cont-items5"
            style={{
              backgroundImage: `url(${wisata5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="icon">
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>Pulau</p>
            </div>
            <div className="centerForm">
              <p>
                Pulau Sirandah adalah sebuah pulau kecil yang terletak di
                perairan Sumatra Barat, Indonesia. Pulau ini terletak di Teluk
                Padang, dekat dengan pantai Padang. Pulau Sirandah dikenal
                karena keindahan alamnya, termasuk pasir putihnya, air laut yang
                jernih, serta terumbu karang yang indah. Pulau ini sering
                dikunjungi oleh para wisatawan untuk snorkeling, menyelam, atau
                sekadar menikmati pemandangan alam yang menakjubkan.
              </p>
            </div>
          </div>
        </div>
        <div className="bg"></div>
      </Parallax>
    </section>
  );
};

export default WisataSection;
