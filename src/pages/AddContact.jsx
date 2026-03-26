import { useState } from "react";
import { createReference } from "../api/references";

function AddContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await createReference(formData);

    if (result.success) {
      alert("Contact added successfully!");
      window.location.href = "/contacts-list";
    } else {
      alert("Failed to add contact.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Contact</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
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

        <label>Message:</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>

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
          Save Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;