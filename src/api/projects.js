import { API_BASE_URL } from "./config";

// GET ALL PROJECTS
export async function getAllProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { success: false, message: "Failed to fetch projects." };
  }
}

// GET PROJECT BY ID
export async function getProjectById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return { success: false, message: "Failed to fetch project." };
  }
}

// CREATE PROJECT
export async function addProject(projectData) {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
}

// UPDATE PROJECT
export async function updateProject(id, projectData) {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, message: "Failed to update project." };
  }
}

// DELETE PROJECT
export async function deleteProject(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, message: "Failed to delete project." };
  }
}