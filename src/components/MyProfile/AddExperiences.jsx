import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MyModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

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
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/:userId/experiences`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzRlZGEyODFkODAwMTlhM2VjNTIiLCJpYXQiOjE3MTIwNDczNDEsImV4cCI6MTcxMzI1Njk0MX0._hbN8joRmo0ilM2j3j5Be52RH2nTsa2Ys4TZJvVoaUw",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        handleClose();
      } else {
        console.error("Errore durante l'invio dei dati");
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData({
      ...formData,
      image: base64,
    });
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
