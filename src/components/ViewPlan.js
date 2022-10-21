import React from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ViewPlan() {
    const params = useParams();
    console.log(params);    

    const [plan, setPlan] = useState({
        studentId: "",
        advisingTerm: "",
        currentTerm: "",
        recommendations: []
    });

    useEffect(() => {
        fetch(`http://localhost:6001/plans/${params.id}`)
            .then((r) => r.json())
            .then((data) => setPlan(data));
    }, [params.id]);

    console.log(plan);

    return (
        <React.Fragment>
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
                    <tr>
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
        </React.Fragment>
    );
}


export default ViewPlan;