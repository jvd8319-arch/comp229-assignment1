
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    completion: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Unauthorized. Please login again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(project),
      });

      if (!response.ok) {
        setError("Failed to add project");
        return;
      }

      navigate("/projects-list");
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Project</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Project Title:</label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />

        <label>Completion Date:</label>
        <input
          type="date"
          name="completion"
          value={project.completion}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-submit">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default AddProject;