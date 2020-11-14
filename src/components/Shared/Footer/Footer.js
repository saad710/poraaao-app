import React from "react";
import "./Footer.css";
import logo from "../../../resources/porao-logo.png";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedInIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-area container">
      <div className="row">
        <div className="col-md-6">
          <img className="poraoo-logo mb-4" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/">
                <SocialIcon
                  style={{ height: 25, width: 25 }}
                  url="http://facebook.com"
                />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">
                <SocialIcon
                  style={{ height: 25, width: 25 }}
                  url="http://youtube.com"
                />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">
                <SocialIcon
                  style={{ height: 25, width: 25 }}
                  url="http://twitter.com"
                />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">
                <SocialIcon
                  style={{ height: 25, width: 25 }}
                  url="http://linkedin.com/in"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 ">
          <h4 className="mb-3">Contact Us</h4>

          <ul className="list-inline">
            <li>(+55) 254 254 254</li>
            <li>poraoo@abc.com</li>
            <li>Location: Lorem Ipsum</li>
            <li>www.websitename.com</li>
          </ul>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <ul>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
