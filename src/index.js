import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import App from "./App";
import Map from "./Map";
import About from "./About/About";
import Padang from "./Kota/kotaPadang/Padang";
import Medan from "./Kota/kotaMedan/Medan";
import Pontianak from "./Kota/kotaPontianak/Pontianak";
import Samarinda from "./Kota/kotaSamarinda/Samarinda";
import Makassar from "./Kota/kotaMakassar/Makassar";
import Manado from "./Kota/kotaManado/Manado";
import Jakarta from "./Kota/kotaJakarta/Jakarta";
import Denpasar from "./Kota/kotaDenpasar/Denpasar";
import Jayapura from "./Kota/kotaJayapura/Jayapura";
import Sorong from "./Kota/kotaSorong/Sorong";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Index() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route index path="/" element={<App />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/About" element={<About />} />
      <Route path="/Padang" element={<Padang />} />
      <Route path="/Medan" element={<Medan />} />
      <Route path="/Pontianak" element={<Pontianak />} />
      <Route path="/Samarinda" element={<Samarinda />} />
      <Route path="/Makassar" element={<Makassar />} />
      <Route path="/Manado" element={<Manado />} />
      <Route path="/Jakarta" element={<Jakarta />} />
      <Route path="/Denpasar" element={<Denpasar />} />
      <Route path="/Jayapura" element={<Jayapura />} />
      <Route path="/Sorong" element={<Sorong />} />
    </Routes>
  );
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </StrictMode>
);
