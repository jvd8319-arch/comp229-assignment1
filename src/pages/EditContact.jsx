import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReferenceById, updateReference } from "../api/references";
import ContactForm from "../components/ContactForm";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchContact() {
      const result = await getReferenceById(id);

      if (result.success && result.data) {
        setFormData({
          firstname: result.data.firstname,
          lastname: result.data.lastname,
          email: result.data.email,
          position: result.data.position,
          company: result.data.company,
        });
      }

      setLoading(false);
    }

    fetchContact();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);

    const result = await updateReference(id, formData);

    setSaving(false);

    if (result.success) {
      alert("Contact updated successfully!");
      navigate("/contacts-list");
    } else {
      alert("Failed to update contact.");
    }
  }

  if (loading) return <p>Loading contact...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Contact</h1>

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonLabel={saving ? "Saving..." : "Update Contact"}
      />
    </div>
  );
}

export default EditContact;