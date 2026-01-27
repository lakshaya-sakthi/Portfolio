import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Education = ({ darkMode }) => {
  return (
    <section
      id="education"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container>
        <h2 className="text-center mb-5">Education</h2>

        <Row className="justify-content-center">
          {/* College */}
          <Col md={6} className="mb-4">
            <Card
              className={`h-100 shadow ${
                darkMode ? "bg-secondary text-light" : ""
              }`}
            >
              <Card.Body>
                <Card.Title>Bachelor of Engineering (CSE)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2023 – 2027
                </Card.Subtitle>
                <Card.Text>
                  <strong>College:</strong> Bannari Amman Institute of Technology<br />
                  <strong>CGPA:</strong> 7.98<br />
                  <strong>Focus:</strong> MERN Stack Development, Data Structures,
                  Web Technologies, Databases
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* School */}
          <Col md={6} className="mb-4">
            <Card
              className={`h-100 shadow ${
                darkMode ? "bg-secondary text-light" : ""
              }`}
            >
              <Card.Body>
                <Card.Title>Higher Secondary Education</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2021 – 2023
                </Card.Subtitle>
                <Card.Text>
                  <strong>School:</strong> Sri Vivekananda Hr. Sec. School<br />
                  <strong>Percentage:</strong> 96%<br />
                  <strong>Stream:</strong> Computer Science
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
