import { useEffect, useState } from "react";
import { getAllServices, deleteService } from "../api/services";

function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load all services on page load
  useEffect(() => {
    async function fetchServices() {
      const result = await getAllServices();
      setServices(result.data || []); // backend returns { success, data }
      setLoading(false);
    }
    fetchServices();
  }, []);

  // Handle delete
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    const result = await deleteService(id);
    if (result.success) {
      setServices(services.filter((s) => s.id !== id));
    } else {
      alert("Failed to delete service.");
    }
  }

  if (loading) return <p>Loading services...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Services List</h1>

      <button
        onClick={() => (window.location.href = "/add-service")}
        style={{
          marginBottom: "15px",
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        + Add New Service
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>Title</th>
            <th>Description</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {services.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No services found.
              </td>
            </tr>
          ) : (
            services.map((service) => (
              <tr key={service.id}>
                <td>{service.title}</td>
                <td>{service.description}</td>

                <td>
                  <button
                    onClick={() =>
                      (window.location.href = `/edit-service/${service.id}`)
                    }
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      background: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(service.id)}
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesList;