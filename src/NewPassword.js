import React, { useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Logo from "./image/Products/logo.png"; // Make sure to import your logo
// import "./ResetPassword.css"; // Ensure your CSS file matches this structure

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = formData;

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setMessage("");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.patch(`${process.env.APP_API_URL}/api/v1/reset-password`, {
        token,
        newPassword,
      });

      setMessage(response.data.message);
      setError("");
    } catch (error) {
      setError(
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Error resetting password. Please try again."
      );
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={Logo} alt="Logo" />
      </Link>

      <div className="login_conatainer">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <h5>New Password</h5>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          <h5>Confirm New Password</h5>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login_signInButton" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
