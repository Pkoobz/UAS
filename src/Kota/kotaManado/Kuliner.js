import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./manado-img/kuliner/ayam-woku-belangga.jpeg";
import kuliner2 from "./manado-img/kuliner/ikan-kuah-asam.jpg";
import kuliner3 from "./manado-img/kuliner/mie-cakalang.jpg";
import bg from "../shared-img/kuliner.png";

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
                <div className="blog-slider__title">Ayam Woku Belangga</div>
                <div className="blog-slider__text">
                Ayam Woku dibuat dari ayam yang dimasak dengan bumbu kuning pedas. 
                Kuliner ini memiliki rasa yang sangat kaya dengan rasa lezat, gurih, 
                pedas, dan wangi yang berasal dari berbagai macam rempah yang digunakan. 
                Bumbunya yang harus medok dan rasa pedasnya membuat masakan ini unik. 
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
                <div className="blog-slider__title">Ikan Kuah Asam</div>
                <div className="blog-slider__text">
                Ini adalah sup ikan dengan kuah kuning bening. Karena ada belimbing wuluh 
                di dalamnya, hidangan ini memiliki rasa asam dan gurih yang segar. Jangan 
                lupa menambahkan ikan yang dipotong besar-besar, cabai yang masih utuh, dan irisan tomat.
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
                <div className="blog-slider__title">Mie Cakalang</div>
                <div className="blog-slider__text">
                Memiliki aroma kuat ikan cakalang, mie ini biasanya disajikan dengan bumbu 
                yang terdiri dari bawang merah dan daun bawang. Menggabungkan sedikit merica 
                ke dalam kuah bening mie cakalang memberikan rasa yang sedikit pedas di lidah.
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
