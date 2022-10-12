import React from "react";
import { Card, Col, Row, Table} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function PlanList() {
    return (
        <React.Fragment>
            <Row>
                <Col>
                  <Card style={{ padding: "0" }}>
                    <CardHeader>
                      <h2>Academic Plans</h2>
                    </CardHeader>
                    <Card.Body>
                      <Table striped borderless size="sm">
                        <thead>
                          <tr>
                            <th>Term</th>
                            <th>Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Fall</td>
                            <td>2022</td>
                          </tr>
                          <tr>
                            <td>Spring</td>
                            <td>2023</td>
                          </tr>
                          <tr>
                            <td>Summer</td>
                            <td>2023</td>
                          </tr>
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