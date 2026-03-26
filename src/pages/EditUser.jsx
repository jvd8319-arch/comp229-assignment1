import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../api/users";

function EditUser() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load user data
  useEffect(() => {
    async function fetchUser() {
      const result = await getUserById(id);

      if (result.success && result.data) {
        setFormData({
          name: result.data.name,
          email: result.data.email,
          role: result.data.role,
        });
      } else {
        alert("Failed to load user.");
      }

      setLoading(false);
    }

    fetchUser();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await updateUser(id, formData);

    setSaving(false);

    if (result.success) {
      alert("User updated successfully!");
      window.location.href = "/users";
    } else {
      alert("Failed to update user.");
    }
  }

  if (loading) return <p>Loading user...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit User</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
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

        <label>Role:</label>
        <input
          type="text"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          disabled={saving}
          style={{
            padding: "10px 15px",
            background: "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {saving ? "Saving..." : "Update User"}
        </button>
      </form>
    </div>
  );
}

export default EditUser;