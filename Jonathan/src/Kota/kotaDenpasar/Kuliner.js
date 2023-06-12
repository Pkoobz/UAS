import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Parallax } from "react-parallax";

//images
import kuliner1 from "./denpasar-img/kuliner/ayam-betutu.jpg";
import kuliner2 from "./denpasar-img/kuliner/babi-guling.png";
import kuliner3 from "./denpasar-img/kuliner/be-pasih.webp";
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
                <div className="blog-slider__title">Ayam Betutu</div>
                <div className="blog-slider__text">
                Ayam betutu adalah salah satu kuliner di Bali yang cukup terkenal di kalangan wisatawan, 
                khususnya orang Indonesia. Hidangan satu ini kaya akan rempah-rempah, membuat rasa pedas 
                bersatu sempurna dengan rasa gurih dan sedikit rasa smokey. Rumah makan ayam betutu yang 
                terkenal adalah RM. Ayam Betutu Khas Gilimanuk. Rumah makan ini juga membuka cabang di Jln. 
                Raya Kuta dan Jln. Raya Denpasar.
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
                <div className="blog-slider__title">Babi Guling</div>
                <div className="blog-slider__text">
                Babi guling adalah salah satu menu babi yang banyak digemari. Untuk membuat babi 
                lebih enak dan harum, banyak rumah makan memasukkan bumbu base genep dan daun kelapa 
                ke dalam perutnya. Makanan ini dapat dinikmati dengan lawar dan semangkuk jukut ares 
                supaya lebih nikmat. Pulau Dewata terkenal akan olahan babinya yang nikmat, tekstur 
                daging yang empuk ditambah rempah-rempahnya.
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
                <div className="blog-slider__title">Be Pasih Mesambel Matah</div>
                <div className="blog-slider__text">
                Dalam bahasa orang Bali, be pasih mesambel matah memiliki arti olahan ikan laut dengan sambal mentah. 
                Sesuai dengan namanya, ikan laut segar dibalut dengan bumbu khusus, kemudian dipanggang di atas api sedang. 
                Proses pembakaran ini biasanya dilakukan menggunakan arang dari batok supaya hasilnya lebih nikmat. 
                Ikan kemudian disajikan lengkap dengan sambal merah dan nasi hangat.
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
