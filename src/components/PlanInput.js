import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, light, thin, duotone, icon, brands } from '@fortawesome/fontawesome-svg-core/import.macro';  // <-- import styles to be used
import { faMemoPad } from '@fortawesome/sharp-solid-svg-icons';
import ReactDom from 'react-dom';
import { ReactMarkdown }  from 'react-markdown';
import remarkGfm from 'remark-gfm';



function PlanInput({ programs, reqs, index, onOptionSelect, onDeleteRow, notes, setNotes, courses, setCourses }) {
    const [showNote, setShowNote] = useState();
    const [fullscreen, setFullscreen] = useState(false);
    

    const handleCourse = (e, index) => {
        const newCourses = [...courses];
        newCourses[index] = e.target.value;
        setCourses(newCourses);
    }

    const handleOpenNote = (index) => {
        setFullscreen(true);
        setShowNote(index);
    }

    const handleCloseNote = () => {
        setShowNote();
    }
    function handleChange(e, index) {
        const newNotes = [...notes];
        newNotes[index] = e.target.value;
        setNotes(newNotes);
    }

    return (
        <InputGroup>
            <Col>
                <Form.Select value={reqs[index]} onChange={(e) => onOptionSelect(e, index)} size="sm">
                        {
                        programs.map(program => {
                            return program.requirements.map((req) => {                    
                                return <option style={{ margin: "0px", padding: "0px" }} value={req}>{req}</option>;
                                })
                            })
                        }
                </Form.Select>
            </Col>
            <Col xs="auto">
                <Button variant='outline-primary' size="sm" onClick={() => handleOpenNote(index)}>
                    <FontAwesomeIcon icon={faMemoPad} />
                </Button>
            </Col>
            <Col>
                <Form.Control type='text' size="sm" placeholder='Course' value={courses[index]} onChange={(e) => handleCourse(e, index)} />
            </Col>
            <Col xs={1}>
                <FormControl type="text" placeholder="hrs" size="sm"></FormControl>
            </Col>
            <Col>
                <Form.Control type="text" placeholder="alt course options" size="sm"></Form.Control>
            </Col>
            <Col xs="auto">
                <Button variant="outline-danger" onClick={() => onDeleteRow(index)} size="sm"><FontAwesomeIcon icon={solid('square-minus')} /></Button>
            </Col>
            <Modal 
                show={showNote === index} 
                onHide={() => handleOpenNote(index)} 
                aria-labelledby="course recommendation note"
                fullscreen={fullscreen}
            >
                <Modal.Header>
                    <Modal.Title id="course recommendation note">
                        Course Recommendation Note
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control value={notes[index]} rows="5" as="textarea" placeholder="Enter note here" onChange={(e) => handleChange(e, index)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseNote()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </InputGroup>
    )
}

export default PlanInput;