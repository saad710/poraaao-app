import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import TeacherContent from "../TeacherContent/TeacherContent";
import TeacherNavbar from "../TeacherNavbar/TeacherNavbar";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";

const TeacherDashboard = () => {
  return (
    <div>
      <TeacherNavbar></TeacherNavbar>
      <div style={{ display: "flex", alignItems: "space-around" }}>
        <TeacherSidebar></TeacherSidebar>
        <TeacherContent></TeacherContent>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TeacherDashboard;
