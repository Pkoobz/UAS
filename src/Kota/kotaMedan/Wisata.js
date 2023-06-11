import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/road.webp";
import wisata1 from "./medan-img/wisata/wisata-bukit-holbung-samosir.jpg";
import wisata2 from "./medan-img/wisata/wisata-danau-toba.jpg";
import wisata3 from "./medan-img/wisata/wisata-istana-maimun.jpg";
import wisata4 from "./medan-img/wisata/wisata-pemandian-bah-damanik.jpg";
import wisata5 from "./medan-img/wisata/wisata-ucok-durian.jpg";

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
              <p>Holbung</p>
            </div>
            <div className="centerForm">
              <p>
              Bukit Holbung adalah salah satu tempat wisata di Danau Toba yang 
              terletak perbukitan di Desa Holbung, Kecamatan Sitiotio, Kabupaten 
              Samosir, Sumatra Utara. Rangkaian perbukitan Bukit Holbung ini 
              sudah ada sejak 200 tahun yang lalu.
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
              <p>Danau Toba</p>
            </div>
            <div className="centerForm">
              <p>
              Danau Toba adalah danau alami berukuran besar di Indonesia 
              yang berada di kaldera gunung supervulkan. Danau ini memiliki 
              panjang 100 kilometer (62 mil), lebar 30 kilometer (19 mi), 
              dan kedalaman 508 meter (1.667 ft). Danau ini terletak di 
              tengah pulau Sumatra bagian utara dengan ketinggian permukaan 
              sekitar 900 meter (2.953 ft). Danau ini adalah danau terbesar 
              di Indonesia sekaligus danau vulkanik terbesar di dunia.
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
              <p>Maimun</p>
            </div>
            <div className="centerForm">
              <p>
              Istana Maimun adalah ikon Kota Medan, Sumatra Utara, sebagai 
              istana Kesultanan Deli. Didesain oleh arsitek Capt. Theodoor 
              van Erp, istana ini memiliki 2 lantai, 30 ruangan, dan gaya 
              arsitektur yang memadukan berbagai budaya. Terletak di Jalan 
              Brigadir Jenderal Katamso, Aur, Medan Maimun, istana ini juga 
              dikenal dengan sebutan Masjid Raya Medan.
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
              <p>Bah Damanik</p>
            </div>
            <div className="centerForm">
              <p>
              Pemandian Bah Damanik adalah pemandian air panas di desa Damanik, 
              Sumatra Utara. Terkenal sebagai tempat rekreasi dan penyembuhan 
              alami dengan air panas belerang. Menyediakan fasilitas kolam renang 
              dan kamar mandi.
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
              <p>Ucok Durian</p>
            </div>
            <div className="centerForm">
              <p>
              Ucok Durian memang hanya salah satu dari banyak penjual durian 
              di Kota Medan, tapi saking terkenal dan legendarisnya tempat 
              ini, sudah bisa disebut sebagai salah satu tempat wisata di Medan. 
              Soalnya, ini memang jadi salah satu tempat yang wajib banget 
              dikunjungi saat liburan ke Medan. Saking terkenalnya tempat ini, 
              Presiden Joko Widodo aja sampai datang ke sini tahun 2017 lalu.
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
