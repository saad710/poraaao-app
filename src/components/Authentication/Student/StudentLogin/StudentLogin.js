import React from 'react';
import { Link } from "react-router-dom";
import porao_logo from "../../../../resources/porao-logo.png";
import teacher_image from "../../../../resources/undraw_dev_productivity_umsq 1.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const StudentLogin = () => {
    return (
        <div className="teacher-login-container">
        <Link to="/home">
          <div className="top-logo-image">
            <img className="top-logo" src={porao_logo} alt="" />
          </div>
        </Link>
        <div className="mid-item">
          <div className="row mid-content-teacher">
            <div className="col-md-6">
              <img className="Log-in-img" src={teacher_image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="form-teacher-login">
                <h5>Log In Your Account</h5> <br />
                <form action="">
                  <input
                    type="text"
                    className="form-control form-hw-login"
                    name="email"
                    placeholder="Email"
                    required
                  />{" "}
                  <br />
                  <input
                    className="form-control form-hw-login"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />{" "}
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <input type="checkbox" id="remember-me" />
                      <label
                        htmlFor="remember-me"
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="col-md-6">
                      <p
                        style={{
                          paddingLeft: "18px",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        Forgot Password?
                      </p>
                    </div>
                  </div>
                  <br />
                  <Link to="/StudentPayment" style={{textDecoration:"none"}}>
                  <input
                    className="btn btn-warning log-in-btn"
                    type="submit"
                    value="Log In"
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
                    Need an account?{" "}
                    <span>
                      <Link
                        className="sign-btn-back"
                        style={{ textDecoration: "none" }}
                        to="/teacherSignUp"
                      >
                        Sign Up
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

export default StudentLogin;