import { API_BASE_URL } from "./config";

// GET ALL SERVICES
export async function getAllServices() {
  try {
    const response = await fetch(`${API_BASE_URL}/services`);
    const data = await response.json();
    // Expected backend shape: { success, message, data: [...] }
    return data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      success: false,
      message: "Failed to fetch services.",
      data: [],
    };
  }
}

// GET SERVICE BY ID
export async function getServiceById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`);
    const data = await response.json();
    // Expected backend shape: { success, message, data: { ... } }
    return data;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return {
      success: false,
      message: "Failed to fetch service.",
      data: null,
    };
  }
}

// CREATE SERVICE
export async function createService(serviceData) {
  try {
    const response = await fetch(`${API_BASE_URL}/services`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    });

    const data = await response.json();
    // Expected backend shape: { success, message, data: { ... } }
    return data;
  } catch (error) {
    console.error("Error creating service:", error);
    return {
      success: false,
      message: "Failed to create service.",
    };
  }
}

// UPDATE SERVICE
export async function updateService(id, serviceData) {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    });

    const data = await response.json();
    // Expected backend shape: { success, message }
    return data;
  } catch (error) {
    console.error("Error updating service:", error);
    return {
      success: false,
      message: "Failed to update service.",
    };
  }
}

// DELETE SERVICE
export async function deleteService(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    // Expected backend shape: { success, message }
    return data;
  } catch (error) {
    console.error("Error deleting service:", error);
    return {
      success: false,
      message: "Failed to delete service.",
    };
  }
}