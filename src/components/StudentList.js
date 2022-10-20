import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom";
import StudentListItem from "./StudentListItem";

function StudentList({ students, onSelectStudent }) {
  const renderStudents = students.map((s) => (
      <StudentListItem
        key={s.id}
        firstName={s.firstName}
        lastName={s.lastName}
        majorOne={s.majorOne}
        id={s.id}
        student={s}
        onSelectStudent={onSelectStudent}
      />
    ));

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card style={{ padding: "0" }}>
            <CardHeader>
              <h2>Students</h2>
            </CardHeader>
            <Card.Body>
              <Table striped borderless size="sm">
                <thead>
                  <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Major</th>
                    <th>Student ID</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {renderStudents}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default StudentList;
