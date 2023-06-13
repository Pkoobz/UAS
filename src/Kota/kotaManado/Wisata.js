import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/Wisata_UAS.jpg";
import wisata1 from "./manado-img/wisata/wisata-danau-linow.jpg";
import wisata2 from "./manado-img/wisata/wisata-monumen-yesus.jpg";
import wisata3 from "./manado-img/wisata/wisata-pantai-pulisan.jpg";
import wisata4 from "./manado-img/wisata/wisata-pulau-lihaga.jpg";
import wisata5 from "./manado-img/wisata/wisata-ratahan-telu.jpg";

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
              <p>Danau Linow</p>
            </div>
            <div className="centerForm">
              <p>
              Kata Linow berasal dari kata Minahasa lilinowan, yang berarti tempat 
              berkumpulnya air. Warna air di danau ini berubah menjadi hijau, biru, 
              dan kuning kecoklatan. Warna air di Danau Linow berubah karena pembiasan 
              dan pantulan sinar matahari serta belerang yang tertimbun di dalam danau.
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
              <p>Monumen Yesus</p>
            </div>
            <div className="centerForm">
              <p>
              Monumen ini menunjukkan Yesus memberkati orang-orang di Manado dan daerah 
              sekitarnya dengan mengangkat tangannya ke utara dan mengembalikannya ke bawah. 
              Jubah yang menutupi Yesus terlihat berkibar dari samping, seperti angin meniupnya. 
              Tujuan pembangunan patung ini tidak hanya ditujukan kepada komunitas nasrani yang 
              merupakan mayoritas penduduk Kota Manado, tetapi juga berfungsi sebagai simbol persamaan agama.
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
              <p>Pantai Pulisan</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai Pulisan berbeda dari pantai Sulawesi Utara lainnya. Ada tiga tempat yang 
              membuatnya unik: pemandangan pasir, batu, dan padang savanna. Selain itu, ada 
              pemandangan bawah laut yang cukup indah. Pantai bawah laut ini bagus untuk snorkeling. 
              Karang yang indah dapat ditemukan di dekat pantai, tidak perlu pergi ke tempat yang dalam.
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
              <p>Pulau Lihaga</p>
            </div>
            <div className="centerForm">
              <p>
              Pantai Pulau Lihaga memiliki pasir putih, hamparan karang di bawah laut, dan ombak 
              yang relatif tenang. Ketika angin berhembus di sekitar pantai, pengunjung senang 
              tinggal di pulau ini. Pulau Lihaga memiliki banyak lokasi yang bagus untuk foto. 
              Sambil duduk di pasir, snorkeling, dan diving, pengunjung juga dapat mengambil foto.
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
              <p>Ratahan Telu</p>
            </div>
            <div className="centerForm">
              <p>
              Dibandingkan dengan air terjun lainnya, Air Terjun Ratahan Telu memiliki pemandangan 
              yang luar biasa. Air Terjun Ratahan Telu tidak hanya menawarkan pemandangan yang indah, 
              air yang sejuk, dan udara yang bersih; Anda juga dapat menikmati kicauan burung di langit, 
              yang dapat menenangkan dan membantu menghilangkan stress.
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
