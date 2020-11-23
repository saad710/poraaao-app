import React from 'react';
import PaymentCard from '../PaymentCard';
import PaymentForm from './PaymentForm';
import PaymentOption from './PaymentOption';
import './StudentPaymentMethodContent.css';

const StudentPaymentMethodContent = () => {
    return (
        <div className="student_payment_method_content">
            <PaymentCard/>
            <PaymentForm/>
            <PaymentOption/>
        </div>
    );
};

export default StudentPaymentMethodContent;