import React, { useState } from "react";
import "./ContactUs.css";
import "./Modal.css";

function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const DeleteClick = () => {
    window.location.href = "/user-delete";
  };

  return (
    <div className="contact-us-container">
      <h1>Want to chat now or get a call from us?</h1>
      <div className="contact-options">
        <div className="contact-option chat-option">
          <div className="icon-chat"></div>
          <h2>Chat right now</h2>
          <p>
            Our messaging assistant can quickly solve many issues or direct you
            to the right person or place.
          </p>
          <p>
            <strong>Instant chat and always available.</strong>
          </p>
          <button className="action-button">Start chatting</button>
        </div>
        <div className="contact-option call-option">
          <div className="icon-call"></div>
          <h2>Have us call you</h2>
          <p>
            We'll first get a few details about your issue and then someone will
            call you right away.
          </p>
          <button className="action-button">Call me</button>
        </div>
      </div>
      <h2 className="self-service-header">
        Here are a few things you can take care of on your own
      </h2>
      <div className="self-service-options">
        <div className="self-service-option">
          <div className="icon-order"></div>
          <p>Check on an order</p>
        </div>
        <div className="self-service-option">
          <div className="icon-content"></div>
          <p>Manage content & devices</p>
        </div>

        <div onClick={() => setShowModal(true)} className="self-service-option">
          <div className="icon-payment"></div>
          <p>Account Settings</p>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              Account Settings
              <span onClick={closeModal} className="close-button">
                &times;
              </span>
            </h2>
            <p>Request your account details</p>
            <p>Update your account information</p>
            <p onClick={DeleteClick}>Delete your account permanently</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
