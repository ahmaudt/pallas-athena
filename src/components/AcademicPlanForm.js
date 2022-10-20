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

function AcademicPlanForm({ workingPlan, onUpdatePlan }) {
  const params = useParams();

  const [plan, setPlan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:6001/plans/${params.id}`)
      .then((r) => r.json())
      .then((data) => setPlan(data));
  }, [params.id]);

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

  const planRecommendations = plan?.recommendations.map((recommendation, index) => (
      <Row>
        <Col sm="3" style={{ paddingRight: "0" }}>
          <Form.Control
            type="text"
            placeholder="requirement"
            name="requirement"
            value={recommendation.requirement}
            onChange={(e) => handleRecommendationChange(index, "requirement", e.target.value)}
          />
        </Col>
        <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
          <Form.Control
            type="text"
            placeholder="course"
            name="name"
            value={recommendation.name}
            onChange={(e) => handleRecommendationChange(index, "name", e.target.value)}
          />
        </Col>
        <Col sm="4" style={{ paddingLeft: "0" }}>
          <Form.Control
            type="text"
            placeholder="alt course"
            name="altCourse"
            value={recommendation.altCourse}
            onChange={(e) => handleRecommendationChange(index, "altCourse", e.target.value)}
          />
        </Col>
      </Row>
  ));

  if (!plan) return <h2>Loading...</h2>;

  const { studentId, adviseTerm, adviseYear, recommendations } = plan;

  return (
    <Row>
      <Col>
        <Card style={{ padding: "0" }}>
          <CardHeader>
            <h2>Student Plan</h2>
          </CardHeader>
          <Card.Body style={{ padding: "0" }}>
            <Form>
              <FormGroup>
                {planRecommendations}
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
