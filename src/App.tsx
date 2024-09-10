import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Barra from './components/Barra';
import Gallery from './pages/galleria/Gallery';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Reservations from './pages/prenotazioni/Prenotazioni';
import About from './pages/about/about';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true }); // Inizializza AOS con le impostazioni desiderate
  }, []);

  return (
    <>
      <Barra />
      <div id="home" data-aos="fade-up">
        <Home />
      </div>
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      <div id="menu" data-aos="fade-up">
        <Menu />
      </div>
      <div id="prenotazioni" data-aos="fade-up">
        <Reservations />
      </div>
      <div id="Galleria" data-aos="fade-up">
        <Gallery />
      </div>

    </>
  );
}
