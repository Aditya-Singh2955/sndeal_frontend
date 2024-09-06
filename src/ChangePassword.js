import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import "./UserDelete.css";
import Logo from "./image/Products/logo.png";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.APP_API_URL}/api/v1/password`, { email });
      console.log("Server response:", response.data);

      setMessage("Password reset email sent successfully. Please check your inbox.");
      setError("");
    } catch (error) {
      console.error("Error in Fetching:", error.message);
      setError(error.response?.data?.message || "An error occurred. Please try again later.");
      setMessage(""); 
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={Logo} alt="Logo" />
      </Link>

      <div className="login_conatainer">
        <h1>Change Password</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <p className="p-text">Please check your email for instructions on resetting your password.</p>
          <button type="submit" className="login_signInButton">
            Send Mail
          </button>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
