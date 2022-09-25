import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import PlanInput from "./PlanInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function PlanCard({ onAddRow, onOptionSelect, onDeleteRow, programs, reqs, rowCount, onModalOpen, onModalClose, show, onCoursesNotesSubmit}) {
    const [notes, setNotes] = useState([]);
    const [courses, setCourses] = useState([]);
  
    return (
        <form>
        <Card className='course-recommendations'>
            <Card.Header>
                <h2>Academic Plan</h2>
            </Card.Header>
            <Card.Body>
                <InputGroup>
                    <Container fluid>
                        <Row>
                            <Col>
                                <InputGroup.Text>
                                    Recommendations
                                </InputGroup.Text>
                            </Col>
                            <Col md="auto">
                                <Button style={{ paddingTop: "0px", paddingLeft: "7px", paddingRight: "7px", paddingBottom: "0px" }} className="float-end" variant="outline-success" onClick={onAddRow}>
                                    <FontAwesomeIcon icon={solid('square-plus')} />
                                </Button>
                            </Col>
                        </Row>
                    {[...Array(rowCount)].map((_, i) => (
                        <InputGroup style={{ margin: "0px", padding: "0px" }}>
                        <PlanInput notes={notes} setNotes={setNotes} courses={courses} setCourses={setCourses} onCoursesNotesSubmit={onCoursesNotesSubmit} show={show} onModalOpen={onModalOpen} onModalClose={onModalClose}  programs={programs} reqs={reqs} index={i} onOptionSelect={onOptionSelect} onDeleteRow={onDeleteRow} />
                            {/* removed modal component */}
                        </InputGroup>
                    ))}    
                    </Container>
                </InputGroup>
            </Card.Body>
        </Card>
        <button type="submit">submit</button>
        </form>
    )

}

export default PlanCard;