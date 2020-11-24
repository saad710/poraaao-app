import React from "react";
import "./StudentSidebar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const StudentSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between shadow col-md-2 py-5 px-4">
      <ul className="list-unstyled">
        <li>
          <NavLink
            activeClassName="active"
            className="sidebar-link"
            to="/studentDashboard"
          >
            <FontAwesomeIcon icon={faTh} /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            className="sidebar-link"
            to="/createNewAssignment"
          >
            <FontAwesomeIcon icon={faTh} /> <span>Create New Assignment</span>
          </NavLink>
        </li>
        <div>
          <li>
            <NavLink
              activeClassName="active"
              className="sidebar-link"
              to="/myAssignments"
            >
              <FontAwesomeIcon icon={faTh} /> <span>My Assignments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="sidebar-link"
              to="/bidRequests"
            >
              <FontAwesomeIcon icon={faTh} /> <span>Bid Requests</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="sidebar-link"
              to="/studentPayment"
            >
              <FontAwesomeIcon icon={faTh} /> <span>Payments</span>
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink
              activeClassName="active"
              className="sidebar-link"
              to="/studentdiscussions"
            >
              <FontAwesomeIcon icon={faTh} /> <span>Discussions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="sidebar-link"
              to="/studentReview"
            >
              <FontAwesomeIcon icon={faTh} /> <span>Reviews</span>
            </NavLink>
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
