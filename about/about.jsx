import React from "react";
import Card from "Card";
import infoguide from "";
import "./style.css";
function About(){
    return(
    <div>
    
    <div style="background-color:darkgray"><h1 style="text-align: center;">About Us</h1></div>

    <div class="container">
    <div class="card">
    <img src="./images/Nicho.jpeg" class="profile-img"/>
    <h5 class="title">Nicholas Aprileus S</h5>
    <h6 class="title">00000070067</h6>
    <a href="https://www.instagram.com/nicholas_sukhadda/"><img src="./images/Instagram.png" alt="Instagram logo" style="width: 40px; border-radius: 50%; margin: 10px;"/></a>
    </div>

    <div class="card">
    <img src="./images/Kris.jpeg" class="profile-img"/>
    <h5 class="title">Kristoffen</h5>
    <h6 class="title">00000069360</h6>
    <a href="https://www.instagram.com/p_k.oobz/"><img src="./images/Instagram.png" alt="Instagram logo" style="width: 40px; border-radius: 50%; margin: 10px;"/></a>
    </div>

    <div class="card">
    <img src="./images/Jonathan.jpg" class="profile-img"/>
    <h5 class="title">Jonathan Gautama D</h5>
    <h6 class="title">00000069525</h6>
    <a href="https://www.instagram.com/jonathan__djuasa/"><img src="./images/Instagram.png" alt="Instagram logo" style="width: 40px; border-radius: 50%; margin: 10px;"/></a>
    </div>

    <div class="card">
    <img src="./images/nathan.jpg" class="profile-img"/>
    <h5 class="title">Nathanael Felix</h5>
    <h6 class="title">00000069434</h6>
    <a href="https://www.instagram.com/nathanaelfelix.1/"><img src="./images/Instagram.png" alt="Instagram logo" style="width: 40px; border-radius: 50%; margin: 10px;"/></a>
    </div>
    </div>

/    <footer>
    <div class="row mt-3 d-flex flex-md-row flex-column justify-content-between align-items-center text-center pt-3 pb-3 mx-auto">
    <div class="col-md-6 text-center mb-3 mb-md-0">
        <h5 class="fw-bold">Missyue Clicker</h5>
        <p>Created by Group 9</p>
        <p>&copy copyright 2023</p>
    </div>
    <div class="col-md-6 d-flex justify-content-center">
        <a href="https://www.umn.ac.id/?gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qVQt97EhNy_s9RZUcjBO5DhdSBqRIu4afR-F624j4SQ2hUJ7KnAqnQaAhKlEALw_wcB"><img src="../images/logo-akreditasi.png" class="img-fluid"/></a>
    </div>
    </div>
    </footer>
    </div>
    )
}

export default About;
