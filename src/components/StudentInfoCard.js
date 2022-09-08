import React from 'react';
import { Card, InputGroup, Form } from 'react-bootstrap';

function StudentInfoCard(props) {

    return (
        <Card className='student-info'>
            <Card.Header style={{ padding: "0px", borderBottom: "0px" }}>
                <h2 style={{ marginLeft: "10px", paddingBottom: "0px", marginBottom: "0px" }}>Student Information</h2>
            </Card.Header>
            <Card.Body>
                <InputGroup>
                    <Form.Control type="text" placeholder="First Name" size="sm"></Form.Control>
                    <Form.Control type="text" placeholder="Last Name" size="sm"></Form.Control>
                    <Form.Control type="text" placeholder="MyID" size="sm"></Form.Control>
                    <Form.Control type='text' placeholder='UGA 81x' size="sm"></Form.Control>
                </InputGroup>
                <InputGroup>
                    <Form.Control type="text" placeholder="Current Term" size="sm"></Form.Control>
                    <Form.Control type="text" placeholder="Advising Term" size="sm"></Form.Control>
                    <Form.Control type="text" placeholder="Matriculation Term" size="sm"></Form.Control>
                    <Form.Control type='text' placeholder='Graduation Term' size="sm"></Form.Control>
                </InputGroup>
                <InputGroup>
                    <Form.Control type="text" placeholder="Major" size="sm"></Form.Control>
                    <Form.Control type="text" placeholder="Earned Credit Hours" size="sm"></Form.Control>
                    <Form.Control type="text" placeholder="Required Credit Hours" size="sm"></Form.Control>
                    <Form.Control type='text' placeholder='Remaining Credit Hours' size="sm"></Form.Control>
                </InputGroup>
            </Card.Body>
        </Card>
    )
}

export default StudentInfoCard;