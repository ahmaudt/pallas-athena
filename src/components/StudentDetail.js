import React from 'react';
import StudentPlanList from './StudentPlanList';
import StudentInfoForm from './StudentInfoForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentDetail({ student, onEditStudent, onSelectStudent }) {

    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`http://localhost:6001/students/${params.id}`)
            .then((r) => r.json())
            .then((data) => onSelectStudent(data));
    }, [params.id]);

    return (
        <React.Fragment>
            <StudentInfoForm student={student} onEditStudent={onEditStudent} />
            <StudentPlanList student={student} />
        </React.Fragment>
    )
}

export default StudentDetail;