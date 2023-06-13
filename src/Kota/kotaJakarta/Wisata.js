import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/Wisata_UAS.jpg";
import wisata1 from "./jakarta-img/wisata/wisata-taman-mini.jpeg";
import wisata2 from "./jakarta-img/wisata/wisata-dufan.png";
import wisata3 from "./jakarta-img/wisata/wisata-pik.jpg";
import wisata4 from "./jakarta-img/wisata/wisata-monas.jpg";
import wisata5 from "./jakarta-img/wisata/wisata-kota-tua.jpg";

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
              <p>TMII</p>
            </div>
            <div className="centerForm">
              <p>
              Taman Mini Indonesia Indah (TMII) merupakan suatu kawasan 
              taman wisata bertema budaya Indonesia di Jakarta Timur.
              Tujuan dibangunnya tempat wisata ini adalah untuk 
              memperkenalkan kebudayaan dan kekayaan alam kepada setiap 
              warga Indonesia maupun luar negeri. Taman ini memiliki 
              berbagai wahana seperti anjungan daerah, teater 4D, museum, 
              dan lain-lain.
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
              <p>Dufan</p>
            </div>
            <div className="centerForm">
              <p>
              Dufan adalah sebuah taman hiburan yang terletak di kawasan 
              Taman Impian Ancol, Jakarta Utara, Indonesia yang diresmikan 
              dan dibuka untuk umum pada tanggal 29 Agustus 1985. Dufan 
              menawarkan banyak wahana mulai dari roller coaster, Ferris Wheel, 
              taman hiburan bertema internasional, dan lain-lain.
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
              <p>PIK</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai Indah Kapuk (PIK) adalah sebuah kawasan terencana 
              yang terletak di Penjaringan, Jakarta Utara, Kapuk, 
              Cengkareng, Jakarta Barat, dan Kabupaten Tangerang, Banten.
              Kawasan PIK dibagi menjadi dua kawasan utama: Pantai Indah 
              Kapuk 1 dan Pantai Indah Kapuk 2.
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
              <p>Monas</p>
            </div>
            <div className="centerForm">
              <p>
              Monas adalah monumen yang berada di tengah Lapangan Medan 
              Merdeka di Jakarta Pusat. Monas didirikan untuk merayakan 
              perjuangan rakyat Indonesia. 
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
              <p>Kota Tua</p>
            </div>
            <div className="centerForm">
              <p>
              Wisata Kota Tua Jakarta yang juga dikenal dengan sebutan 
              Batavia Lama (Oud Batavia) ini adalah sebuah wilayah kecil 
              di Jakarta, Indonesia dan dijuluki dengan "Permata Asia" 
              dan "Ratu dari Timur" pada abad ke-16 oleh pelayar Eropa.
              Di kawasan ini terdapat ragam bangunan tua yang masih terawat 
              yang masing-masing memiliki sejarah.
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
