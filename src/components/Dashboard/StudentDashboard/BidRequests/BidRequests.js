import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { fakeServiceData } from "../../../../fakeData/fakeServiceData";
import Footer from "../../../Shared/Footer/Footer";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import "./BidRequests.css";

const BidRequests = () => {
  const [servicesList, setServicesList] = useState(fakeServiceData);

  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <>
      <TeacherNavbar></TeacherNavbar>
      <section style={containerStyle} className="container-fluid row">
        <StudentSidebar></StudentSidebar>
        <div className=" col-md-10 p-4 pr-5 ml-auto pl-5 pr-5 pb-5">
          <h3 className="text-dark mb-3">Bid Requests</h3>
          <table className="table table-responsive">
            <thead className="thead-bid-requests">
              <tr>
                <th
                  style={{ width: "5%" }}
                  className="text-white text-left"
                  scope="col"
                >
                  Sr No
                </th>

                <th style={{ width: "20%" }} className="text-white" scope="col">
                  Requested At
                </th>
                <th style={{ width: "5%" }} className="text-white" scope="col">
                  Amount
                </th>
                <th style={{ width: "40%" }} className="text-white" scope="col">
                  Details
                </th>
                <th style={{ width: "10%" }} className="text-white" scope="col">
                  Date
                </th>
                <th style={{ width: "20%" }} className="text-white" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {servicesList.map((srvclst, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{srvclst.name}</td>
                  <td>{srvclst.price}</td>
                  <td>{srvclst.description}</td>

                  <td>{srvclst.date}</td>
                  <td>
                    <button className="btn btn-primary btn-cart mr-2">
                      Add to Cart
                    </button>
                    <button className="btn btn-primary btn-quit text-white">
                      Quit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default BidRequests;
