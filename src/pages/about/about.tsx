import { Container, Button,  Row, Col } from 'react-bootstrap';
import './about.css';
export default function About() {
  return (
    <Container className="marketing mt-5">
    <Row>
      <Col lg={4}>
      <div className="d-flex w-100 justify-content-center align-items-center">
        <div className="rounded-circle bg-secondary" style={{ width: '140px', height: '140px' }}></div>
        </div>
        <h2>Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <Button variant="secondary" href="#">View details &raquo;</Button>
      </Col>
      <Col lg={4}>
      <div className="d-flex w-100 justify-content-center align-items-center">
        <div className="rounded-circle bg-secondary" style={{ width: '140px', height: '140px' }}></div>
        </div>
        <h2>Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <Button variant="secondary" href="#">View details &raquo;</Button>
      </Col>
      <Col lg={4}>
      <div className="d-flex w-100 justify-content-center align-items-center">
        <div className="rounded-circle bg-secondary" style={{ width: '140px', height: '140px' }}></div>
        </div>
        <h2>Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <Button variant="secondary" href="#">View details &raquo;</Button>
      </Col>
    </Row>

    <hr className="featurette-divider mt-5" />

    <Row className="featurette">
      <Col md={7}>
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </Col>
      <Col md={5}>
        <div className="bg-secondary" style={{ width: '100%', height: '500px' }}></div>
      </Col>
    </Row>

    <hr className="featurette-divider mt-5" />

    <Row className="featurette">
      <Col md={7} className="order-md-2">
        <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </Col>
      <Col md={5} className="order-md-1">
        <div className="bg-secondary" style={{ width: '100%', height: '500px' }}></div>
      </Col>
    </Row>

    <hr className="featurette-divider mt-5" />

    <Row className="featurette">
      <Col md={7}>
        <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </Col>
      <Col md={5}>
        <div className="bg-secondary" style={{ width: '100%', height: '500px' }}></div>
      </Col>
    </Row>

    <footer className="mt-5">
      <p className="float-end"><a href="#">Back to top</a></p>
      <p>&copy; 2023 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </Container>
  )
}
