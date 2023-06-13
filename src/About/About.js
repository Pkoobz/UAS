import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import React from "react";
import "./about.css";

import NichoImage from "./images/Nicho.jpeg";
import KrisImage from "./images/Kris.jpeg";
import JonathanImage from "./images/Jonathan.jpg";
import NathanImage from "./images/nathan.jpg";
import LogoImage from "./images/logo-akreditasi.png";
import FooterImage from "./images/footer.png";
import AboutBody from "./images/about.jpg";

function About() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              About Us
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Map"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="body"
          style={{
            backgroundImage: `url(${AboutBody})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "fixed",
            padding: "10%",
            display: "grid",
            placeItems: "center",
            width: "100%"
          }}
        >
          <div>
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
                <img
                  src={JonathanImage}
                  className="profile-img"
                  alt="Profile"
                />
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
              <div
                className="row mt-6 d-flex flex-md-row flex-column justify-content-center align-items-center text-center pt-6 pb-6 mx-auto"
                style={{
                  backgroundImage: `url(${FooterImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
                <div className="col-md-6 text-center mb-3 mb-md-0">
                <h5 class="fw-bold">Indonesia Travel Guide Map</h5>
                  <p>Created by Group 9</p>
                  <p>&copy; 2023</p>
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
      </div>
    </div>
  );
}

export default About;
