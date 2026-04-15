// AUTO‑SELECT BACKEND URL (Local → Render)
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "https://comp229-assignment02-backend.onrender.com/api";

// GET ALL REFERENCES
export async function getAllReferences() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/references`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching references:", error);
    return { success: false, message: "Failed to fetch references.", data: [] };
  }
}

// GET REFERENCE BY ID
export async function getReferenceById(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/references/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching reference by ID:", error);
    return { success: false, message: "Failed to fetch reference.", data: null };
  }
}

// CREATE REFERENCE
export async function createReference(referenceData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/references`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(referenceData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error creating reference:", error);
    return { success: false, message: "Failed to create reference." };
  }
}

// UPDATE REFERENCE
export async function updateReference(id, referenceData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/references/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(referenceData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating reference:", error);
    return { success: false, message: "Failed to update reference." };
  }
}

// DELETE REFERENCE
export async function deleteReference(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/references/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting reference:", error);
    return { success: false, message: "Failed to delete reference." };
  }
}