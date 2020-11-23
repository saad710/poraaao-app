import { Link } from 'react-router-dom';
import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import card from "../../../../../../resources/card (1).png";
import './PaymentMethod.css';

const PaymentsMethod = () => {
    return (
        <div className="payment_method">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Link to="/studentPaymentMethod" style={{textDecoration: "none"}}>
                            <img src={card} alt=""/>
                            </Link>
                            <p className="number-card">**** **** **** 3947</p>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <p style={{color:'#ff8a00', fontWeight:"600"}}>Change Payment Method</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentsMethod;