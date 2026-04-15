// AUTO‑SELECT BACKEND URL (Local → Render)
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "https://comp229-assignment02-backend.onrender.com/api";

// GET ALL SERVICES
export async function getAllServices() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/services`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    return { success: false, message: "Failed to fetch services.", data: [] };
  }
}

// GET SERVICE BY ID
export async function getServiceById(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching service:", error);
    return { success: false, message: "Failed to fetch service.", data: null };
  }
}

// CREATE SERVICE
export async function createService(serviceData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(serviceData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error creating service:", error);
    return { success: false, message: "Failed to create service." };
  }
}

// UPDATE SERVICE
export async function updateService(id, serviceData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(serviceData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating service:", error);
    return { success: false, message: "Failed to update service." };
  }
}

// DELETE SERVICE
export async function deleteService(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting service:", error);
    return { success: false, message: "Failed to delete service." };
  }
}