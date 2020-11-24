import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './PaymentForm.css';

const PaymentForm = () => {
    return (
        <div className="payment-form">
            <Form>
                <h4 style={{textAlign: 'center'}}>Debit or Credit Card</h4> <br/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control type="name" placeholder="Cardholder Name" />
                </Form.Group>

                <Form.Group controlId="formBasicNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="number" placeholder="Card Number" />
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                    <Form.Label>Expire Date</Form.Label>
                    <Form.Control type="date" placeholder="Expire Date" />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                    <Form.Label>CCV/CVV</Form.Label>
                    <Form.Control type="number" placeholder="CCV/CVV" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Use as default payment method" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Add Card
                </Button>
            </Form>
        </div>
    );
};

export default PaymentForm;