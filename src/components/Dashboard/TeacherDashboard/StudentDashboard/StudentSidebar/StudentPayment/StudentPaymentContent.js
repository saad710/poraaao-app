import React from 'react';
import PaymentCard from './PaymentCard';
import PaymentsMethod from './PaymentsMethod';
import "./StudentPaymentContent.css";

const StudentPaymentContent = () => {
    return (
        <div className="StudentPaymentContent">
            <PaymentCard/>
            <PaymentsMethod/>
        </div>
    );
};

export default StudentPaymentContent;