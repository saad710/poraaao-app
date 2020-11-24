import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";
import BidDetailsContent from "./BidDetailsContent";
import "./BidDetails.css";
import Footer from "../../../Shared/Footer/Footer";
import Copyright from "../../../Home/Copyright/Copyright";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";

const BidDetails = () => {
  return (
    <div>
      <TeacherNavbar />
      <div className="content_details" style={{ display: "flex" }}>
        <TeacherSidebar />
        <BidDetailsContent />
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer />
      </div>
      <div style={{ backgroundColor: "#000000" }}>
        <Copyright />
      </div>
    </div>
  );
};

export default BidDetails;
