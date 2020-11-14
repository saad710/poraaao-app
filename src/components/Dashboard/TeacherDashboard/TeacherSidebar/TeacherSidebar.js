import React from "react";
import "./TeacherSidebar.css";
import grid_icon from "../../../../resources/grid-grey.png";

const TeacherSidebar = () => {
  return (
    <div className="teacher-sidebar">
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img
            className="grid-icon"
            src={grid_icon}
            selected
            Icon={grid_icon}
            alt=""
          />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Dashboard</h6>
        </div>
      </div>
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img className="grid-icon" src={grid_icon} alt="" />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Find Assignments</h6>
        </div>
      </div>
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img className="grid-icon" src={grid_icon} alt="" />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Bid Assignments</h6>
        </div>
      </div>
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img className="grid-icon" src={grid_icon} alt="" />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Current Bid</h6>
        </div>
      </div>
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img className="grid-icon" src={grid_icon} alt="" />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Discussions</h6>
        </div>
      </div>
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img className="grid-icon" src={grid_icon} alt="" />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Earning</h6>
        </div>
      </div>
      <div className="row sidebar-section">
        <div className="col-md-2">
          <img className="grid-icon" src={grid_icon} alt="" />
        </div>
        <div className="col-md-7 assignment-sec">
          <h6 className="assignment-name">Review</h6>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;
