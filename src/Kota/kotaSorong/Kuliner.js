import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./sorong-img/kuliner/Abon-Gulung.jpeg";
import kuliner2 from "./sorong-img/kuliner/Keripik-Keladi.jpeg";
import kuliner3 from "./sorong-img/kuliner/Martabak-Sagu.jpeg";
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
                <div className="blog-slider__title">Abon Gulung</div>
                <div className="blog-slider__text">
                Dinamakan Abon Gulung karena memang pada dasarnya makanan ini adalah abon dalam jumlah banyak 
                yang dibungkus dengan roti gulung. Abon ini sangat lembut ketika digigit, namun sangat padat 
                ketika mulai dikunyah. Begitu padatnya, hingga menyantap makanan ini satu saja sudah membuat 
                perut kenyang.
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
                <div className="blog-slider__title">Keripik Keladi</div>
                <div className="blog-slider__text">
                Keripik keladi atau lebih dikenal dengan keripik talas adalah keripik khas yang dibuat di Papua 
                dengan campuran talas datau biasa disebut keladi dengan beragam bumbu tradisional seperti bawang 
                putih, garam, cabe rawit, dan kemudian digoreng.
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
                Martabak sagu memiliki cita rasa yang manis dan gurih. Martabak ini diolah dari bahan sagu 
                yang sudah dihaluskan kemudian digoreng dan diberi gula aren atau gula merah.
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
