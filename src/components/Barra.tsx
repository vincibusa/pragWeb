import { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Barra() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !(navbarRef.current as HTMLElement).contains(event.target as Node)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar ref={navbarRef} bg="light" variant="light" expand="md" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">PRAG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" onClick={handleToggle} />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="me-auto" onClick={handleClose}>
            <Nav.Link href="#about">Chi siamo</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
          </Nav>
          <Nav className="ms-auto" onClick={handleClose}>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#reservation">Prenota un tavolo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}