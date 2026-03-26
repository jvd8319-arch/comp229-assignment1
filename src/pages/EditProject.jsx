import { useEffect, useState } from "react";
import { getProjectById, updateProject } from "../api/projects";
import { useParams } from "react-router-dom";

function EditProject() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    completion: "",
    description: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load project data
  useEffect(() => {
    async function fetchProject() {
      const result = await getProjectById(id);

      if (!result.success || !result.data) {
        alert("Failed to load project.");
        return;
      }

      const project = result.data;

      setFormData({
        title: project.title,
        completion: project.completion?.substring(0, 10), // format YYYY-MM-DD
        description: project.description
      });

      setLoading(false);
    }

    fetchProject();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await updateProject(id, formData);

    setSaving(false);

    if (result.success) {
      alert("Project updated successfully!");
      window.location.href = "/projects-list";
    } else {
      alert("Failed to update project.");
    }
  }

  if (loading) return <p>Loading project...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Project</h1>

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
            background: "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {saving ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
}

export default EditProject;