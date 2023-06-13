import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import React from "react";
import "./about.css"; 

//images
import NichoImage from "./images/Nicho.jpeg";
import KrisImage from "./images/Kris.jpeg";
import JonathanImage from "./images/Jonathan.jpg";
import NathanImage from "./images/nathan.jpg";
import LogoImage from "./images/logo-akreditasi.png";


function About() {
  return (
    <div className="body">
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow-5-strong navbar-blur">
        <div className="container-fluid">
          <a className="navbar-brand">About Us</a>
          <a
            className="navbar-brand justify-content-end"
            href="../Homescreen/homescreen.html"
          >
            Home
          </a>
        </div>
      </nav>

      <br />

      <div className="container-about">
        <div className="card">
          <img src={NichoImage} className="profile-img" alt="Profile" />
          <h6 className="title">Nicholas A.S</h6>
          <p className="title">00000070067</p>
        </div>

        <div className="card">
          <img src={KrisImage} className="profile-img" alt="Profile" />
          <h6 className="title">Kristoffen</h6>
          <p className="title">00000069360</p>
        </div>

        <div className="card">
          <img src={JonathanImage} className="profile-img" alt="Profile" />
          <h6 className="title">Jonathan G.D</h6>
          <p className="title">00000069525</p>
        </div>

        <div className="card">
          <img src={NathanImage} className="profile-img" alt="Profile" />
          <h6 className="title">Nathanael F</h6>
          <p className="title">00000069434</p>
        </div>
      </div>

      <footer className="footer-about">
        <div className="row mt-6 d-flex flex-md-row flex-column justify-content-center align-items-center text-center pt-6 pb-6 mx-auto">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            {/* Footer content */}
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a href="https://www.umn.ac.id/">
              <img src={LogoImage} className="img-fluid" alt="Logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default About;
