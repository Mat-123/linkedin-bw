import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MyModal = ({ show, handleClose, updateExperiences, userId }) => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [expId, setExpId] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setExpId(data._id);
        uploadImage();
      } else {
        console.error("Errore durante l'invio dei dati");
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  };

  const uploadImage = async () => {
    try {
      if (!expId) {
        console.error("expId non valido");
        return;
      }

      const formData = new FormData();
      formData.append("experience", imageFile);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
          },
          body: formData,
        }
      );

      if (response.ok) {
        handleClose(); // Chiudi il modal dopo il caricamento dell'immagine
        setFormData({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        });
        setImageFile(null);
      } else {
        console.error("Errore durante l'invio dell'immagine");
      }
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inserisci Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Ruolo:</Form.Label>
            <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Azienda:</Form.Label>
            <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Inizio:</Form.Label>
            <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Fine:</Form.Label>
            <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrizione:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImg">
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Carica un'immagine</Form.Label>
            <Form.Control type="file" name="image" onChange={handleFileUpload} />
          </Form.Group>
          <div className="mt-2 d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Annulla
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
