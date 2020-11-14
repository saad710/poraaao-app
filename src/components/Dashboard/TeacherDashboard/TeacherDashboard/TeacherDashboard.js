import React from "react";
import TeacherContent from "../TeacherContent/TeacherContent";
import TeacherNavbar from "../TeacherNavbar/TeacherNavbar";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";

const TeacherDashboard = () => {
  return (
    <div>
      <TeacherNavbar />
      <div style={{ display: "flex", alignItems: "space-around" }}>
        <TeacherSidebar />
        <TeacherContent />
      </div>
    </div>
  );
};

export default TeacherDashboard;
