import React from "react";
import { Button, Card, Col, Form, FormControl, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StudentInfoForm({ onEditStudent, currentStudent }) {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    major: "",
    matricTerm: "",
    gradTerm: "",
    currentTerm: "",
    advisingTerm: "",
    ugaMyId: "",
    preProfessional: "",
    earnedHrs: "",
    remainingHrs: "",
    requiredHrs: "",
  });
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:6001/students/${params.id || currentStudent.id}`)
      .then((r) => r.json())
      .then((data) => setStudent(data));
  }, [params.id]);

  function handleEditInfo(e) {
    const updatedStudent = { ...student, [e.target.name]: e.target.value };
    setStudent(updatedStudent);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/students/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((r) => r.json())
      .then((data) => onEditStudent(data));
  }

  const { firstName, lastName, major, matricTerm, gradTerm, currentTerm, advisingTerm, ugaMyId, preProfessional, earnedHrs, remainingHrs, requiredHrs } = student;

  return (
    <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Card style={{ padding: "0" }}>
              <CardHeader>
                <h2>Student Information</h2>
              </CardHeader>
              <Card.Body>
              <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl type="text" placeholder="first name" name="firstName" value={firstName} onChange={handleEditInfo}  />
                  </Col>
                  <Col sm="3" style={{ paddingLeft: "0", paddingRight: "0" }}>
                    <FormControl type="text" placeholder="last name" name="lastName" value={lastName} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="ugaMyId" name="ugaMyId" value={ugaMyId} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="major" name="major" value={major} onChange={handleEditInfo} />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl type="text" placeholder="current term" name="currentTerm" value={currentTerm} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="advising term" name="advisingTerm" value={advisingTerm} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="matriculation term" name="matricTerm" value={matricTerm} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="graduation term" name="gradTerm" value={gradTerm} onChange={handleEditInfo} />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <Form.Select aria-label="Default select example"  name="preProfessional" value={preProfessional} onChange={handleEditInfo}>
                      <option>Select pre-professional track</option>
                      <option value="Pre-Med">Pre-Med</option>
                      <option value="Pre-Law">Pre-Law</option>
                      <option value="Pre-Dental">Pre-Dental</option>
                      <option value="Pre-Pharmacy">Pre-Pharmacy</option>
                      <option value="Pre-Veterinary">Pre-Veterinary</option>
                      <option value="Pre-Optometry">Pre-Optometry</option>
                      <option value="Pre-PT">Pre-Physical Therapy</option>
                      <option value="Pre-OT">Pre-Occupational Therapy</option>
                      <option value="Pre-PA">Pre-Physician Assistant</option>
                      <option value="Pre-RN">Pre-Nursing</option>
                    </Form.Select>
                  </Col>
                  <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="earned hours" name="earnedHrs" value={earnedHrs} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="hours required" name="requiredHrs" value={requiredHrs} onChange={handleEditInfo} />
                  </Col>
                  <Col sm="3" style={{ paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="hours remaining" name="remainingHrs" value={remainingHrs} onChange={handleEditInfo} />
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Button type="submit" variant="primary" >Save</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
    </Form>
  );
}

export default StudentInfoForm;
