import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createService } from "../api/services";

function AddService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [saving, setSaving] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await createService(formData);

    setSaving(false);

    if (result.success) {
      alert("Service added successfully!");
      navigate("/services-list");
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
          disabled={saving}
          style={{
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {saving ? "Saving..." : "Save Service"}
        </button>
      </form>
    </div>
  );
}

export default AddService;