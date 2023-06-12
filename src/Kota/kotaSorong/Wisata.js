import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/road.webp";
import wisata1 from "./sorong-img/wisata/Danau-Ayamaru.jpeg";
import wisata2 from "./sorong-img/wisata/Air_Terjun_Sasnek.jpeg";
import wisata3 from "./sorong-img/wisata/Pulau-Buaya.jpeg";
import wisata4 from "./sorong-img/wisata/Puncak-Petik-Bintang.jpeg";
import wisata5 from "./sorong-img/wisata/Raja-Ampat.jpeg";

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
              <p>Danau Ayamaru</p>
            </div>
            <div className="centerForm">
              <p>
              Danau Ayamaru bukan hanya indah karena airnya yang bening, namun juga suasananya yang masih alami. 
              Danau ini merupakan danau karst yang dikelilingi dengan bukit serta pepohonan yang rimbun. Masyarakat 
              sekitar Danau Ayamaru Papua percaya bahwa dengan menjaga hutan sekeliling danau artinya mereka juga 
              menjaga nenek moyang mereka. Itulah sebabnya Danau Ayamaru sangat dijaga kelestariannya oleh penduduk 
              sekitar.
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
              <p>Air Terjun Sasnek</p>
            </div>
            <div className="centerForm">
              <p>
              Air terjun Sasnek terletak di pedalaman Papua, Indonesia dan merupakan salah satu keajaiban alam yang 
              patut dikunjungi. Keindahan air terjun ini membuatnya menjadi tujuan wisata yang populer bagi para wisatawan.
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
              <p>Pulau Buaya</p>
            </div>
            <div className="centerForm">
              <p>
              Disebut Pulau Buaya karena pulaunya menyerupai buaya (kalau di lihat dari atas). Namun, tidak seseram namanya, 
              pulau ini menawarkan wisata bahari yang amat menyenangkan. Laut yang masih bersih, jernih dan jauh dari pencemaran 
              lingkungan. Di hamparan pantai terdapat sebagian besar di kelilingi oleh pepohonan kelapa.
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
              <p>Puncak Petik Bintang</p>
            </div>
            <div className="centerForm">
              <p>
              Puncak Petik Bintang terletak di Pegunungan Petik Bintang Kabupaten Maybrat. Dari puncak Gunung 
              Petik Bintang bisa menikmati matahri terbit dan matahari terbenam, hingga melihat kebawah beratapan 
              Awan dan Kabut yang menyelimuti serta menghiasi hutan dan gunung.
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
              <p>Raja Ampat</p>
            </div>
            <div className="centerForm">
              <p>
              Bagi Anda yang gemar diving dan snorkeling, wisata Raja Ampat bisa menjadi destinasi diving terbaik 
              karena menawarkan keindahan bawah laut yang luar biasa.  Raja Ampat memiliki kekayaan dan keunikan 
              spesies yang tinggi dengan ditemukannya beragam jenis ikan, hewan lunak (moluska), terumbu karang.
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
