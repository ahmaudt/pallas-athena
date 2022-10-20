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
  const [rowCount, setRowCount] = useState(4);

  const [plan, setPlan] = useState({
    studentId: student.id,
    advisingTerm: student.adviseTerm,
    currentTerm: student.currentTerm,
    recommendations: [
  
    ]
  });

  function handleSubmit(e) {
    e.preventDefault();
    useEffect(() => {
      fetch(`http://localhost:6001/plans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({
          studentId: student.id,
          adviseTerm: student.adviseTerm,
          currentTerm: student.currentTerm,
        }),
      })
        .then((r) => r.json())
        .then((data) => onAddPlan(data));
    });
  }

  // function handleRecommendationChange(index, name, value) {
  //   const updatedRecommendations = plan.recommendations.map(
  //     (recommendation, i) => {
  //       if (i === index) {
  //         return { ...recommendation, [name]: value };
  //       }
  //       return recommendation;
  //     }
  //   );
  //   setPlan((plan) => ({
  //     ...plan,
  //     recommendations: updatedRecommendations,
  //   }));
  //   console.log(updatedRecommendations)
  // }

  function handleAddRecommendation(i, name, value) {
    // check to see if plan contains recommendation
    
    console.log(plan.recommendations[0])
    // if it does, add to it
}

  function handleAddRow() {
    let newRow = { requirement: "", course: "", altCourse: "" };
    newRow.id = rowCount.index + 1;
    setRowCount(rowCount + 1);
  }

  const { requirement, course, altCourse } = plan.recommendations;

  return (
    <Row>
      <Col>
        <Card style={{ padding: "0" }}>
          <CardHeader>
            <h2 className="float-start">Student Plan</h2>
            <Button className="float-end" variant="success" onClick={handleAddRow}>Add Row</Button>
          </CardHeader>
          <Card.Body style={{ padding: "0" }}>
            <Form>
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
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <Form.Control
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={altCourse}
                      onChange={(e) => handleAddRecommendation(i, "altCourse", e.target.value)}
                    />
                  </Col>
                </Row>
                ))}
              </FormGroup>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default AcademicPlanForm;
