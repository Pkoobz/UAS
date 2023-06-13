import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/road.webp";
import wisata1 from "./pontianak-img/wisata/danau-biru-singkawang.jpg";
import wisata2 from "./pontianak-img/wisata/museum-kalimantan-barat.jpg";
import wisata3 from "./pontianak-img/wisata/pantai-pasir-panjang.jpg";
import wisata4 from "./pontianak-img/wisata/Taman-Arboretum-Sylva-Untan.png";
import wisata5 from "./pontianak-img/wisata/Vihara-Tri-Dharma-Sui-Kheu-Thai-Pak-Kung.jpg";

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
              <p>Danau Biru</p>
            </div>
            <div className="centerForm">
              <p>
              Danau Biru Singkawang dulunya sebagai tempat untuk membersihkan hasil pertambangan 
              emas. Bekas galian tambang emas lama-lama terisi air dan menjadi danau seperti sekarang.
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
              <p>Museum</p>
            </div>
            <div className="centerForm">
              <p>
              Museum ini menyimpan banyak barang berharga dari sejarah Kalimantan Barat, 
              termasuk sisa-sisa peradaban suku Melayu, Dayak, dan Tionghoa. Museum ini 
              dilengkapi dengan tiga ruangan yaitu Ruang Pengenalan, Ruang Budaya Kalbar, 
              dan Ruang Keramik.
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
              <p>Pantai</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai pasir panjang ini sangat layak untuk dikunjungi karena bebatuan, pasir 
              putihnya yang seperti karpet, pemandangan yang masih alami, dan air lautannya 
              yang tenang. Selain itu, ada kolam renang, motel, pemancingan, restoran, diskotik, 
              dan tempat bermain. Ada fasilitas olah raga bermotor, seperti trek dan sirkuit, di 
              mana remaja dapat menguji kemampuan mereka dalam balapan jalan raya dan di lintasan rumput.
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
              <p>Taman</p>
            </div>
            <div className="centerForm">
              <p>
              Salah satu taman yang bagus untuk bersantai adalah Taman Arboretum Sylva UNTAN. 
              Taman ini memiliki plasa, bangku taman, relief pahlawan Digulis, dan taman atap. 
              Taman ini tidak terlalu besar, tetapi banyak jenis bunga yang tumbuh dan berkembang di sana. 
              Tempat ini tidak hanya taman; dindingnya penuh dengan relief. Taman ini memiliki diorama 
              kehidupan masyarakat Belanda kuno selain dinding relief.
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
              <p>Vihara</p>
            </div>
            <div className="centerForm">
              <p>
              Vihara Tri Dharma Sui Kheu Thai Pak Kung, rumah beribadah untuk orang Tri Dharma terletak 
              di tanah seluas enam hektare di Kelurahan Sanggau Kulor, Kecamatan Singkawang Timur, Kota 
              Singkawang, Kalimantan Barat. Dijamin bahwa berbagai ornamen, hiasan, dan gaya arsitektur 
              yang menyerupai gaya Tiongkok Vihara akan membuat pengunjung terkagum-kagum.
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
