import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import TeacherContent from "../TeacherContent/TeacherContent";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";

const TeacherDashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <>
      <TeacherNavbar></TeacherNavbar>

      <div style={containerStyle} className="container-fluid row">
        <TeacherSidebar></TeacherSidebar>
        <div className="col-md-10 p-4 pr-5 ml-auto">
          <TeacherContent></TeacherContent>
        </div>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default TeacherDashboard;
