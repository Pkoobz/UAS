import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/road.webp";
import wisata1 from "./denpasar-img/wisata/wisata-bajra-sandhi.jpg";
import wisata2 from "./denpasar-img/wisata/wisata-museum-bali.jpg";
import wisata3 from "./denpasar-img/wisata/wisata-pantai-sanur.webp";
import wisata4 from "./denpasar-img/wisata/wisata-tanah-lot.jpg";
import wisata5 from "./denpasar-img/wisata/wisata-GWK.jpg";

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
              <p>Bajra Sandhi</p>
            </div>
            <div className="centerForm">
              <p>
              Monumen Bajra Sandhi merupakan Monumen Perjuangan Rakyat Bali untuk
              memberi hormat pada para pahlawan serta merupakan lambang pesemaian 
              pelestarian jiwa perjuangan rakyat Bali dari generasi ke generasi dan 
              dari zaman ke zaman serta lambang semangat untuk mempertahankan keutuhan 
              Negara Kesatuan Republik Indonesia. Monumen ini dikenal dengan nama 
              "Bajra Sandhi" karena bentuknya menyerupai bajra atau genta yang digunakan 
              oleh para Pendeta Hindu dalam mengucapkan Weda (mantra) pada saat upacara keagamaan.
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
              <p>Museum Bali</p>
            </div>
            <div className="centerForm">
              <p>
              Museum Bali (dikenal juga sebagai Museum Unit Pelaksana Teknis Dinas Kebudayaan Bali) 
              adalah museum negara yang berada di Kota Denpasar, Bali. Museum Bali menjadi museum 
              penyimpanan peninggalan masa lampau manusia dan etnografi. Koleksi museum terdiri dari 
              benda-benda etnografi antara lain peralatan dan perlengkapan hidup, kesenian, keagamaan, 
              bahasa tulisan, dan lainnya yang mencerminkan kehidupan dan perkembangan kebudayaan Bali 
              di masa lampau.
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
              <p>Pantai Sanur</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai Sanur adalah salah satu pantai wisata yang ada di pulau Bali. 
              Pantai ini terletak persis di sebelah timur kota Denpasar, Bali. Sanur 
              berada di Kotamadya Denpasar. Karena memiliki ombak yang cukup tenang, 
              maka pantai Sanur tidak bisa dipakai untuk selancar layaknya Pantai Kuta. 
              Tak jauh dari Pantai Sanur terdapat juga lokasi wisata selam dan snorkeling. 
              Lokasi selam ini dapat digunakan oleh para penyelam dari semua tingkatan keahlian. 
              Pantai Sanur juga dikenal sebagai sunrise beach, berlawanan dengan Pantai Kuta yang 
              lebih dikenal dengan pemandangan sunset.
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
              <p>Tanah Lot</p>
            </div>
            <div className="centerForm">
              <p>
              Pura Tanah Lot adalah salah satu Pura yang sangat disucikan di Bali, Indonesia. 
              Di sini ada 2 Pura yang terletak di atas batu besar. Satu terletak di atas bongkahan 
              batu dan satunya di atas tebing mirip dengan Pura Uluwatu. Pura Tanah Lot ini 
              merupakan bagian dari Pura Dang Kahyangan. Pura Tanah Lot merupakan Pura laut 
              tempat pemujaan dewa-dewa penjaga laut. Tanah Lot terkenal sebagai tempat yang 
              indah untuk melihat matahari terbenam. 
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
              <p>GWK</p>
            </div>
            <div className="centerForm">
              <p>
              Garuda Wisnu Kencana kerap disebut dengan GWK, adalah sebuah taman wisata 
              budaya di bagian selatan pulau Bali. Taman wisata ini terletak di Desa Ungasan, 
              Kecamatan Kuta Selatan, Kabupaten Badung, kira-kira 40 kilometer di sebelah 
              selatan Denpasar, ibu kota provinsi Bali.Di sini berdiri megah sebuah landmark 
              atau maskot Bali, yakni patung Garuda Wisnu Kencana yang menggambarkan sosok 
              Dewa Wisnu menunggangi tunggangannya, Garuda, setinggi 121 meter.
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
