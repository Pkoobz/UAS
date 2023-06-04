import React from "react";
import "./styles.css";

function Footer(){
    return (
        <div className="container">
            <div className="container mt-5" id="Footer1">
                <div className="row">
                    <div className="col-sm-3" id="alamat">
                        <p>Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong, Kabupaten Tangerang, Banten 15810.</p>
                        <br />
                        <p>Telp: (021) 54220808</p>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-3" id="logoumn">
                        <img src="../Gambar/universitas-multimedia-musantara.png"><a href="https://www.umn.ac.id/en/home/"></a>
                    </div>
                </div>
            </div>
        </div>  
    );
}
export default Footer;
