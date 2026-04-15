import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceById, updateService } from "../api/services";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchService() {
      const result = await getServiceById(id);

      if (result.success && result.data) {
        setFormData({
          title: result.data.title,
          description: result.data.description,
        });
      }

      setLoading(false);
    }

    fetchService();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await updateService(id, formData);

    setSaving(false);

    if (result.success) {
      alert("Service updated successfully!");
      navigate("/services-list");
    } else {
      alert("Failed to update service.");
    }
  }

  if (loading) return <p>Loading service...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Service</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <label>Description:</label>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        ></textarea>

        <button
          type="submit"
          disabled={saving}
          style={{
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {saving ? "Saving..." : "Update Service"}
        </button>
      </form>
    </div>
  );
}

export default EditService;