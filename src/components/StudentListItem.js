import React from 'react';
import { Link } from 'react-router-dom';

function StudentListItem({ student, onSelectStudent }) {
    // function handleEditStudent() {
    //     fetch(`http://localhost:6001/students/${id}`)
    //         .then((r) => r.json())
    //         .then((student) => onSelectStudent(student));
    // }
    const { lastName, firstName, majorOne, id } = student;
    function handleClick() {
        onSelectStudent(student);
    }
    return (
        <React.Fragment>
            <tr>
                <td>{lastName}</td>
                <td>{firstName}</td>
                <td>{majorOne}</td>
                <td>{id}</td>
                <td>
                    <Link to={`/students/${id}`}>
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