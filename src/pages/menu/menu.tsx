
import { Container,  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image3 from '../../assets/image3.jpeg'
import ristorante from '../../assets/ristorante.jpeg'
import antipasti from '../../assets/antipasti.jpeg'
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();

const navigateToMenuAntipasti = () => {
   
  navigate('/menu-antipasti');
};
const navigateToMenuPizzeria = () => {
   
    navigate('/menu-pizzeria');
  };
  const navigateToMenuRistorante = () => {
   
    navigate('/menu-ristorante');
  };
  return (
<Container className="marketing mt-5 text-center">
    <div>
    <h1>Menu</h1>
    </div>
    <Card className='mt-5' style={{ width: '100%' , border:'none', borderRadius:0}}>
      <Card.Img style={{borderRadius:0}} variant="top" src={antipasti} />
      <Card.Body>
        <Card.Title >Antipasti</Card.Title>
    
        <Button className='mt-3 w-50' variant="outline-dark" onClick={navigateToMenuAntipasti}>Leggi</Button>
      </Card.Body>
    </Card>
<Card className='mt-5' style={{ width: '100%' , border:'none', borderRadius:0}}>
      <Card.Img style={{borderRadius:0}} variant="top" src={image3} />
      <Card.Body>
        <Card.Title >Menu Pizzeria</Card.Title>
    
        <Button className='mt-3 w-50' variant="outline-dark"  onClick={navigateToMenuPizzeria}>Leggi</Button>
      </Card.Body>
    </Card>
    <Card className='mt-5' style={{ width: '100%' , border:'none', borderRadius:0}}>
      <Card.Img style={{borderRadius:0}} variant="top" src={ristorante} />
      <Card.Body>
        <Card.Title >Menu Ristorante</Card.Title>
    
        <Button className='mt-3 w-50' variant="outline-dark"  onClick={navigateToMenuRistorante}>Leggi</Button>
      </Card.Body>
    </Card>
  </Container>
  )
}
