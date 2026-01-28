import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ darkMode }) => {
  const frontend = [
    { skill: "HTML", value: 90 },
    { skill: "CSS", value: 85 },
    { skill: "JavaScript", value: 80 },
    { skill: "React", value: 85 },
    { skill: "Bootstrap", value: 90 },
  ];

  const backend = [
    { skill: "Node.js", value: 80 },
    { skill: "Express", value: 75 },
    { skill: "MongoDB", value: 80 },
    { skill: "REST APIs", value: 85 },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="skills"
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      ref={ref}
    >
      <Container>
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <Row>
          <Col md={6}>
            <h4>Frontend</h4>
            {frontend.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Card
                  className={`mb-2 p-2 ${darkMode ? "bg-secondary text-light" : ""}`}
                >
                  <strong>{f.skill}</strong>
                  <ProgressBar
                    now={f.value}
                    label={`${f.value}%`}
                    variant={darkMode ? "info" : "primary"}
                  />
                </Card>
              </motion.div>
            ))}
          </Col>
          <Col md={6}>
            <h4>Backend</h4>
            {backend.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Card
                  className={`mb-2 p-2 ${darkMode ? "bg-secondary text-light" : ""}`}
                >
                  <strong>{b.skill}</strong>
                  <ProgressBar
                    now={b.value}
                    label={`${b.value}%`}
                    variant={darkMode ? "info" : "primary"}
                  />
                </Card>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
