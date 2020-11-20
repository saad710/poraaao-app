import React from "react";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";
import StudentContent from "../StudentContent/StudentContent";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import Footer from "../../../Shared/Footer/Footer";

const StudentDashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
    overflow: "hidden",
  };
  return (
    <>
      <TeacherNavbar></TeacherNavbar>
      <div style={containerStyle} className="container-fluid row">
        <StudentSidebar></StudentSidebar>
        <div className="col-md-10 p-4  ml-auto">
          <StudentContent></StudentContent>
        </div>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default StudentDashboard;
