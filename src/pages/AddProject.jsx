import { useState } from "react";
import { addProject } from "../api/projects";

function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    completion: "",
    description: ""
  });

  const [saving, setSaving] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await addProject(formData);

    setSaving(false);

    if (result.success) {
      alert("Project added successfully!");
      window.location.href = "/projects-list";
    } else {
      alert("Failed to add project.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Project</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Project Title:</label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Completion Date:</label>
        <input
          type="date"
          name="completion"
          required
          value={formData.completion}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Description:</label>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          rows="4"
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>

        <button
          type="submit"
          disabled={saving}
          style={{
            padding: "10px 15px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {saving ? "Saving..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}

export default AddProject;