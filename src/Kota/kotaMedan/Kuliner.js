import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./medan-img/kuliner/mie-gomak.jpg";
import kuliner2 from "./medan-img/kuliner/lontong-medan.jpg";
import kuliner3 from "./medan-img/kuliner/soto-medan.jpg";
import bg from "../shared-img/Kuliner_UAS.jpg";

const Kuliner = () => {
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
                <div className="blog-slider__title">Mie Gomak</div>
                <div className="blog-slider__text">
                Mi gomak adalah masakan khas suku Batak Toba dari Sumatra Utara, 
                terutama daerah sekitar Danau Toba. Mi ini juga populer di berbagai 
                daerah di Sumatra Utara dan provinsi lain di Indonesia. Dapat 
                ditemukan di berbagai daerah di Sumatra Utara, mulai dari Medan, 
                Siantar, Parapat, Labuhan Batu, Sibolga, hingga Deli Serdang.
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
                <div className="blog-slider__title">Lontong Medan</div>
                <div className="blog-slider__text">
                Lontong Medan adalah hidangan khas Kota Medan, Sumatra Utara. 
                Terdiri dari lontong dengan kuah santan kental dan berbagai 
                pelengkap seperti telur, tahu, kerupuk, dan sambal. Biasa 
                disajikan sebagai sarapan pagi yang lezat dan mengenyangkan.
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
                <div className="blog-slider__title">Soto Medan</div>
                <div className="blog-slider__text">
                Soto Medan adalah masakan khas Sumatra Utara dengan kuah 
                kuning kental berbahan dasar santan dan rempah-rempah. 
                Di dalamnya terdapat daging ayam atau sapi. Salah satu 
                tempat terkenal untuk menikmati Soto Medan adalah RM Sinar 
                Pagi di Kota Medan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Kuliner;
