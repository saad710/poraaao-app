import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import TeacherEarningContent from "../TeacherEarningContent/TeacherEarningContent";
import TeacherNavbar from "../TeacherNavbar/TeacherNavbar";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";

const TeacherEarning = () => {
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
          <TeacherEarningContent></TeacherEarningContent>
        </div>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default TeacherEarning;
