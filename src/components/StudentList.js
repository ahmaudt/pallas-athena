import React from 'react';
import { Row, Col, Container, InputGroup  } from 'react-bootstrap';

function StudentList({ students }) {
    const listStudents = students.map((student) => (
        <li key={student.ugaid}>
            {student.lastName}, {student.firstName}
        </li>
    ));

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {listStudents}
            </ul>
            <Container>
                <Row>
                    <Col>
                        <InputGroup.Text>Last Name</InputGroup.Text>
                    </Col>
                    <Col>
                        <InputGroup.Text>First Name</InputGroup.Text>
                    </Col>
                    <Col>
                        <InputGroup.Text>Primary Major</InputGroup.Text>
                    </Col>
                    <Col>
                        <InputGroup.Text>Matriculation Term</InputGroup.Text>
                    </Col>
                    <Col>
                        <InputGroup.Text>Graduation Term</InputGroup.Text>
                    </Col>
                </Row>
                {
                    students.map((student) => (
                        <Row key={student.ugaid}>
                            <Col>
                                <InputGroup.Text>{student.lastName}</InputGroup.Text>
                            </Col>
                            <Col>
                                <InputGroup.Text>{student.firstName}</InputGroup.Text>
                            </Col>
                            <Col>
                                <InputGroup.Text>{student.majorOne}</InputGroup.Text>
                            </Col>
                            <Col>
                                <InputGroup.Text>{student.matricTerm}</InputGroup.Text>
                            </Col>
                            <Col>
                                <InputGroup.Text>{student.gradTerm}</InputGroup.Text>
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        </div>
        
    )
}

export default StudentList;