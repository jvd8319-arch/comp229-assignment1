import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Redirect to Home page
    navigate("/");
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Contact Me</h1>
      <h2 className="contact-name">Mohd Javed Khan</h2>

      <p className="contact-text">
        I’m reachable during regular working days, Monday to Friday. For urgent or 
        important matters, please drop an email at our official address — a 
        representative will get back to you within 12 hours.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> JVD8319@gmail.com</p>
        <p><strong>Phone:</strong> +1 416-569-9497</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/mohd-javed-khan-64a61637"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/mohd-javed-khan-64a61637
          </a>
        </p>
        <p>
          <strong>Location:</strong><br />
          Centennial College, Progress Campus<br />
          Scarborough, Toronto, ON, Canada
        </p>
      </div>

      {/* CONTACT FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Send Me a Message</h2>

        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;