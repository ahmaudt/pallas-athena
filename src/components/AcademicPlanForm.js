import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Form,
  FormGroup
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AcademicPlanForm({ student, onUpdatePlan }) {
  const [rowCount, setRowCount] = useState(1);
  const params = useParams();

  const [plan, setPlan] = useState({
    studentId: student.id,
    advisingTerm: " ",
    currentTerm: " ",
    recommendations: []
  });

  useEffect(() => {
    fetch(`http://localhost:6001/plans/${params.id}`)
      .then((r) => r.json())
      .then((data) => setPlan(data));
  }, [params.id]);

  console.log(plan);

  function handleRecommendationChange(index, name, value) {
    const updatedRecommendations = plan.recommendations.map(
      (recommendation, i) => {
        if (i === index) {
          return { ...recommendation, [name]: value };
        }
        return recommendation;
      }
    );
    setPlan((plan) => ({
      ...plan,
      recommendations: updatedRecommendations,
    }));
  }

  const handleAddRow = () => {
    let newRow = { requirement: "", course: "", altCourse: "" };
    newRow.id = plan.recommendations.index + 1;
    setPlan(plan.recommendations = [...plan.recommendations, newRow]);
  }

  const handleDeleteRow = (i) => {
    setPlan(plan.recommendations.filter((recommendation, i) => recommendation.id !== plan.recommendations.index));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plans/${plan.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    })
      .then((r) => r.json())
      .then((data) => onUpdatePlan(data));
  }

  const { requirement, course, altCourse } = plan.recommendations;


  const planRecommendations = [...Array(rowCount)].map((r, index) => (
      plan.recommendations.map((recommendation, i) => (
      <Row key={i}>
        <Col sm="3" style={{ paddingRight: "0" }}>
          <Form.Control
            type="text"
            placeholder="requirement"
            name="requirement"
            value={recommendation.requirement}
            onChange={(e) => handleRecommendationChange(i, "requirement", e.target.value)}
          />
        </Col>
        <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
          <Form.Control
            type="text"
            placeholder="course"
            name="name"
            value={recommendation.name}
            onChange={(e) => handleRecommendationChange(i, "name", e.target.value)}
          />
        </Col>
        <Col sm="3" style={{ paddingLeft: "0" }}>
          <Form.Control
            type="text"
            placeholder="alt course"
            name="altCourse"
            value={recommendation.altCourse}
            onChange={(e) => handleRecommendationChange(i, "altCourse", e.target.value)}
          />
        </Col>
        <Col sm="1" style={{ paddingLeft: "0" }}>
          <Button variant="outline-danger" onClick={handleDeleteRow}>Delete Row</Button>
        </Col>
      </Row>
      ))
  ));

  if (!plan) return <h2>Loading...</h2>;

  const { studentId, adviseTerm, adviseYear, recommendations } = plan;

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
                {planRecommendations}
              </FormGroup>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Form>
  );
}

export default AcademicPlanForm;
