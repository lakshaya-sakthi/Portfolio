import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3 text-center bg-dark text-light">
      <Container>
        &copy; {new Date().getFullYear()} Lakshaya Sakthi. All Rights Reserved.
      </Container>
    </footer>
  );
}

export default Footer;
