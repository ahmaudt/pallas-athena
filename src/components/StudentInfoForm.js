import React from "react";
import { Card, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StudentInfoForm({ onEditStudent }) {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    majorOne: "",
    majorTwo: "",
    minorOne: "",
    minorTwo: "",
    id: "",
    matricTerm: "",
    gradTerm: "",
    ugaMyId: "",
    preProfessional: "",
    earnedHrs: "",
    remainingHrs: "",
    requiredHrs: "",
  });
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:6001/students/${params.id}`)
      .then((r) => r.json())
      .then((data) => setStudent(data));
  }, [params.id]);

  function handleEditInfo(e) {
    const updatedStudent = { ...student, [e.target.name]: e.target.value };
    onEditStudent(updatedStudent);
  }

  const { id, firstName, lastName, majorOne, majorTwo, minorOne, minorTwo, matricTerm, gradTerm, ugaMyId, preProfessional, earnedHrs, remainingHrs, requiredHrs } = student;

  return (
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
                <FormControl type="text" placeholder="major" name="majorOne" value={majorOne} onChange={handleEditInfo} />
              </Col>
            </Row>
            <Row>
              <Col sm="3" style={{ paddingRight: "0" }}>
                <FormControl type="text" placeholder="current term" />
              </Col>
              <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                <FormControl type="text" placeholder="advising term" />
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
                <Form.Select aria-label="Default select example"  name="preProfessional" value={preProfessional} onChange={handleEditInfo} >
                  <option>Select pre-professional track</option>
                  <option value="1">Pre-Med</option>
                  <option value="2">Pre-Law</option>
                  <option value="3">Pre-Dental</option>
                  <option value="4">Pre-Pharmacy</option>
                  <option value="5">Pre-Veterinary</option>
                  <option value="6">Pre-Optometry</option>
                  <option value="7">Pre-Physical Therapy</option>
                  <option value="8">Pre-Occupational Therapy</option>
                  <option value="9">Pre-Physician Assistant</option>
                  <option value="10">Pre-Nursing</option>
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
        </Card>
      </Col>
    </Row>
  );
}

export default StudentInfoForm;
