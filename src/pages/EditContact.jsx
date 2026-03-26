import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getReferenceById,
  updateReference
} from "../api/references";

function EditContact() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  // Load contact data
  useEffect(() => {
    async function fetchContact() {
      const result = await getReferenceById(id);

      if (result.success && result.data) {
        setFormData({
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
        });
      }

      setLoading(false);
    }

    fetchContact();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await updateReference(id, formData);

    if (result.success) {
      alert("Contact updated successfully!");
      window.location.href = "/contacts-list";
    } else {
      alert("Failed to update contact.");
    }
  }

  if (loading) return <p>Loading contact...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Contact</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
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

        <label>Message:</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Update Contact
        </button>
      </form>
    </div>
  );
}

export default EditContact;