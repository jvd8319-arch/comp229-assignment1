import React from "react";

function ContactForm({ formData, setFormData, handleSubmit, buttonLabel }) {
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
      <label>First Name:</label>
      <input
        type="text"
        name="firstname"
        required
        value={formData.firstname}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastname"
        required
        value={formData.lastname}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Position:</label>
      <input
        type="text"
        name="position"
        required
        value={formData.position}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Company:</label>
      <input
        type="text"
        name="company"
        required
        value={formData.company}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {buttonLabel}
      </button>
    </form>
  );
}

export default ContactForm;