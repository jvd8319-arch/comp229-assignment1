import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        formData
      );

      // Backend returns success: true (HTTP 200)
      if (response.data?.success) {
        alert("User registered successfully!");
        navigate("/users");   // <-- Redirect to users page
        return;
      }

      // If backend returns success: false
      alert(response.data?.message || "Signup failed");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          required
          value={formData.firstname}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          required
          value={formData.lastname}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;