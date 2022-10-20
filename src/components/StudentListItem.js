import React from 'react';
import { Link } from 'react-router-dom';

function StudentListItem({ student, onSelectStudent }) {
    function handleClick() {
        onSelectStudent(student);
    }

    return (
        <React.Fragment>
            <tr>
                <td>{student.lastName}</td>
                <td>{student.firstName}</td>
                <td>{student.major}</td>
                <td>{student.id}</td>
                <td>
                    <Link to={`/students/${student.id}`}>
                        <button type='button' onClick={handleClick}>
                            View
                        </button>
                    </Link>
                </td>
            </tr>   
        </React.Fragment>
    )
}

export default StudentListItem;