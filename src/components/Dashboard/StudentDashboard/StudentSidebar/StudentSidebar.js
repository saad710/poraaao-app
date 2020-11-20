import React from "react";
import "./StudentSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const StudentSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between shadow col-md-2 py-5 px-4">
      <ul className="list-unstyled">
        <li>
          <Link to="/studentDashboard">
            <FontAwesomeIcon icon={faTh} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/createNewAssignment">
            <FontAwesomeIcon icon={faTh} /> <span>Create New Assignment</span>
          </Link>
        </li>
        <div>
          <li>
            <Link to="/myAssignments">
              <FontAwesomeIcon icon={faTh} /> <span>My Assignments</span>
            </Link>
          </li>
          <li>
            <Link to="/bidRequests">
              <FontAwesomeIcon icon={faTh} /> <span>Bid Requests</span>
            </Link>
          </li>
          <li>
            <Link to="/payments">
              <FontAwesomeIcon icon={faTh} /> <span>Payments</span>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/studentdiscussions">
              <FontAwesomeIcon icon={faTh} /> <span>Discussions</span>
            </Link>
          </li>
          <li>
            <Link to="/studentReview">
              <FontAwesomeIcon icon={faTh} /> <span>Reviews</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faTh} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default StudentSidebar;
