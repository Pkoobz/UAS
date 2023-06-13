import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./makassar-img/kuliner/gogoso.jpg";
import kuliner2 from "./makassar-img/kuliner/sop-konro.webp";
import kuliner3 from "./makassar-img/kuliner/Pallubasa.jpg";
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
                <div className="blog-slider__title">Gogos</div>
                <div className="blog-slider__text">
                Makanan lebaran seperti bugis Makassar adalah bagian dari gogoso. 
                Beras ketan yang dibakar di dalam bungkus daun pisang adalah bahan 
                dasar gogoso. Orang Makassar sering makan ini dengan telur asin.
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
                <div className="blog-slider__title">Sop Konro</div>
                <div className="blog-slider__text">
                Sop Konro berupa iga saji dalam sup atau dibakar. Kuahnya tidak begitu 
                kental dengan tambahan rempah - rempah dan siraman bumbu kacang
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
                <div className="blog-slider__title">Kuah Pallubasa</div>
                <div className="blog-slider__text">
                Kuah pallubasa memiliki warna coklat kekuningan karena kunyit. 
                Pallubasa dihidangkan dengan menggunakan kuning telur setengah 
                matang dan taburan dari kelapa gorong.
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
