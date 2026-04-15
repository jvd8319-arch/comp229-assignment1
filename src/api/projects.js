// AUTO‑SELECT BACKEND URL (Local → Render)
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "https://comp229-assignment02-backend.onrender.com/api";

// GET ALL PROJECTS
export async function getAllProjects() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, message: "Failed to fetch projects." };
  }
}

// GET PROJECT BY ID
export async function getProjectById(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return { success: false, message: "Failed to fetch project." };
  }
}

// CREATE PROJECT
export async function addProject(projectData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
}

// UPDATE PROJECT
export async function updateProject(id, projectData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, message: "Failed to update project." };
  }
}

// DELETE PROJECT
export async function deleteProject(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, message: "Failed to delete project." };
  }
}