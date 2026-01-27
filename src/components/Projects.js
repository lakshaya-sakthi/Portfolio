import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce app with React frontend and Node/Express backend.",
    tech: "React, Node.js, Express, MongoDB, Bootstrap",
    github: "#",
    live: "#"
  },
  {
    title: "Task Manager",
    description: "CRUD application for managing tasks with backend APIs.",
    tech: "React, Node.js, Express, MongoDB",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" className="py-5" ref={ref}>
      <Container>
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{proj.title}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Card.Text><strong>Tech:</strong> {proj.tech}</Card.Text>
                    <Button href={proj.github} target="_blank" variant="primary" className="me-2">GitHub</Button>
                    <Button href={proj.live} target="_blank" variant="outline-primary">Live Demo</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
