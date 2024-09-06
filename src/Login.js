import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./image/Products/logo.png";
import "./Login.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";

const Login = ({ response }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Response prop in Login:", response);
    if (response) {
      setData({
        email: response.email || "",
        password: response.password || "",
      });
    } else {
      console.log("Response is undefined or null");
    }
  }, [response]);

  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data on submit:", data);
    try {
      const response = await axios.post(`${process.env.APP_API_URL}/api/v1/login`, {
        email: data.email,
        password: data.password,
      });
      console.log("Server response:", response.data);
      const responseJson = JSON.stringify(response.data);
      localStorage.setItem("userdetails", responseJson);

      const userjson = localStorage.getItem("userdetails");
      const userde = JSON.parse(userjson);
      console.log(userde.user.name);

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
          alert("Invalid email or password. Please try again.");
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
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <small onClick={() => (window.location.href = "/change-password")} className="login_forgetpassword">Forget Password</small>
          <button type="submit" className="login_signInButton">
            Sign In
          </button>
          <p>
            By continuing, you agree to SN Market Conditions of Use and Privacy
            Notice.
          </p>
          <Link to="/New-user">
            
            <button className="login_registerButton">
              Create a New Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
