import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";
import NewAssignmentContent from "../NewAssignmentContent/NewAssignmentContent";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import "./CreateNewAssignment.css";

const CreateNewAssignment = () => {
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
        <div className="col-md-10 p-4 ml-auto">
          <NewAssignmentContent></NewAssignmentContent>
        </div>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default CreateNewAssignment;
