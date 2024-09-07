import { Card } from 'react-bootstrap';
import foto1 from '../../assets/foto1.jpeg';
import foto2 from '../../assets/foto2.jpeg';
import foto3 from '../../assets/foto3.jpeg';
import foto4 from '../../assets/foto4.jpeg';
import foto5 from '../../assets/foto5.jpeg';

const images = [foto1, foto2, foto3, foto4, foto5];

export default function Gallery() {
  return (
    <div className="container text-center" >
          <div style={{marginTop:'40px', marginBottom:'20px'}}>
    <h1>Galleria</h1>
    </div>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-6 mb-4">
            <Card>
              <Card.Img style={{ borderRadius: 15, objectFit: 'cover' }} variant="top" src={image} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}