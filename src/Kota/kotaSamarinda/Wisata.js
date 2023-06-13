import React from "react";
import "../../styles.css";
import { Parallax } from "react-parallax";
import "bootstrap/dist/css/bootstrap.css";

//images
import Road from "../shared-img/Wisata_UAS.jpg";
import wisata1 from "./samarinda-img/wisata/Pulau-Kumala-Tenggarong.jpeg";
import wisata2 from "./samarinda-img/wisata/Samarinda-Islamic-Center.jpeg";
import wisata3 from "./samarinda-img/wisata/Wisata-Air-Terjun-Pinang-Seribu.jpeg";
import wisata4 from "./samarinda-img/wisata/Teluk-Lerong-Garden.jpg";
import wisata5 from "./samarinda-img/wisata/Desa-Budaya-Pampang.jpeg";

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
              <p>Pulau</p>
            </div>
            <div className="centerForm">
              <p>
                Pulau Kumala merupakan daerah delta di Sungai Mahakam yang
                memanjang di sebelah Barat Kota Tenggarong, Kabupaten Kutai
                Kartanegara. Dimulai pada tahun 2000, Pulau Kumala dibangun
                menjadi daerah wisata. Namun semenjak Bupati Syaukani Hasan
                Rais, yang mendirikan pulau ini, terjegal kasus korupsi pada
                tahun 2006, pembangunan Pulau Kumala menjadi mangkrak.
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
              <p>Islamic Center</p>
            </div>
            <div className="centerForm">
              <p>
                Masjid Islamic Center Samarinda (MICS) menjadi ikon syiar Islam
                yang dibanggakan masyarakat kota setempat dan Provinsi
                Kalimantan Timur umumnya. Masjid yang berlokasi di Kelurahan
                Teluk Lerong Ulu, Kota Samarinda, Kalimantan Timur, itu tak jauh
                dari tepi Sungai Mahakam. Dengan luas bangunan utama yang
                mencapai 43.500 meter persegi, rumah ibadah ini merupakan masjid
                terbesar kedua di seluruh Asia Tenggara, yakni sesudah Masjid
                Istiqlal Jakarta.
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
              <p>Pinang Seribu</p>
            </div>
            <div className="centerForm">
              <p>
                Lokasi Air Terjun Pinang Seribu terletak di daerah sempaja,
                dengan alamat Kelurahan Sempaja Utara, Kecamatan Samarinda
                Utara, Kota Samarinda, Provinsi Kalimantan Timur. Air Terjun
                Pinang Seribu merupakan air terjun yang tidak terlalu tinggi.
                Ketinggian Air Terjun Pinang Seribu sekitar 5 meter, dengan
                kemiringan hanya 45 derajat. Airnya sangat jernih, namun di
                waktu-waktu tertentu kondisi airnya berubah kecoklat-coklatan.
                View di sekitar air terjun di dominasi bebatuan besar.
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
              <p>Teluk</p>
            </div>
            <div className="centerForm">
              <p>
                Wisata Teluk Lerong Garden tidaklah sulit untuk ditemukan. Sebab
                destinasi ini berada di tempat yang terbilang sangat strategis.
                Dari pusat kota saja tidak terlalu jauh. Lebih tepatnya
                destinasi ini berada di Jalan R. E. martadinata, Teluk Lerong
                Ilir, Samarinda Ulu, Kota Samarinda, Kalimantan Timur. Di tengah
                banyak pilihan wisata alam lain, destinasi cantik ini terus di
                gemari pengunjung. Sebab tawaran keindahan pemandangan begitu
                tersaji secara sempurna.
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
              <p>Desa</p>
            </div>
            <div className="centerForm">
              <p>
                Desa Pampang terletak sekitar 17 Km arah Utara dari Terminal
                Lempake. Kawasan wisata budaya ini merupakan hasil migrasi
                penduduk desa long lis Apo Kayan Kabupaten Bulungan pada tahun
                1973. Daya tarik utama yang dapat disaksikan adalah rumah adat
                Lamin, tari tarian, wanita dayak telinga panjang, upacara adat
                serta kehidupan sehari- hari suku dayak kenyah secara lebih
                dekat dimana mayoritas mata pencahariannya bercocok tanam.
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
