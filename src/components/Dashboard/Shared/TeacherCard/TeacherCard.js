import React, { useState } from "react";
import img from "../../../../resources/Ellipse 89.png";
import Rating from "@material-ui/lab/Rating";
import "./TeacherCard.css";

const TeacherCard = ({ teacher }) => {
  const [value, setValue] = useState(4);

  const { name, rating, location, assignments, memberSince, image } = teacher;

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 m-2 mb-5 p-4 bg-white teacher-card">
      <div className="row border-bottom pb-2">
        <div className="col-md-2 pr-2">
          <img src={img} alt="" />
        </div>
        <div className="col-md-10">
          <h4>{name}</h4>
          <div className="row">
            <div className="col-md-6">
              <Rating name="read-only" value={value} readOnly />
            </div>
            <div className="col-md-6">
              <span style={{ color: "#FFC000" }}>4.00</span> (35 Reviews)
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <div>From: {location}</div>
        <div>Science Teacher</div>
        <div className="row">
          <div className="col-md-7">Member Since:</div>
          <div className="col-md-5 font-weight-bold">{memberSince}</div>
        </div>
        <div className="row">
          <div className="col-md-7">Completed Assignments</div>
          <div className="col-md-5 font-weight-bold">{assignments}</div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
