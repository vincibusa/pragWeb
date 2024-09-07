
import Barra from './components/Barra';
import Gallery from './pages/galleria/Gallery';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Reservations from './pages/prenotazioni/Prenotazioni';
// import About from './pages/about/about';


export default function App() {
  return (
    <>
      <Barra />
      <div id="home">
        <Home />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="prenotazioni">
      <Reservations />
      </div>
      <div id="Galleria">
      <Gallery />
      </div>
      {/* <div id="about">
        <About />
      </div> */}
    </>
  );
}