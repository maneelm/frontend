// Contact.jsx
import React, { useState } from "react";
import ResponsiveAppBar from "./Navbar";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to submit the form data
    console.log("Email:", email);
    console.log("Message:", message);
    setSubmitted(true);
    // You can also make an API call to submit the form data to a backend server
    // For simplicity, we're just logging the data to the console in this example
  };

  return (
    <div>
      <ResponsiveAppBar /> {/* Navbar (ResponsiveAppBar) is outside the contact form container */}
      <div className="contact-container">
        <div className="contact-box">
          <h1>Contact Us</h1>
          {submitted ? (
            <p className="success-message">Thank you for your message!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
