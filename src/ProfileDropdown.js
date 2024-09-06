import React from "react";
import { Link } from "react-router-dom";
import "./ProfileDrop.css";

const ProfileDropdown = () => {
  const handleSignOut = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    // Clear local storage
    localStorage.removeItem('userdetails'); // Replace 'userdetails' with your local storage key

    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <div className="main-navdrop_1">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Your Account</h4>
          <ul>
            <li>
              <Link to="/user-profile">Profile</Link>
            </li>
            <li>
              <Link to="/checkout">Wishlist</Link>
            </li>
            <li>
              <Link to="/order-detail">Your Orders</Link>
            </li>
            <li>
              <Link to="/change-password">Change Password</Link>
            </li>
            <li>
              <Link to="/user-delete">Delete Your Account</Link>
            </li>
            <li>
              <a href="/" onClick={handleSignOut}>Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
