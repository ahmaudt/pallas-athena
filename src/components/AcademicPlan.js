import React from "react";
import { Row, Col, Card, CardBody, FormGroup, FormControl } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useState } from "react";

function AcademicPlan() {
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch("http://localhost:6001/students")
      .then((r) => r.json())
      .then((data) => setStudent(data[0]));
  }, []);

  return (
    <Row>
      <Col>
        <Card style={{ padding: "0" }}>
          <CardHeader>
            <h2>Student Plan</h2>
          </CardHeader>
          <Card.Body style={{ padding: "0" }}>
            <FormGroup>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="requirement"
                  />
                </Col>
                <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <FormControl style={{}} type="text" placeholder="course" />
                </Col>
                <Col sm="4" style={{ paddingLeft: "0" }}>
                  <FormControl
                    style={{}}
                    type="text"
                    placeholder="alt course"
                  />
                </Col>
              </Row>
            </FormGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default AcademicPlan;
