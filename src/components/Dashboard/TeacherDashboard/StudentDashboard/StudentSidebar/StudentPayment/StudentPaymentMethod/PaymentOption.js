import { Checkbox } from '@material-ui/core';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import card_a from "../../../../../../../resources/a.png";
import card_b from "../../../../../../../resources/b.png";
import card_c from "../../../../../../../resources/c.png";
import "./PaymentOption.css";

const PaymentOption = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };
    return (
        <div className="payment-option">
            <Container>
                <Row>
                    <Col>
                        <img src={card_a} alt=""/>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'danger checkbox' }}
                            style={{paddingLeft:"50%"}}
                        />
                    </Col>
                    <Col>
                        <img src={card_b} alt=""/>
                        <Checkbox
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'danger checkbox' }}
                            style={{paddingLeft:"50%"}}
                        />
                    </Col>
                    <Col>
                        <img src={card_c} alt=""/>
                        <Checkbox
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'danger checkbox' }}
                            style={{paddingLeft:"50%"}}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaymentOption;