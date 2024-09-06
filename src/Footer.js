import React from "react";
import "./Footer.css"; // Import the CSS file
import Logo from "./image/everdeal.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-footer">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Get to Know Us</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect with Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Make Money with Us</h4>
            <ul>
              <li>Sell on SN Market</li>
              <li>Sell under SN Market Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>SN Market Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfillment by SN Market</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Let Us Help You</h4>
            <ul>
              <li>COVID-19 and SN Market</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>SN Market App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-fitting">
          <div style={{ marginTop: "6px" }} className="footer-logo">
            <img
              src={Logo}
              alt="Amazon Logo"
            />
          </div>
          <div className="footer-language">
            <div className="footer-language-select">
              <select>
                <option>English</option>
              </select>
              <select>
                <option>India</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
