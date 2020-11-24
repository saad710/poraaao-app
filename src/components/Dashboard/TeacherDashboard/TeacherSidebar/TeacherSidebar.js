import React from "react";
import "./TeacherSidebar.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const TeacherSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between shadow col-md-2 py-5 px-4">
      <ul className="list-unstyled">
        <li>
          <Link to="/teacherDashboard">
            <FontAwesomeIcon icon={faTh} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/findAssignments">
            <FontAwesomeIcon icon={faTh} /> <span>Find Assignments</span>
          </Link>
        </li>
        <div>
          <li>
            <Link to="/bidAssignments">
              <FontAwesomeIcon icon={faTh} /> <span>Bid Assignments</span>
            </Link>
          </li>
          <li>
            <Link to="/currentBid">
              <FontAwesomeIcon icon={faTh} /> <span>Current Bid</span>
            </Link>
          </li>
          <li>
            <Link to="/teacherDiscussions">
              <FontAwesomeIcon icon={faTh} /> <span>Discussions</span>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link to="/teacherEarning">
              <FontAwesomeIcon icon={faTh} /> <span>Earning</span>
            </Link>
          </li>
          <li>
            <Link to="/teacherReview">
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

export default TeacherSidebar;
