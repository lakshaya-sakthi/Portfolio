import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import lakshaya from'../assets/lakshaya.jpg';

const NavbarComponent = ({ darkMode, setDarkMode }) => {
  return (
    <Navbar expand="lg" fixed="top" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
      <Container>

        <Navbar.Brand href="#">
          <img src={lakshaya} alt='Lakshaya' width="40" height="40" className='rounded-circle me-2'/>
          Lakshaya Sakthi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["hero","about","education","skills","projects","contact"].map((section, idx) => (
              <Link
                key={idx}
                className="nav-link"
                to={section}
                smooth={true}
                duration={700}
                offset={-70}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <Button
              variant={darkMode ? "light" : "dark"}
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="ms-2"
            >
              {darkMode ? "Light" : "Dark"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
