import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, light, thin, duotone, icon, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  // <-- import styles to be used
import { faMemoPad } from '@fortawesome/sharp-solid-svg-icons';

function PlanInput({ programs, reqs, index, onOptionSelect, onDeleteRow, setNotes, notes }) {
    const [showNote, setShowNote] = useState();

    const handleOpenNote = (index) => {
        setShowNote(index);
    }

    const handleCloseNote = () => {
        setShowNote();
    }
    function handleChange(e, index) {
        const newNotes = [...notes];
        newNotes[index] = e.target.value;
        setNotes(newNotes);
        console.log(notes);
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
                <FormControl type='text' size="sm" placeholder='Course'></FormControl>
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
            >
                <Modal.Header closeButton>
                    <Modal.Title id="course recommendation note">
                        Course Recommendation Note
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control value={notes[index]} as="textarea" placeholder="Enter note here" onChange={(e) => handleChange(e, index)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseNote()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <Form>
                <Modal
                    show={onModalOpen}
                    onHide={() => onModalClose}
                    key={index}
                    aria-labelledby="course recommendation note"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="course recommendation note">
                            Course Recommendation Note
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Control name={`row-${index}`} value={notes[`row-${index}`]} onChange={(e) => handleChange(e.target.value)} as="textarea" placeholder="Enter note here" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => onModalClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form> */}
        </InputGroup>
    )
}

export default PlanInput;