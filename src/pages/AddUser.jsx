import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/users";

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const [saving, setSaving] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await addUser(formData);

    setSaving(false);

    if (result.success) {
      alert("User created successfully!");
      navigate("/users");
    } else {
      alert("Failed to create user.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New User</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
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
          disabled={saving}
          style={{
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {saving ? "Saving..." : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default AddUser;