import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function AcademicPlan({ plan, onSelectPlan }) {
    return (
        <tr>
            <td>{plan.currentTerm}</td>
            <td>{plan.advisingTerm}</td>
            <td>
                <Link to={`/plans/${plan.id}/view`}>
                    <Button variant="outline-success" onClick={() => onSelectPlan(plan)}>View</Button>
                </Link>
            </td>
            <td>
                <Link to={`/plans/${plan.id}/edit`}>
                    <Button variant="outline-danger" onClick={() => onSelectPlan(plan)}>Edit</Button>
                </Link>
            </td>
      </tr>
    )
}

export default AcademicPlan;
