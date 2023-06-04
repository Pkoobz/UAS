import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow-5-strong navbar-blur">
      <div className="container-fluid">
        <a className="navbar-brand" href="../../Homescreen/homescreen.html">
          TravelIndo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#awal">
                Kota
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#wisata">
                Wisata
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kuliner">
                Kuliner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
