import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./samarinda-img/kuliner/Nasi-Bekepor.jpeg";
import kuliner2 from "./samarinda-img/kuliner/Sayur Asam Kutai.jpeg";
import kuliner3 from "./samarinda-img/kuliner/Rabo Ruan.jpeg";
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
                <div className="blog-slider__title">Nasi Bekepor</div>
                <div className="blog-slider__text">
                Nasi Bekepor pada awalnya lebih dikenal sebagai makanan utama bagi kerajaan
                 Kutai Kertanegara. Tampilannya mirip seperti nasi uduk; berisi nasi putih, 
                 ikan asin, minyak sayur dan taburan rempah-rempah.
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
                <div className="blog-slider__title">Sayur Asam Kutai</div>
                <div className="blog-slider__text">
                Sayur asam kutai berbeda dengan kebanyakan sayur asam daerah lain yang diolah dari sayuran,
                makanan ini berbahan baku ikan atau kepala ikan gabus.
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
                <div className="blog-slider__title">Rabo Ruan</div>
                <div className="blog-slider__text">
                Ikan haruan merupakan ikan populer dan banyak terdapat di perairan darat Kalimatan Timur. 
                Rabo ruan merupakan nama bumbu yang disajikan bersama ikan haruan ikan haruannya diolah 
                dengan cara dibakar atau digoreng.
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
