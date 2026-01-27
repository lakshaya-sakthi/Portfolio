import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="vh-100 d-flex align-items-center">
      <Container className="text-center">
        <motion.h1
          className="display-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Lakshaya Sakthi
        </motion.h1>
        <motion.p
          className="lead"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          MERN Stack Developer | Creating modern web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="projects" smooth={true} duration={700} offset={-70}>
            <Button variant="primary" className="me-2">View Projects</Button>
          </Link>
          <Link to="contact" smooth={true} duration={700} offset={-70}>
            <Button variant="outline-primary">Contact Me</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
