import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./image/Products/logo.png";
import "./Login.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import "./UserDelete.css";

const DeleteUser = ({ response }) => {
  const [email, setEmail] = useState("");

  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Response prop in DeleteUser:", response);
    if (response) {
      setEmail(response.email || "");
    } else {
      console.log("Response is undefined or null");
    }
  }, [response]);

  useEffect(() => {
    console.log("Email updated:", email);
  }, [email]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data on submit:", { email });
    try {
      const response = await axios.delete(`${process.env.APP_API_URL}/api/v1/deleteUser`, {
        data: { email },
      });
      console.log("Server response:", response.data);
      localStorage.removeItem("userdetails");

      navigate("/");
    } catch (error) {
      console.log("Error in Fetching:", error);
      console.log(error.message);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        if (error.response.data.message === "Invalid credentials") {
          alert("Invalid email. Please try again.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={Logo} alt="Logo" />
      </Link>

      <div className="login_conatainer">
        <h1>Delete Your Account</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <p className="p-text">You will be deleting your account as well as account data.</p>
          <button type="submit" className="login_signInButton">
            Delete Your Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteUser;
