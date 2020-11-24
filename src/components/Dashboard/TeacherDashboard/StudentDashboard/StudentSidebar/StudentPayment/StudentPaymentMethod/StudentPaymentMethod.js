import React from 'react';
import StudentNavbar from '../../StudentNavbar/StudentNavbar';
import StudentSidebar from '../../StudentSidebar';
import StudentPaymentMethodContent from './StudentPaymentMethodContent';

const StudentPaymentMethod = () => {
    return (
        <div>
            <StudentNavbar/>
            <div className="student-payment-method" style={{display:'flex'}}>
                <StudentSidebar/>
                <StudentPaymentMethodContent/>
            </div>
        </div>
    );
};

export default StudentPaymentMethod;