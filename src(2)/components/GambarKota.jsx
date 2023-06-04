import React from "react";
import "../styles.css"
import IdGambar from "./IdGambar"

function GambarKota(props){
    return (
        <div>
            <img src={props.image} alt="Gambar Kota" id={props.id} />
        </div>
    );
}

export default GambarKota;
