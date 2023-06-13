<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Padang from './Kota/kotaPadang/Padang';
import Jakarta from './Kota/kotaJakarta/Jakarta';
import Medan from './Kota/kotaMedan/Medan';
import Jayapura from './Kota/kotaJayapura/Jayapura';
import Denpasar from './Kota/kotaDenpasar/Denpasar';
import Makassar from './Kota/kotaMakassar/Makassar';
import Manado from './Kota/kotaManado/Manado';
import Pontianak from './Kota/kotaPontianak/Pontianak';
import Samarinda from './Kota/kotaSamarinda/Samarinda';
import Sorong from './Kota/kotaSorong/Sorong';
import About from './About/About';
import Map from "./Map";	
// import LoadingScreen from './Loadingscreen/Loadingscreen';
=======
import React, { useState } from "react";
import { NavLink, useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsernameContext from "./UsernameContext";
import Padang from "./Kota/kotaPadang/Padang";
import Jakarta from "./Kota/kotaJakarta/Jakarta";
import Medan from "./Kota/kotaMedan/Medan";
import Jayapura from "./Kota/kotaJayapura/Jayapura";
import Denpasar from "./Kota/kotaDenpasar/Denpasar";
import Makassar from "./Kota/kotaMakassar/Makassar";
import Manado from "./Kota/kotaManado/Manado";
import Pontianak from "./Kota/kotaPontianak/Pontianak";
import Samarinda from "./Kota/kotaSamarinda/Samarinda";
import Sorong from "./Kota/kotaSorong/Sorong";
import About from "./About/About";
import Map from "./Map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kota/Padang" element={<Padang />} />
        <Route path="/kota/Jakarta" element={<Jakarta />} />
        <Route path="/kota/Medan" element={<Medan />} />
        <Route path="/kota/Jayapura" element={<Jayapura />} />
        <Route path="/kota/Denpasar" element={<Denpasar />} />
        <Route path="/kota/Makassar" element={<Makassar />} />
        <Route path="/kota/Manado" element={<Manado />} />
        <Route path="/kota/Pontianak" element={<Pontianak />} />
        <Route path="/kota/Samarinda" element={<Samarinda />} />
        <Route path="/kota/Sorong" element={<Sorong />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </StrictMode>
);

export default function App() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setErrorMessage("Maaf, tidak ada username");
    } else {
      console.log("Username:", username);
      navigate("/map", { state: { username } });
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrorMessage("");
  };

  const navigate = useNavigate();
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kota/Padang" element={<Padang />} />
        <Route path="/kota/Jakarta" element={<Jakarta />} />
        <Route path="/kota/Medan" element={<Medan />} />
        <Route path="/kota/Jayapura" element={<Jayapura />} />
        <Route path="/kota/Denpasar" element={<Denpasar />} />
        <Route path="/kota/Makassar" element={<Makassar />} />
        <Route path="/kota/Manado" element={<Manado />} />
        <Route path="/kota/Pontianak" element={<Pontianak />} />
        <Route path="/kota/Samarinda" element={<Samarinda />} />
        <Route path="/kota/Sorong" element={<Sorong />} />
        <Route path="/about" element={<About />} />
        <Route path="/Map" element={<Map />} />
<<<<<<< HEAD
        {/* <Route path="/Loadingscreen" element={<Loading />} /> */}
=======
        <Route path="/" element={<Login />} />
>>>>>>> 61c4896 (login)
      </Routes>
    </Router>
  );
<<<<<<< Updated upstream
}

export default App;
=======
}
>>>>>>> Stashed changes
