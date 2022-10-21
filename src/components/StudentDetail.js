import React from 'react';
import StudentPlanList from './StudentPlanList';
import StudentInfoForm from './StudentInfoForm';

function StudentDetail({ student, onEditStudent, plans, onSelectPlan, onDeletePlan }) {
    
    return (
        <React.Fragment>
            <StudentInfoForm onEditStudent={onEditStudent} />
            <StudentPlanList student={student} plans={plans} onSelectPlan={onSelectPlan} onDeletePlan={onDeletePlan} />
        </React.Fragment>
    )
}

export default StudentDetail;