import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/Wisata_UAS.jpg";
import wisata1 from "./jayapura-img/jayapura/wisata/wisata-air-terjun-cyclop.jpg";
import wisata2 from "./jayapura-img/jayapura/wisata/wisata-bukit-salib.webp";
import wisata3 from "./jayapura-img/jayapura/wisata/wisata-pantai-pasir-enam.jpg";
import wisata4 from "./jayapura-img/jayapura/wisata/wisata-desa-skouw.webp";
import wisata5 from "./jayapura-img/jayapura/wisata/wisata-yacoba.webp";

const Wisata = () => {
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
              <p>Air Terjun</p>
            </div>
            <div className="centerForm">
              <p>
              Destinasi Air Terjun Cyclop Jayapura merupakan salah satu wisata alam 
              murah meriah alias tidak mahal. Pemandangan yang tersaji di air terjun 
              tersebut sangatlah indah apalagi di beberapa sudut air terjunnya. Tidak 
              mengherankan jika ramai orang yang mengabadikan pemandangan di Air 
              Terjun Cyclop secara langsung.
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
              <p>Bukit Salib</p>
            </div>
            <div className="centerForm">
              <p>
              Bukit Salib berlokasi di Waibu, di Doyo Lama. Sebuah bukit yang sangat 
              menawan, di mana di puncaknya terdapat salib. Latar belakangnya indah 
              sekali, ada Danau Sentani, hamparan padang hijau yang luas dan kampung-
              kampung yang berada di pinggiran danau, sangat instagramable, sayang 
              sekali kalau tidak diabadikan.
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
              <p>Pantai Pasir Enam</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai Pasir Enam adalah pantai alami yang memiliki pasir berwarna putih. 
              Suasana di pantai ini sangat cocok bagi wisatawan yang mencari ketenangan. 
              Apalagi latar belakang pantai ini juga berupa kawasan perbukitan. Walaupun 
              garis pantainya tidak terlalu panjang, ombak dan tarikkan ombak di pantai 
              ini cukup besar.       
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
              <p>Desa Skouw</p>
            </div>
            <div className="centerForm">
              <p>
              Provinsi Papua berbatasan langsung dengan negara Papua Nugini. Ada Skouw, 
              wajah terdepan Indonesia di perbatasan Papua Nugini yang kini cantik jelita. 
              Skouw yang menjadi perbatasan antara Kota Jayapura dengan Wutung, Papua Nugini 
              (PNG), pada setiap akhir pekan menjadi pilihan favorit warga Kota 
              Jayapura untuk berlibur.
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
              <p>Pantai Yacoba</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai Yacoba terletak di Desa Tobati, Distrik Depapre, Jayapura. 
              Pantai ini terkenal dengan hamparan pasir putihnya yang halus dan 
              air laut yang jernih. Pengunjung dapat menikmati pemandangan laut 
              yang indah, berenang, atau bahkan menyelam di tempat ini.
              </p>
            </div>
          </div>
        </div>
        <div className="bg"></div>
      </Parallax>
    </section>
  );
};

export default Wisata;
