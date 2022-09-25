import React from 'react';
import { Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import CardHeader from "react-bootstrap/esm/CardHeader";

function StudentInformation({  }) {

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
                    <FormControl type="text" placeholder="first name" />
                    </Col>
                    <Col sm="3" style={{ paddingLeft: "0", paddingRight: "0" }}>
                    <FormControl type="text" placeholder="last name" />
                    </Col>
                    <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="ugaMyId" />
                    </Col>
                    <Col sm="3" style={{ paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="major" />
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
                        <FormControl type="text" placeholder="matriculation term" />
                    </Col>
                    <Col sm="3" style={{ paddingLeft: "0" }}>
                        <FormControl type="text" placeholder="graduation term" />
                    </Col>
                </Row>
                <Row>
                <Col sm="3" style={{ paddingRight: "0" }}>
                    <Form.Select aria-label="Default select example">
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
                    <FormControl type="text" placeholder="earned hours" />
                    </Col>
                    <Col sm="3" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="hours required" />
                    </Col>
                    <Col sm="3" style={{ paddingLeft: "0" }}>
                    <FormControl type="text" placeholder="hours remaining" />
                    </Col>
                </Row>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default StudentInformation;