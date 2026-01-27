import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import lakshaya from '../assets/lakshaya.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-5" ref={ref}>
      <Container>
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <Image src={lakshaya} width="250" height="250" className='rounded-circle' fluid />
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              I'm a MERN Stack Developer building full-stack web applications. I enjoy creating responsive
              and user-friendly websites using modern technologies.
            </motion.p>
            <Row className="mt-4">
              <Col md={6}>
                <Card className="mb-3 p-2">
                  <Card.Body>
                    <Card.Title>Frontend</Card.Title>
                    <Card.Text>React, Bootstrap, HTML, CSS, JavaScript</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="mb-3 p-2">
                  <Card.Body>
                    <Card.Title>Backend</Card.Title>
                    <Card.Text>Node.js, Express, MongoDB, REST APIs</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
