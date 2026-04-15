import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllReferences, deleteReference } from "../api/references";

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchContacts() {
      const result = await getAllReferences();
      setContacts(result.data || []);
      setLoading(false);
    }
    fetchContacts();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    const result = await deleteReference(id);
    if (result.success) {
      setContacts(contacts.filter((c) => c.id !== id));
    } else {
      alert("Failed to delete contact.");
    }
  }

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contacts List</h1>

      <button
        onClick={() => navigate("/add-contact")}
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
        + Add New Contact
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Company</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No contacts found.
              </td>
            </tr>
          ) : (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  {contact.firstname} {contact.lastname}
                </td>
                <td>{contact.email}</td>
                <td>{contact.position}</td>
                <td>{contact.company}</td>

                <td>
                  <button
                    onClick={() => navigate(`/edit-contact/${contact.id}`)}
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
                    onClick={() => handleDelete(contact.id)}
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

export default ContactsList;