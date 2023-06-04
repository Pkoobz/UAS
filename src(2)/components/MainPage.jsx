import React from "react";
import MyLink from "./Mylink";
import "./style.css";

function MainPage(props) {
    return (
        <div className="container">
            <h1>{props.kota}</h1>
        </div>
    );
}

export default Mainpage;