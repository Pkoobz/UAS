import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./jakarta-img/kuliner/gabus-pucung.jpeg";
import kuliner2 from "./jakarta-img/kuliner/kerak-telor.jpg";
import kuliner3 from "./jakarta-img/kuliner/soto-betawi.jpg";
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
                <div className="blog-slider__title">Gabus Pucung</div>
                <div className="blog-slider__text">
                Gabus pucung yang merupakan makanan khas daerah Bekasi dan Betawi. 
                Gabus pucung terbuat dari olahan dari ikan gabus yang terkenal punya 
                daging tebal dan gurih, kemudian dimasak dengan aneka bumbu-bumbu dan 
                menggunakan kluwek.
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
                <div className="blog-slider__title">Kerak Telor</div>
                <div className="blog-slider__text">
                Kerak Telor merupakan makanan khas Betawi yang terbuat dari 
                bahan dasar beras ketan putih, telur ayam dan ebi. 
                Kuliner asli Betawi ini kerap muncul saat perayaan besar yang ada 
                di Ibukota, salah satunya pada saat HUT Kota Jakarta.
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
                <div className="blog-slider__title">Solo Betawi</div>
                <div className="blog-slider__text">
                Soto betawi berisi daging dan jeroan sapi seperti babat dan paru. Untuk bumbunya sendiri, 
                soto betawi dilengkapi dengan cengkih, kayu manis, pala, dan serai. Soto betawi memiliki 
                kuah yang berwarna putih kental karena memakai susu atau santan.
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
