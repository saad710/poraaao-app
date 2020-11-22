import React from 'react';
import book from "../../../../resources/book.png";
import "./TeacherContent.css";
import star from "../../../../resources/star.PNG";
import check from "../../../../resources/check.png";

const BidCard = () => {
    return (
        
    <div className="assignment-section" style={{ marginLeft: "30px" }}>
        <div className="row">
          <div
            className="col-md-3 bid-assignment"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={book} alt="" />
            <div style={{ paddingLeft: 10 }}>
              <h2>10</h2>
              <p style={{ fontSize: "13px", fontWeight: "600" }}>
                Bid Assignments
              </p>
            </div>
          </div>
          <div
            className="col-md-3 bid-assignment"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={check} alt="" />
            <div style={{ paddingLeft: 10 }}>
              <h2>09</h2>
              <p style={{ fontSize: "13px", fontWeight: "600" }}>
                Complete Assignments
              </p>
            </div>
          </div>
          <div
            className="col-md-3 bid-assignment"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={star} style={{ height: "65px", width: "65px" }} alt="" />
            <div style={{ paddingLeft: 10 }}>
              <h2>08</h2>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>My Reviews</p>
            </div>
          </div>
        </div>
    </div>
    
    );
};

export default BidCard;