// AUTO‑SELECT BACKEND URL (Local → Render)
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "https://comp229-assignment02-backend.onrender.com/api";

// GET ALL USERS
export async function getAllUsers() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return { success: false, message: "Failed to fetch users." };
  }
}

// GET USER BY ID
export async function getUserById(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return { success: false, message: "Failed to fetch user." };
  }
}

// CREATE USER
export async function addUser(userData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user." };
  }
}

// UPDATE USER
export async function updateUser(id, userData) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, message: "Failed to update user." };
  }
}

// DELETE USER
export async function deleteUser(id) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, message: "Failed to delete user." };
  }
}