import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserProfile.css";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userdetails"));
    if (storedData && storedData.user) {
      setFormData({
        name: storedData.user.name,
        lastname: storedData.user.lastname, // Ensure this key is correct
        phone: storedData.user.phone,
        email: storedData.user.email,
        address: storedData.user.address,
      });
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post(
        `${process.env.APP_API_URL}/api/v1/update`,
        formData
      );
      if (response.status === 200) {
        const storedData =
          JSON.parse(localStorage.getItem("userdetails")) || {};
        storedData.user = formData;
        localStorage.setItem("userdetails", JSON.stringify(storedData));
        setIsEditing(false);
        setSuccessMessage("Your data has been updated successfully!");
        setError(null);
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        setError(
          `Error: ${error.response.status} - ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("Error setting up request. Please try again.");
      }
      setSuccessMessage(null);
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setError(null);
    setSuccessMessage(null);
  };

  return (
    <div className="user-profile">
      <h1 className="user-profile__title">User Profile</h1>
      <div className="user-profile__info">
        {successMessage && (
          <p className="user-profile__success">{successMessage}</p>
        )}
        {error && <p className="user-profile__error">{error}</p>}
        {isEditing ? (
          <form className="user-profile__form">
            <div className="user-profile__item">
              <label className="user-profile__label">Name:</label>
              <input
                className="user-profile__input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="user-profile__item">
              <label className="user-profile__label">Last Name:</label>
              <input
                className="user-profile__input"
                type="text"
                name="lastname" // Make sure this matches the key in formData
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="user-profile__item">
              <label className="user-profile__label">Phone:</label>
              <input
                className="user-profile__input"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="user-profile__item">
              <label className="user-profile__label">Email:</label>
              <input
                className="user-profile__input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="user-profile__item">
              <label className="user-profile__label">Address:</label>
              <input
                className="user-profile__input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="user-profile__buttons">
              <button
                type="button"
                className="user-profile__button user-profile__save-button"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                type="button"
                className="user-profile__button user-profile__cancel-button"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="user-profile__item">
              <strong className="user-profile__label">Name:</strong>
              <p className="user-profile__value">{formData.name}</p>
            </div>
            <div className="user-profile__item">
              <strong className="user-profile__label">Last Name:</strong>
              <p className="user-profile__value">{formData.lastname}</p> {/* Ensure this matches formData */}
            </div>
            <div className="user-profile__item">
              <strong className="user-profile__label">Phone:</strong>
              <p className="user-profile__value">{formData.phone}</p>
            </div>
            <div className="user-profile__item">
              <strong className="user-profile__label">Email:</strong>
              <p className="user-profile__value">{formData.email}</p>
            </div>
            <div className="user-profile__item">
              <strong className="user-profile__label">Address:</strong>
              <p className="user-profile__value">{formData.address}</p>
            </div>
            <button
              type="button"
              className="user-profile__button user-profile__edit-button"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
