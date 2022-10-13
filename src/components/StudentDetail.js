import React from 'react';
import StudentPlanList from './StudentPlanList';
import StudentInfoForm from './StudentInfoForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentDetail({ onEditStudent }) {
    
    return (
        <React.Fragment>
            <StudentInfoForm onEditStudent={onEditStudent} />
            {/* <StudentPlanList /> */}
        </React.Fragment>
    )
}

export default StudentDetail;