import React from "react";
import "./contact.css";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form>
            <h1>
              <span>Contact</span> Us
            </h1>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" placeholder="Enter your message" />
            </div>
            <button onClick={submitHandler}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
