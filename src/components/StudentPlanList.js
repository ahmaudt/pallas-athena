import React from "react";
import { Button, Card, Col, Row, Table} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AcademicPlan from "./AcademicPlan";

function PlanList({ student, plans, onSelectPlan }) {
  const studentPlans = plans.filter((pl) => pl.studentId === student.id);
  
  const planList = studentPlans.map((p) => {
    return <AcademicPlan plan={p} key={p.id} adviseTerm={p.adviseTerm} adviseYear={p.adviseYear} onSelectPlan={onSelectPlan} />
  });

    return (
        <React.Fragment>
            <Row>
                <Col>
                  <Card style={{ padding: "0" }}>
                    <CardHeader>
                      <h2 className="float-start">Academic Plans</h2>
                      <Button className="float-end" variant="success" href={`/new-plan`}>New Plan</Button>
                    </CardHeader>
                    <Card.Body>
                      <Table striped borderless size="sm">
                        <thead>
                          <tr>
                            <th>Term</th>
                            <th>Year</th>
                            <th>View</th>
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