import React from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ViewPlan() {
    const params = useParams();
    console.log(params);

    const [plan, setPlan] = useState({
        studentId: "",
        advisingTerm: "",
        currentTerm: "",
        recommendations: []
    });

    const [student, setStudent] = useState('');

    useEffect(() => {
        fetch(`http://localhost:6001/plans/${params.id}`)
            .then((r) => r.json())
            .then((data) => setPlan(data));
    }, [params.id]);

    useEffect(() => {
        fetch(`http://localhost:6001/students/${plan.studentId}`)
            .then((r) => r.json())
            .then((data) => setStudent(data));
    }, [plan.studentId]);

    if (!plan || !student) {<h1>Loading...</h1>}

    return (
        <Card>
            <Card.Header>
                <Card.Title>{student.firstName} {student.lastName}'s {plan.advisingTerm} Academic Plan</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Requirement</th>
                        <th>Course</th>
                        <th>Alt Course</th>
                    </tr>
                    </thead>
                    <tbody>
                    {plan?.recommendations.map((r) => (
                        <>
                            <tr key={r.id}>
                                <td>{r.requirement}</td>
                                <td>{r.course}</td>
                                <td>{r.altCourse}</td>
                            </tr>
                        </>
                    ))}
                        <tr className="justify-content-center">
                            <td className="justify-content-center" colSpan={3}>{plan.notes}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
            <Card.Footer>
                <Link to={`/plans/${plan.id}/edit`}>
                    <Button style={{ borderRadius: "0" }} variant="primary" href={`/plans/${plan.id}/edit`}>Edit Plan</Button>
                </Link>
                <Link to={`/students/${student.id}`}>
                    <Button style={{ borderRadius: "0", marginLeft: "10px" }} variant="secondary" href={`/students/${student.id}`}>Back to Student</Button>
                </Link>
            </Card.Footer>
        </Card>
        
    );
}


export default ViewPlan;