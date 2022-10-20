import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AcademicPlanForm({ onAddPlan, student }) {
  console.log(student);
  const [rowCount, setRowCount] = useState(4);

  const [plan, setPlan] = useState({
    studentId: student.id,
    advisingTerm: student.advisingTerm,
    currentTerm: student.currentTerm,
    recommendations: [
      {
        requirement: "",
        course: "",
        altCourse: ""
      }
    ]
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    })
      .then((r) => r.json())
      .then((data) => onAddPlan(data));
  }

  function handleAddRecommendation(i, name, value) {
    // check to see if plan contains recommendation
    let rowId = i + 1;
    let recommendation = plan.recommendations.find(
      (recommendation) => recommendation.id === rowId
    );
    if (recommendation) {
      // if recommendation exists, update it
      setPlan({
        ...plan,
        recommendations: plan.recommendations.map((recommendation) =>
          recommendation.id === rowId
            ? { ...recommendation, [name]: value }
            : recommendation
        ),
      });
    } else {
      // if recommendation does not exist, create it
      setPlan({
        ...plan,
        recommendations: [
          ...plan.recommendations,
          { id: rowId, [name]: value },
        ],
      });
    } 
  }


  function handleAddRow() {
    let newRow = { requirement: "", course: "", altCourse: "" };
    newRow.id = rowCount.index + 1;
    setRowCount(rowCount + 1);
  }

  function handleDeleteRow() {
    setRowCount(rowCount - 1);
  }

  const { requirement, course, altCourse } = plan.recommendations;

  return (
    <Form onSubmit={handleSubmit}>
    <Row>
      <Col>
        <Card style={{ padding: "0" }}>
          <CardHeader>
            <h2 className="float-start">Student Plan</h2>
            <Button className="float-end" variant="primary" onClick={handleAddRow}>Add Row</Button>
          </CardHeader>
          <Card.Body style={{ padding: "0" }}>
              <FormGroup>
                {[...Array(rowCount)].map((r, i) => (
                  <Row key={i}>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <Form.Control
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      value={requirement}
                      onChange={(e) => handleAddRecommendation(i, "requirement", e.target.value)}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <Form.Control
                      type="text"
                      placeholder="course"
                      name="course"
                      value={course}
                      onChange={(e) => handleAddRecommendation(i, "course", e.target.value)}
                    />
                  </Col>
                  <Col sm="3" style={{ paddingLeft: "0" }}>
                    <Form.Control
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={altCourse}
                      onChange={(e) => handleAddRecommendation(i, "altCourse", e.target.value)}
                    />
                  </Col>
                  <Col sm="1" style={{ paddingLeft: "0" }}>
                    <Button variant="outline-danger" onClick={handleDeleteRow}>Delete Row</Button>
                  </Col>
                </Row>
                ))}
              </FormGroup>
          </Card.Body>
          <Card.Footer>
            <Button variant="success" type="submit">
              Save
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    </Form>

  );
}

export default AcademicPlanForm;
