import React, { useState } from 'react';
import './homescreen.css';

function Map() {
  const [detailsBoxVisible, setDetailsBoxVisible] = useState(false);
  const [detailsContent, setDetailsContent] = useState('');

  function showDetailsBox(place) {
    let content = (
      <div>
        <button className="close-button" onClick={closeDetails}>X</button>
        <h1>{place}</h1>
        <img src={`../img/${place}.jpg`} alt="Gallery Image" className="max-size" /><br/><br/>
        <div className="tooltip-content">
          <p>{getDescription(place)}</p>
        </div>
        <br/><br/><a href="https://www.google.com">See More...</a>
      </div>
    );

    setDetailsContent(content);
    setDetailsBoxVisible(true);
  }

  function closeDetails() {
    setDetailsBoxVisible(false);
  }

  function getDescription(place) {
    if (place === 'Padang') {
      return 'Padang adalah kota di Provinsi Sumatera Barat, Indonesia. Terkenal dengan keindahan alamnya dan masakan Padang yang lezat, Padang menawarkan pengalaman wisata yang menarik. Anda dapat menikmati pantai-pantai yang indah seperti Pantai Air Manis dan Pantai Padang Padang, serta menjelajahi warisan budaya Minangkabau seperti Istana Pagaruyung. Jelajahi kota ini dan nikmati keindahan alam serta kuliner yang khas.';
    }
    if (place === 'Medan') {
      return 'Medan, terletak di Sumatera Utara, adalah kota terbesar di Pulau Sumatera, Indonesia. Dikenal sebagai "Kota Melayu Deli," Medan memiliki sejarah yang kaya dan budaya yang beragam. Kota ini memiliki pesona yang unik dengan gabungan kekayaan warisan budaya Melayu, Tionghoa, dan Eropa. Medan juga menjadi gerbang utama untuk menjelajahi keindahan alam Sumatera Utara, termasuk Danau Toba yang terkenal. Dengan berbagai atraksi wisata, kuliner yang lezat, dan keramahan penduduknya, Medan adalah tempat yang menarik untuk dijelajahi dan dinikmati.';
    }
    if (place === 'Pontianak') {
      return 'Pontianak, "Kota Khatulistiwa," terletak di Provinsi Kalimantan Barat, Indonesia. Dengan Equator Monument yang menandai garis khatulistiwa dan Sungai Kapuas yang indah, kota ini menawarkan pengalaman unik. Jelajahi warisan budaya seperti Masjid Jami Pontianak dan Kota Tua Pontianak. Nikmati pesona kota ini yang kaya akan keindahan alam dan budaya.';
    }
    if (place === 'Samarinda') {
      return 'Samarinda adalah ibu kota Provinsi Kalimantan Timur, Indonesia. Terkenal dengan Sungai Mahakam yang indah dan hutan bakau yang luas, kota ini menawarkan pengalaman alam yang menarik. Nikmati pemandangan sungai yang menakjubkan dan jelajahi kekayaan alamnya.';
    }
    if (place === 'Makassar') {
      return 'Makassar, juga dikenal sebagai Ujung Pandang, adalah kota terbesar di Sulawesi Selatan, Indonesia. Terletak di pantai barat daya pulau ini, Makassar menawarkan sejarah yang kaya dan kuliner lezat. Jelajahi Benteng Rotterdam dan nikmati makanan khas seperti Coto Makassar dan Konro. Nikmati pesona kota ini yang mencerminkan kekayaan budaya dan keindahan alam Sulawesi Selatan.';
    }
    if (place === 'Manado') {
      return 'Manado, ibu kota Provinsi Sulawesi Utara, Indonesia, terkenal dengan keindahan alam bawah lautnya. Taman Laut Bunaken adalah tujuan utama untuk menyelam dan menikmati keanekaragaman terumbu karang yang menakjubkan. Kota ini juga memiliki warisan budaya yang kaya dengan pengaruh suku Minahasa. Nikmati pesona alam dan budaya Manado dalam perjalanan Anda.';
    }
    if (place === 'Jakarta') {
      return 'Jakarta adalah ibu kota dan kota terbesar di Indonesia. Terletak di Pulau Jawa, Jakarta adalah pusat politik, ekonomi, dan budaya negara ini. Kota ini menawarkan berbagai atraksi, seperti Monumen Nasional (Monas), Taman Mini Indonesia Indah, dan Ancol Dreamland. Selain itu, Jakarta juga memiliki pusat perbelanjaan yang terkenal, seperti Plaza Indonesia dan Grand Indonesia. Dengan kehidupan malam yang beragam, kuliner lezat, dan keramahan penduduknya, Jakarta adalah tempat yang menarik untuk dijelajahi dan dinikmati.';
    }
    if (place === 'Denpasar') {
      return 'Denpasar adalah ibu kota Provinsi Bali, Indonesia. Terletak di pantai selatan Pulau Bali, kota ini merupakan pusat administrasi, perdagangan, dan budaya Bali. Jelajahi Pura Jagatnatha, Pasar Badung, dan museum-museum yang menampilkan seni dan budaya Bali. Nikmati pesona budaya Bali dan suasana pantai yang indah di Denpasar.';
    }
    if (place === 'Jayapura') {
      return 'Jayapura adalah ibu kota Provinsi Papua, Indonesia, yang terletak di pantai utara Pulau Papua. Kota ini dikenal dengan keindahan alamnya yang menakjubkan, dengan pegunungan yang mempesona dan air terjun yang spektakuler. Selain itu, Jayapura juga memiliki pesona pantai yang memikat dan danau-danau yang menyejukkan. Tempat ini merupakan surga bagi para pecinta alam dan penggemar petualangan yang ingin menjelajahi kekayaan alam Papua yang eksotis.';
    }
    if (place === 'Sorong') {
      return 'Sorong, terletak di Provinsi Papua Barat, Indonesia, adalah gerbang utama untuk menjelajahi keindahan alam Papua yang menakjubkan. Kota ini terkenal sebagai titik awal untuk menuju Raja Ampat, sebuah surga bagi penyelam dengan keanekaragaman hayati bawah laut yang luar biasa. Selain itu, Sorong juga menawarkan pantai-pantai yang indah, pulau-pulau eksotis, dan hutan-hutan yang mempesona. Bagi para petualang dan pencinta alam, Sorong menjadi pintu masuk yang menarik untuk menjelajahi keajaiban alam yang tak ternilai di Papua Barat.';
    }
    return '';
  }

  return (
    <div>
      <ul className="navbar">
        <li>Travelindo</li>
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Tentang</a></li>
        <li><a href="#">Produk</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
      <div className="container">
        <div className="map-container">
          <div className="image-container">
            <img src="../img/Indo_map.png" alt="Image" className="map"/>

            <div class="point" style="left: 157px; top: 253px;" onclick="Padang('Padang')"></div>
            <div class="point" style="left: 103px; top: 117px;" onclick="Medan('Medan')"></div>
            <div class="point" style="left: 406px; top: 232px;" onclick="Pontianak('Pontianak')"></div>
            <div class="point" style="left: 618px; top: 250px;" onclick="Samarinda('Samarinda')"></div>
            <div class="point" style="left: 678px; top: 377px;" onclick="Makassar('Makassar')"></div>
            <div class="point" style="left: 821px; top: 189px;" onclick="Manado('Manado')"></div>
            <div class="point" style="left: 332px; top: 413px;" onclick="Jakarta('Jakarta')"></div>
            <div class="point" style="left: 561px; top: 479px;" onclick="Denpasar('Denpasar')"></div>
            <div class="point" style="left: 1252px; top: 305px;" onclick="Jayapura('Jayapura')"></div>
            <div class="point" style="left: 1003px; top: 257px;" onclick="Sorong('Sorong')"></div>
          </div>
          {detailsBoxVisible && <div className="hover-box" id="detailsBox">{detailsContent}</div>}
        </div>
      </div>
    </div>
  );
}

export default Map;
