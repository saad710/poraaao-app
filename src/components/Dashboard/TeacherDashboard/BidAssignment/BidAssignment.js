import React from "react";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";
import BidAssignmentContent from "./BidAssignmentContent";
import "./BidAssignment.css";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";

const BidAssignment = () => {
  return (
    <div className="bid_assignment_value">
      <TeacherNavbar />
      <div className="bid_assignment_details" style={{ display: "flex" }}>
        <TeacherSidebar />
        <BidAssignmentContent />
      </div>
    </div>
  );
};

export default BidAssignment;
