import { Container, Row, Col, Card } from 'react-bootstrap';
import './about.css';

export default function About() {
  return (
    <Container className="about-section marketing mt-5">
      {/* Sezione per l'indirizzo */}
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Dove ci troviamo</h2>
          <p className="text-center">
            Siamo situati in Via Marchese di Villabianca, 177/183 a Palermo. Vieni a trovarci per gustare le nostre pizze fatte con amore e passione!
          </p>
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
            Utilizziamo solo ingredienti di alta qualità per il nostro impasto, preparato giornalmente con farina biologica e lievito naturale. 
            La nostra pizza è leggermente croccante all'esterno e soffice all'interno, garantendo un'esperienza unica per il palato.
            Offriamo anche impasti senza glutine e integrali per venire incontro a tutte le esigenze.
          </p>
        </Col>
      </Row>

      {/* Eventuale sezione extra per ulteriori informazioni */}
      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Scopri di più sulla nostra filosofia!</Card.Title>
              <Card.Text>
                Crediamo che la pizza non sia solo cibo, ma una vera e propria arte. 
                Ecco perché ogni pizza è fatta con passione e dedizione.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
