import React, { useState } from "react";
import "./ProfileSidebar.css";
import img from "../../../../resources/Ellipse 89.png";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";

const ProfileSidebar = () => {
  const [value, setValue] = useState(4);

  return (
    <div className="sidebar d-flex flex-column  shadow col-md-3 py-5 px-4">
      <div id="profile-card">
        <div className="row">
          <div className=" col d-flex justify-content-center">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="row">
          <div className=" col d-flex justify-content-center">
            <h3>John Doe</h3>
          </div>
        </div>
        <div className="row">
          <div className=" col d-flex justify-content-center">
            <p>Science Teacher</p>
          </div>
        </div>
        <div className="row">
          <div className=" col d-flex justify-content-center">
            <Rating name="read-only" value={value} readOnly />
            <p>
              <small>4.00 (35 Reviews)</small>
            </p>
            <button className="ml-2 btn" id="see-all-btn">
              See all
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className=" col d-flex justify-content-center">
            <button className="btn" id="contact-btn">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
