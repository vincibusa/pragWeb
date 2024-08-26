import './home.css';
import {  Button, Carousel } from 'react-bootstrap';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import about from '../../assets/about.jpg';
export default function Home() {
  return (
    <div>


    <main >
      <Carousel>
        <Carousel.Item>
        <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      style={{ height: '500px', objectFit: 'cover' }} 
    />
          <Carousel.Caption >
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <Button variant="outline-light" href="#">Prenota un tavolo</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
      className="d-block w-100"
      src={image2}
      alt="First slide"
      style={{ height: '500px', objectFit: 'cover' }} 
    />
          <Carousel.Caption>
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <Button variant="outline-light" href="#">Menù</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
      className="d-block w-100"
      src={about}
      alt="First slide"
      style={{ height: '500px', objectFit: 'cover' }} 
    />
          <Carousel.Caption >
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <Button variant="outline-light" href="#">Chi siamo</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     
    </main>
  </div>
  )
}
