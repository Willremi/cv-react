import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Formations from './pages/Formations';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dwwm from './pages/Dwwm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/competences' element={<Knowledges />} />
        <Route path='/competences/DWWM' element={<Dwwm />} />
        <Route path='/formations' element={<Formations />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
