import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Padang from './Kota/kotaPadang/Padang';
import About from './About/About';	

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kota/Padang" element={<Padang />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;