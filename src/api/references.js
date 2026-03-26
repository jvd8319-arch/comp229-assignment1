import { API_BASE_URL } from "./config";

// GET ALL REFERENCES
export async function getAllReferences() {
  try {
    const response = await fetch(`${API_BASE_URL}/references`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching references:", error);
    return { success: false, message: "Failed to fetch references." };
  }
}

// GET REFERENCE BY ID
export async function getReferenceById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/references/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reference by ID:", error);
    return { success: false, message: "Failed to fetch reference." };
  }
}

// CREATE REFERENCE
export async function createReference(referenceData) {
  try {
    const response = await fetch(`${API_BASE_URL}/references`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(referenceData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating reference:", error);
    return { success: false, message: "Failed to create reference." };
  }
}

// UPDATE REFERENCE
export async function updateReference(id, referenceData) {
  try {
    const response = await fetch(`${API_BASE_URL}/references/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(referenceData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating reference:", error);
    return { success: false, message: "Failed to update reference." };
  }
}

// DELETE REFERENCE
export async function deleteReference(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/references/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting reference:", error);
    return { success: false, message: "Failed to delete reference." };
  }
}