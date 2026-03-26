import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceById, updateService } from "../api/services";

function EditService() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

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

    const result = await updateService(id, formData);

    if (result.success) {
      alert("Service updated successfully!");
      window.location.href = "/services-list"; // FIXED REDIRECT
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
          style={{
            padding: "10px 15px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Update Service
        </button>
      </form>
    </div>
  );
}

export default EditService;