import React from 'react';
import logo from "../../../../../../resources/porao-logo.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


const StudentNavbar = () => {
    return (
        <div className="header-nav">
        <Navbar className="header" bg="light" expand="lg">
          <Navbar.Brand href="home">
            <Link to="/">
              <img className="porao-logo" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-section">
              <div className="header_mid">
                <SearchIcon className="header_inputbutton" />
                <input
                  type="text"
                  placeholder="Search & Find solution of your assignment"
                  className="search-input"
                />
              </div>
            </Nav>
            <div className="row right-header">
              <div className="header-end">
                <NotificationsNoneOutlinedIcon
                  className="notification-icon"
                  style={{ color: "#ff8a00" }}
                />
              </div>
              <div className="header-end">
                <ShoppingCartOutlinedIcon
                  className="cart-icon"
                  style={{ color: "#ff8a00" }}
                />
              </div>
              <div className="header-end">
                <AccountCircleIcon
                  className="profile-icon"
                  style={{ color: "#ff8a00" }}
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default StudentNavbar;