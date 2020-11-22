import React from "react";
import "./SignUpHome.css";
import teacher from "../../../resources/undraw_teaching_f1cm 1.png";
import student from "../../../resources/undraw_exams_g4ow 1.png";
import { Link } from "react-router-dom";

const SignUpHome = () => {
  return (
    <div className="sign-up-user">
      <div className="top-item">
        <h4>Choose who you are</h4>
        <p style={{ fontWeight: "600" }}>You change at any time</p>
      </div>
      <div className="row sign-up-card">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <Link
            className="t-sign"
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="teacherSignup"
          >
            <div className="image-icon">
              <img className="user-icon" src={teacher} alt="" />
              <br />
              <h5 className="identity">Teacher</h5>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/studentSignup" style={{textDecoration:"none"}}>
          <div className="image-icon">
            <img className="user-icon" src={student} alt="" />
            <br />
            <h5 className="identity">Student</h5>
          </div>
        </Link>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SignUpHome;