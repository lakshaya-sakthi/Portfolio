import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
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
          Contact Me
        </motion.h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              {["name", "email", "message"].map((field, idx) => (
                <Form.Group className="mb-3" key={idx}>
                  <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                  <Form.Control
                    type={field === "email" ? "email" : "text"}
                    as={field === "message" ? "textarea" : "input"}
                    rows={field === "message" ? 3 : undefined}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className={darkMode ? "bg-secondary text-light border-0" : ""}
                  />
                </Form.Group>
              ))}
              <Button variant={darkMode ? "info" : "primary"} type="submit">Send Message</Button>
            </Form>
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <a href="https://github.com/lakshaya-sakthi" target="_blank" className="me-3 text-decoration-none">
                <FaGithub size={30} className={darkMode ? "text-light" : ""} />
              </a>
              <a href="https://www.linkedin.com/in/lakshaya-sakthi-1023b7321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-decoration-none">
                <FaLinkedin size={30} className={darkMode ? "text-light" : ""} />
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
