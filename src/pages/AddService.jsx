import { useState } from "react";
import { createService } from "../api/services";

function AddService() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await createService(formData);

    if (result.success) {
      alert("Service added successfully!");
      window.location.href = "/services-list"; // FIXED REDIRECT
    } else {
      alert("Failed to add service.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Service</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Description:</label>
        <textarea
          name="description"
          required
          value={formData.description}
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
          Save Service
        </button>
      </form>
    </div>
  );
}

export default AddService;