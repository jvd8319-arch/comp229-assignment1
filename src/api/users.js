import { API_BASE_URL } from "./config";

// GET ALL USERS
export async function getAllUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { success: false, message: "Failed to fetch users." };
  }
}

// GET USER BY ID
export async function getUserById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return { success: false, message: "Failed to fetch user." };
  }
}

// CREATE USER (firstname, lastname, email, password)
export async function addUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user." };
  }
}

// UPDATE USER
export async function updateUser(id, userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, message: "Failed to update user." };
  }
}

// DELETE USER
export async function deleteUser(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, message: "Failed to delete user." };
  }
}