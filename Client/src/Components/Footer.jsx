import React from "react";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-flex">
          {/* Contact Section */}
          <div className="footer-left">
            <h4 className="footer-title">Let's keep in touch!</h4>
            <h5 className="footer-subtitle">
              Find us on any of these platforms; we respond within 1-2 business
              days.
            </h5>
            <div className="footer-icons">
              <button className="footer-icon-button">
                <FaInstagram />
              </button>
              <button className="footer-icon-button">
                <FaFacebook />
              </button>
              <button className="footer-icon-button">
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-right">
            <div className="footer-column">
              <span className="footer-heading">Useful Links</span>
              <ul className="footer-list">
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#!">Blog</a></li>
                <li><a href="#!">Github</a></li>
                <li><a href="#!">Free Products</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="footer-heading">Other Resources</span>
              <ul className="footer-list">
                <li><a href="#!">MIT License</a></li>
                <li><a href="#!">Terms & Conditions</a></li>
                <li><a href="#!">Privacy Policy</a></li>
                <li><a href="#!">Contact Us</a></li>
              </ul>
            </div>
          </div>
        
        </div>

        <hr className="footer-divider" />

        {/* <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} genZite | All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
