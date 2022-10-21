import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function AcademicPlan({ plan, onSelectPlan, onDeletePlan }) {

    function handleDelete() {
        fetch(`http://localhost:6001/plans/${plan.id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            onDeletePlan(plan);
        });
    }

    return (
        <tr>
            <td>{plan.currentTerm}</td>
            <td>{plan.advisingTerm}</td>
            <td>
                <Link to={`/plans/${plan.id}/view`}>
                    <Button variant="outline-secondary" onClick={() => onSelectPlan(plan)}>View</Button>
                </Link>
            </td>
            <td>
                <Link to={`/plans/${plan.id}/edit`}>
                    <Button variant="outline-primary" onClick={() => onSelectPlan(plan)}>Edit</Button>
                </Link>
            </td>
            <td>
                <Button variant="outline-danger" onClick={() => handleDelete(plan)}>Delete</Button>
            </td>
      </tr>
    )
}

export default AcademicPlan;
