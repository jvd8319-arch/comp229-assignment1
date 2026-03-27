import { useState } from "react";
import { createReference } from "../api/references";
import ContactForm from "../components/ContactForm";

function AddContact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await createReference(formData);

    if (result.success) {
      alert("Contact added successfully!");
      window.location.href = "/contacts-list";
    } else {
      alert("Failed to add contact.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Contact</h1>

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonLabel="Save Contact"
      />
    </div>
  );
}

export default AddContact;