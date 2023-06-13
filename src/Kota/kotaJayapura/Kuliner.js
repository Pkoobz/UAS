import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./jayapura-img/jayapura/kuliner/keladi-tumbuk.jpg";
import kuliner2 from "./jayapura-img/jayapura/kuliner/ikkan-bungkus.jpg";
import kuliner3 from "./jayapura-img/jayapura/kuliner/martabak-sagu.jpg";
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
                <div className="blog-slider__title">Keladi Tumbuk</div>
                <div className="blog-slider__text">
                Keladi tumbuk merupakan hidangan khas masyarakat Biak berupa rebusan talas yang ditumbuk. 
                Biasanya, keladi tumbuk disajikan dengan sayur pakis, ikan suir asap, dan sambak. Keladi 
                tumbuk memiliki tekstur layaknya bubur bayi, lembut dengan rasa yang tawar.
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
                <div className="blog-slider__title">Ikan Bungkus</div>
                <div className="blog-slider__text">
                Rasa yang menonjol dari Ikan Bungkus khas Papua adalah rasa asinnya.
                Dalam hidangan ini, garam merupakan bagian yang penting karena membantu 
                menghilangkan getah yang keluar dari daun talas.
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
                <div className="blog-slider__title">Martabak Sagu</div>
                <div className="blog-slider__text">
                Makanan ini biasanya disajikan sebagai kudapan untuk menyambut 
                tamu oleh masyarakat Papua, khususnya oleh masyarakat Papua barat.
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
