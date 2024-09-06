import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./image/Products/logo.png";
import "./NewUser.css";
import axios from 'axios';
import { useStateValue } from "./StateProvider";

const NewUser = ({ response }) => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Response data in NewUser:", response);
    if (response) {
      setUser({
        name: response.name || "",
        lastName: response.lastName || "",
        phone: response.phone || "",
        address: response.address || "",
        email: response.email || "",
        password: response.password || "",
      });
    }
  }, [response]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data on submit:", user);

    try {
      const response = await axios.post(`${process.env.APP_API_URL}/api/v1/signup`, {
        name: user.name,
        lastname: user.lastName,
        phone: user.phone,
        address: user.address,
        email: user.email,
        password: user.password,
      });

      console.log('Server response:', response.data);

      // Clear any previous errors

      // Uncomment these lines if you need to use Redux or another state management solution
      // dispatch({
      //   type: "SET_USER",
      //   user: { name: `${user.name} ${user.lastName}`, email: user.email },
      // });
      // dispatch({
      //   type: "SET_ADDRESS",
      //   address: user.address,
      // });
      // dispatch({
      //   type: "SET_PHONE",
      //   phone: user.phone,
      // });

      navigate("/login");
    } catch (error) {
      console.log("Error in Fetching:", error);
      console.log(error.message);

      // Check for specific error messages from the server
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === "Email already exists") {
          alert("A user with this email already exists. Please use a different email.");
        } else {
          alert("A user with this email already exists. Please use a different email.");
        }
      } else {
        alert("error");
      }
    }
  };

  return (
    <div className="Create_User">
      <Link to="/">
        <img className="Create_User_logo" src={Logo} alt="Logo" />
      </Link>

      <div className="Create_User_container">
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="name_lastname">
            <div>
              <h5>Name</h5>
              <input
                name="name"
                type="text"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <h5>Last Name</h5>
              <input
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <h5>Phone No</h5>
          <input
            name="phone"
            type="text"
            value={user.phone}
            onChange={handleChange}
            required
          />
          <h5>Address</h5>
          <input
            name="address"
            type="text"
            value={user.address}
            onChange={handleChange}
            required
          />
          <h5>Email</h5>
          <input
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
            required
          />
          <h5>Password</h5>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button className="Create_User_signInButton" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
