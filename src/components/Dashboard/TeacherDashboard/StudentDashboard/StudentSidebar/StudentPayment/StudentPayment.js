import React from 'react';
import StudentNavbar from '../StudentNavbar/StudentNavbar';
import StudentSidebar from '../StudentSidebar';
import StudentPaymentContent from './StudentPaymentContent';

const Studentpayment = () => {
    return (
        <div>
            <StudentNavbar/>
            <div className="Student_payment" style={{display: 'flex'}}>
                <StudentSidebar/>
                <StudentPaymentContent/>
                
            </div>
            
        </div>
    );
};

export default Studentpayment;