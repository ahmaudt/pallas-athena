import React from "react";
import { Button, Card, Col, Row, Table} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AcademicPlan from "./AcademicPlan";
import { Link } from "react-router-dom";

function PlanList({ student, plans, onSelectPlan }) {
  const studentPlans = plans.filter((pl) => pl.studentId === student.id);
  
  const planList = studentPlans.map((p) => {
    return <AcademicPlan plan={p} key={p.id} currentTerm={p.currentTerm} advisingTerm={p.advisingTerm} onSelectPlan={onSelectPlan} student={student} />
  });

    return (
        <React.Fragment>
            <Row>
                <Col>
                  <Card style={{ padding: "0" }}>
                    <CardHeader>
                      <h2 className="float-start">Academic Plans</h2>
                      <Link to={`/new-plan`}>
                        <Button className="float-end" variant="success">New Plan</Button>
                      </Link>
                    </CardHeader>
                    <Card.Body>
                      <Table striped borderless size="sm">
                        <thead>
                          <tr>
                            <th>Term Created</th>
                            <th>Term Advised For</th>
                            <th>View Plan</th>
                            <th>Edit Plan</th>
                          </tr>
                        </thead>
                        <tbody>
                          {planList}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
        </React.Fragment>
    )
}

export default PlanList;