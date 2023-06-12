import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./padang-img/kuliner/rendang.webp";
import kuliner2 from "./padang-img/kuliner/sate-danguang.jpg";
import kuliner3 from "./padang-img/kuliner/bika-talago.jpg";
import bg from "../shared-img/kuliner.png";

const KulinerSection = () => {
  return (
    <section
      id="kuliner"
      className="justify-content-center align-items-center parallax kuliner"
    >
      <Parallax bgImage={bg} strength={300} smooth={true}>
        <div className="br"></div>

        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div
                className="blog-slider__img blog-slider__img1"
                style={{
                  backgroundImage: `url(${kuliner1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">Top 1</span>
                <div className="blog-slider__title">Rendang</div>
                <div className="blog-slider__text">
                  Rendang adalah hidangan khas dari daerah Padang, Sumatra
                  Barat. Daging dimasak dalam rempah-rempah dengan santan hingga
                  kuah meresap dan daging menjadi empuk. Rendang terkenal
                  sebagai salah satu hidangan daging terlezat di dunia.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div
                className="blog-slider__img blog-slider__img2"
                style={{
                  backgroundImage: `url(${kuliner2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <img src="" alt="" />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">Top 2</span>
                <div className="blog-slider__title">Sate Danguang</div>
                <div className="blog-slider__text">
                  Sate Danguang-Danguang adalah hidangan khas Minangkabau dari
                  Danguang-danguang, Lima Puluh Kota. Memiliki kesamaan dengan
                  sate Padang karena menggunakan daging sapi, tetapi memiliki
                  bumbu yang berbeda. Kuahnya lebih segar dengan warna kuning,
                  berbeda dengan sate Padang yang lebih pedas dan tajam.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div
                className="blog-slider__img blog-slider__img3"
                style={{
                  backgroundImage: `url(${kuliner3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <img src="" alt="" />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">Top 3</span>
                <div className="blog-slider__title">Bika Talago</div>
                <div className="blog-slider__text">
                  Bika Talago adalah kue tradisional khas Kota Padang, Sumatra
                  Barat. Terbuat dari adonan tepung terigu, gula, santan, dan
                  telur yang dipanggang hingga lembut dan berlapis-lapis.
                  Biasanya dihiasi dengan taburan wijen atau kacang almond.
                  Populer sebagai oleh-oleh khas dari daerah tersebut.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default KulinerSection;
