import React from 'react';
import book from "../../../../../../resources/book.png";

const PaymentCard = () => {
    return (
        <div>
            <div className="assignment-section" style={{ marginLeft: "30px" }}>
                <div className="row">
                    <div
                        className="col-md-3 bid-assignment"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <img src={book} alt="" />
                        <div style={{ paddingLeft: 10 }}>
                        <h2>500$</h2>
                        <p style={{ fontSize: "13px", fontWeight: "600" }}>
                           Available Balance
                        </p>
                        </div>
                    </div>
                <div
                    className="col-md-3 bid-assignment"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <img src={book} alt="" />
                    <div style={{ paddingLeft: 10 }}>
                    <h2>185$</h2>
                    <p style={{ fontSize: "13px", fontWeight: "600" }}>
                        Complete Payment
                    </p>
                    </div>
                </div>
                <div
                    className="col-md-3 bid-assignment"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <img src={book} style={{ height: "65px", width: "65px" }} alt="" />
                    <div style={{ paddingLeft: 10 }}>
                    <h2>100$</h2>
                    <p style={{ fontSize: "14px", fontWeight: "600" }}>Due Payment</p>
                    </div>
                </div>
                </div>
            </div>
    
        </div>
    );
};

export default PaymentCard;