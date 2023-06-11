import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Padang from './Kota/kotaPadang/Padang';
import Jakarta from './Kota/kotaJakarta/Jakarta';
import Medan from './Kota/kotaMedan/Medan';
import Jayapura from './Kota/kotaJayapura/Jayapura';
import Denpasar from './Kota/kotaDenpasar/Denpasar';
import Makassar from './Kota/kotaMakassar/Makassar';
import About from './About/About';	

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
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;