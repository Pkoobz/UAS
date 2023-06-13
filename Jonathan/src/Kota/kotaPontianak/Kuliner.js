import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./pontianak-img/kuliner/bubur pedas pontianak.jpeg";
import kuliner2 from "./pontianak-img/kuliner/Chai-Kue-Tian-Mei-Li-1.jpg";
import kuliner3 from "./pontianak-img/kuliner/Kwetiau-Apollo.jpg";
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
                <div className="blog-slider__title">Bubur Pedas Pontianak</div>
                <div className="blog-slider__text">
                Beras yang ditumbuk halus adalah bahan utama bubur pedas Sambas ini. Tidak ada cabai yang 
                dimasukkan ke dalam proses memasak bubur. Kombinasi daun kesum dan kunyit yang diiris dan 
                dimasak bersama beras menghasilkan rasa gurih dan menyegarkan.
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
                <div className="blog-slider__title">Chai Kue Tian Mei Li</div>
                <div className="blog-slider__text">
                Chai Kueh, juga dikenal sebagai noodles beras, memiliki rasa yang menarik. 
                Di Pontianak, Chai Cake dijual dengan topping yang terdiri dari bengkoang, 
                kacang tanah, talas, rebung, dan kucai.
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
                <div className="blog-slider__title">Mie Tiaw Apollo</div>
                <div className="blog-slider__text">
                Sudah menjadi ikon makanan khas Pontianak, mie Tiaw adalah salah satu makanan 
                peranakan Tionghoa. Sejak tahun 1968-an, makanan ini tetap populer karena cita 
                rasanya dan cara pengolahannya yang unik. Mie Tiaw menggunakan mie yang lebar 
                dan pipih seperti kwetiaw.
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
