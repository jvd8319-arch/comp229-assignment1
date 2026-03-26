import { useEffect, useState } from "react";
import { getAllProjects, deleteProject } from "../api/projects";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load all projects on page load
  useEffect(() => {
    async function fetchProjects() {
      const data = await getAllProjects();
      setProjects(data.data || []); // backend returns { success, data }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  // Handle delete
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    const result = await deleteProject(id);
    if (result.success) {
      setProjects(projects.filter((p) => p.id !== id));
    } else {
      alert("Failed to delete project.");
    }
  }

  if (loading) return <p>Loading projects...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Projects List</h1>

      <button
        onClick={() => (window.location.href = "/add-project")}
        style={{
          marginBottom: "15px",
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        + Add New Project
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>Title</th>
            <th>Completion Date</th>
            <th>Description</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No projects found.
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>

                <td>
                  {new Date(project.completion).toLocaleDateString("en-CA")}
                </td>

                <td>{project.description}</td>

                <td>
                  <button
                    onClick={() =>
                      (window.location.href = `/edit-project/${project.id}`)
                    }
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      background: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(project.id)}
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsList;