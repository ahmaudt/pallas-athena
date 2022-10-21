import React from 'react';
import StudentPlanList from './StudentPlanList';
import StudentInfoForm from './StudentInfoForm';

function StudentDetail({ student, onEditStudent, plans, onSelectPlan }) {
    
    return (
        <React.Fragment>
            <StudentInfoForm onEditStudent={onEditStudent} />
            <StudentPlanList student={student} plans={plans} onSelectPlan={onSelectPlan} />
        </React.Fragment>
    )
}

export default StudentDetail;