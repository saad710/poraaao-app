import React from "react";
import Select from "react-select";
import logo from "../../../../resources/porao-logo.png";
import image from "../../../../resources/undraw_dev_focus_b9xo 1.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TeacherSignUp.css";

const TeacherSignUp = () => {
  const options = [
    { value: "bangla", label: "Bangla" },
    { value: "english", label: "English" },
    { value: "math", label: "Math" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
  ];
  return (
    <div className="teacher-sign-up">
      <Link to="/home">
        <div className="top-logo-image">
          <img className="top-logo" src={logo} alt="" />
        </div>
      </Link>
      <div className="mid-item">
        <div className="row mid-content">
          <div className="col-md-6">
            <img className="sign-up-img" src={image} alt="" />
          </div>
          <div className="col-md-6">
            <div className="form-teacher">
              <h5>Create an account</h5>
              <form action="">
                <input
                  type="text"
                  className="form-control form-hw"
                  name="name"
                  placeholder="Full Name"
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  className="form-control form-hw"
                  name="email"
                  placeholder="Email"
                  required
                />{" "}
                <br />
                <input
                  className="form-control form-hw"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />{" "}
                <br />
                <input
                  className="form-control form-hw"
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />{" "}
                <br />
                <Select
                  defaultValue={[]}
                  placeholder="Choose Your Subject"
                  isMulti
                  name="subject"
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
                {/* <select
                  id="inputState"
                  name="Choose Your Subject"
                  class="form-control form-hw"
                >
                  <option selected>Choose your Subject..</option>
                  <option>Bangla</option>
                  <option>English</option>
                  <option>Math</option>
                  <option>Physics</option>
                  <option>Chemestry</option>
                  <option>Biology</option>
                </select>{" "} */}
                <br />
                <Link to="/verifyOtp">
                  <input
                    className="btn btn-warning sign-up-btn"
                    type="submit"
                    value="Sign Up"
                  />
                </Link>
              </form>
              <br />
              <div className="or">
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Or
                </p>
              </div>
              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div className="col-md-5">
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="">
                      <FaFacebook />
                    </div>
                    <div
                      className=""
                      style={{ fontSize: 12, fontWeight: "500" }}
                    >
                      Sign Up With Facebook.
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div
                    className="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="">
                      <FcGoogle />
                    </div>
                    <div
                      className=""
                      style={{ fontSize: 12, fontWeight: "500" }}
                    >
                      Sign Up With Google.
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="back-login" style={{ textAlign: "center" }}>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link
                      className="sign-btn-back"
                      style={{ textDecoration: "none" }}
                      to="/teacherLogin"
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignUp;
