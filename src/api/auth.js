// AUTO‑SELECT BACKEND URL (Local → Render)
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://comp229-assignment02-backend.onrender.com";

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Login failed",
      };
    }

    return {
      success: true,
      token: data.token,
      user: data.user,
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "Network or server error",
    };
  }
}