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
        {/* <Route path="/Loadingscreen" element={<Loading />} /> */}
      </Routes>
    </Router>
  );
}

export default App;