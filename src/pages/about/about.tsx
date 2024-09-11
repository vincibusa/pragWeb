import { Container, Row, Col, Button,} from 'react-bootstrap';
import { FaTiktok, FaWhatsapp, FaPhone } from 'react-icons/fa'; 
import './about.css';

export default function About() {

  const navigateToJustEat = () => {
    window.location.href = "https://www.justeat.it/restaurants-prag-ristorante-pizzeria-palermo/menu";
  };
  
  return (
    <Container className="about-section marketing mt-5">
      {/* Sezione per l'indirizzo */}
      <Row className="mb-4">
      <Col>
        <h2 className="text-center">Dove ci troviamo</h2>
        <p className="text-center">
          Siamo situati in Via Marchese di Villabianca, 177/183 a Palermo. Vieni a trovarci per gustare le nostre pietanze.
        </p>
        <h3 className="text-center">Ci trovi anche su Just Eat</h3>
        <div className="d-flex justify-content-center w-100">
          <Button
            className="mt-3 w-50"
            style={{ backgroundColor: '#F9423A', color: 'white' }}
            variant="outline-dark"
            onClick={navigateToJustEat}
          >
            Just Eat
          </Button>
        </div>
      </Col>
    </Row>

    {/* Sezione Contatti */}
    <Row className="mb-4">
      <Col>
        <h2 className="text-center">Contatti</h2>
        <div className="d-flex justify-content-center w-100 mt-3">
          <Button
         
            className="mx-2 "
            style={{ backgroundColor: '#010101', color: 'white', borderRadius:9999 , aspectRatio:1}} // Colore TikTok
            onClick={() => window.open('https://www.tiktok.com/@prag_ristorantepi', '_blank')}
          >
            <FaTiktok size={24} />
          </Button>

          <Button
            className="mx-2"
            style={{ backgroundColor: '#25D366', color: 'white',borderRadius:9999 , aspectRatio:1 }} // Colore WhatsApp
            onClick={() => window.open('https://wa.me/393312203996', '_blank')}
          >
            <FaWhatsapp size={24} />
          </Button>

          <Button
            className="mx-2"
            style={{ backgroundColor: '#007BFF', color: 'white',borderRadius:9999 , aspectRatio:1 }} // Colore telefono
            onClick={() => window.location.href = 'tel:+39393312203996'}
          >
            <FaPhone size={24} />
          </Button>
        </div>
      </Col>
    </Row>

      {/* Sezione per gli orari di apertura */}
      <Row className="mb-4">
        <Col md={6}>
          <h3>Orari di Apertura</h3>
          <ul>
            <li>Lunedì: chiuso</li>
            <li>Martedì: 18:00 - 00:00</li>
            <li>Mercoledì: 18:00 - 00:00</li>
            <li>Giovedì: 18:00 - 00:00</li>
            <li>Venerdì: 18:00 - 00:00</li>
            <li>Sabato: 18:00 - 00:00</li>
            <li>Domenica: 18:00 - 00:00</li>
          </ul>
        </Col>

        {/* Sezione per l'impasto */}
        <Col md={6}>
          <h3>L'Impasto della Nostra Pizza</h3>
          <p>
          Il nostro impasto per pizza contemporanea è preparato ogni giorno con farina di grano tenero tipo 0 arricchita con germe di grano. Utilizziamo un pre-fermento a freddo, con maturazione in frigo per 24 ore e idratazione al 75%, garantendo un’alta digeribilità. Con una maturazione completa di 48/72 ore, otteniamo una pizza dai bordi alti, soffici e leggeri, che esalta i sapori e offre un’esperienza gustativa moderna e autentica. </p>
          <h3>
            La nostra cucina
          </h3>
          <p>
          La nostra cucina unisce tradizione mediterranea e modernità, ponendo grande attenzione al territorio e alla stagionalità. Se cerchi un ristorante di pesce in via Marchese di Villabianca, PRAG è la scelta perfetta. Offriamo piatti preparati con ingredienti freschi e di qualità, che variano durante l'anno per rispettare i ritmi del mare e della terra. Inoltre, disponiamo di opzioni senza glutine, rendendoci un punto di riferimento per chi cerca un ristorante rinomato e adatto a tutti. Vieni a scoprire la nostra proposta culinaria, dove il sapore autentico incontra l’innovazione.
          </p>
  
        </Col>
      </Row>

    
    </Container>
  );
}
