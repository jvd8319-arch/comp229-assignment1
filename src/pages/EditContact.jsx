import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReferenceById, updateReference } from "../api/references";
import ContactForm from "../components/ContactForm";

function EditContact() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: "",
  });

  const [loading, setLoading] = useState(true);

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

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonLabel="Update Contact"
      />
    </div>
  );
}

export default EditContact;