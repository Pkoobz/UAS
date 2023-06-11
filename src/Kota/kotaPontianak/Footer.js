import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.css";

//images
import Logo from "../shared-img/logo-akreditasi.png";
import FooterImg from "../shared-img/footer.jpg";

const Footer = () => {
  return (
    <footer>
      <div
        id="footer"
        className="footer"
        style={{
          backgroundImage: `url(${FooterImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="row mt-6 d-flex flex-md-row flex-column justify-content-center align-items-center text-center pt-6 pb-6 mx-auto">
          <div className="col-md-6 text-center mb-3 mb-md-0 ">
            <h5 className="fw-bold">Indonesia Travel Guide Map</h5>
            <p>Created by Group 9</p>
            <p>&copy; 2023</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a
              id="logo"
              href="https://www.umn.ac.id/?gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qVQt97EhNy_s9RZUcjBO5DhdSBqRIu4afR-F624j4SQ2hUJ7KnAqnQaAhKlEALw_wcB"
            >
              <img src={Logo} className="img-fluid" alt="Logo Akreditasi" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
