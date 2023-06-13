import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/Wisata_UAS.jpg";
import wisata1 from "./makassar-img/wisata/wisata-air-terjun-parangloe.jpg";
import wisata2 from "./makassar-img/wisata/wisata-leang-leang-maros.jpg";
import wisata3 from "./makassar-img/wisata/wisata-pegunungan-karst.jpeg";
import wisata4 from "./makassar-img/wisata/wisata-pulau-gusung.webp";
import wisata5 from "./makassar-img/wisata/wista-air-terjun-takapala.webp";

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
              Air Terjun Parangloe memiliki tinggi sekitar 20 meter dan memiliki bentuk 
              yang berundak-undak di antara tebing batu yang indah. Dan terbentuk tiga 
              aliran air yang berbeda lebar dan tinggi. Di sekitar lokasi tersebut terdapat
              kolam alami dengan kedalaman yang beragam yang dihiasi dengan taburan bebatuan. 
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
              <p>Leang Maros</p>
            </div>
            <div className="centerForm">
              <p>
              Wisata sejarah dan belajar tentang sisa-sisa kehidupan di masa lalu tersedia di tempat ini. 
              Jejak peninggalan manusia purba yang berusia ribuan tahun dapat dilihat oleh pengunjung. 
              seperti penemuan berbagai fosil dan artefak purba, lukisan telapak tangan di dinding gua, 
              dan gambar babi rusa.
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
              <p>Rammang</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai ini sangat layak untuk dikunjungi karena bebatuan, pasir putihnya yang 
              seperti karpet, pemandangan yang masih alami, dan air lautannya yang tenang. 
              Selain itu, ada kolam renang, motel, pemancingan, restoran, diskotik, dan tempat 
              bermain. Ada fasilitas olah raga bermotor, seperti trek dan sirkuit, di mana 
              remaja dapat menguji kemampuan mereka dalam balapan jalan raya dan di lintasan rumput.
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
              <p>Pulau Gusung</p>
            </div>
            <div className="centerForm">
              <p>
              Pulau Gusung adalah pulau terluar di sebelah barat Kabupaten Kepulauan Selayar. 
              Sekitar pulau biasanya digunakan untuk diving dan memancing, terutama untuk menuju 
              Laut Flores. Di pinggir pulau, beberapa penduduk membudidayakan lobster dan ikan laut 
              berkualitas ekspor dengan jaring apung.
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
              <p>Air Terjun</p>
            </div>
            <div className="centerForm">
              <p>
              Air Terjun Takapala terletak di Kampung Takapala, Desa Bontolerung, Kabupaten Gowa, 
              Sulawesi Selatan. Air terjun ini memiliki tinggi sekitar 109 meter dan debit air yang 
              besar. Keindahan alamnya meliputi perbukitan daratan tinggi, rerimbunan hutan, dan 
              kabut di dasar air terjun. Terdapat juga pelangi yang sering terlihat di dasar air 
              terjun. Lokasi wisata ini memiliki tebing curam dengan corak unik, menjadikannya tempat
              yang alami dan megah.
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
