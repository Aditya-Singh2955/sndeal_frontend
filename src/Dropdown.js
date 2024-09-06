import React from "react";
import { Link } from "react-router-dom";


const Dropdown = () => {
  return (
    <div className="main-navdrop">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Watches</h4>
          <ul>
            <li>
              <Link to="/digital-watches">Digital Watches</Link>
            </li>
            <li>
              <Link to="/analog-watch">Analog Watches</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Home Appliances</h4>
          <ul>
            <li>
              <Link to="/mixer">Mixer</Link>
            </li>
            <li>
              <Link to="/Home-appliances">Microwave</Link>
            </li>
            <li>
              <Link to="/vaccumCleaner">Vacuum Cleaner</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Consumer Electronics</h4>
          <ul>
            <li>Watches</li>
            <li>Vacuum Cleaner</li>
            <li>Television</li>
            <li>Microwave</li>
            <li>Mixer</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Bottles and Cookware</h4>
          <ul>
            <li>Bottles - Single Wall</li>
            <li>Bottles - Double Wall</li>
            <li>Double Wall Bottles - GIFT SET</li>
            <li>Borosilicate Glass Bottle</li>
            <li>Vacuum Mug Series</li>
            <li>Vacuum Insulated Lunch Box</li>
            <li>Flame Guard Loose Cookware</li>
            <li>Triply Non Stick Cookware</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
