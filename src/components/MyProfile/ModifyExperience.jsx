import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModifyExperience({ experience, userId, expId, onSave, onDelete, onClose }) {
  const [role, setRole] = useState(experience.role);
  const [company, setCompany] = useState(experience.company);
  const [startDate, setStartDate] = useState(experience.startDate.split("T")[0]); // Estrarre solo la data senza l'orario
  const [endDate, setEndDate] = useState(experience.endDate ? experience.endDate.split("T")[0] : ""); // Estrarre solo la data senza l'orario

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role, company, startDate, endDate }),
        }
      );

      if (!response.ok) {
        throw new Error("Errore durante il salvataggio delle modifiche");
      }

      onSave({ ...experience, role, company, startDate, endDate });
      onClose();
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Sei sicuro di voler eliminare questa esperienza?");
    if (confirmed) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
          {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlYzVmYjEzZGYwYTAwMTk0OWY1OGIiLCJpYXQiOjE3MTIyNDQyMTksImV4cCI6MTcxMzQ1MzgxOX0.rFL8x1EdBXk5cXLx5V1jW6V2YTHy_0lLODn5-0_z7KE",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Errore durante la cancellazione dell'esperienza");
        }

        onDelete(expId);
        onClose();
      } catch (error) {
        console.error("Si è verificato un errore durante la cancellazione:", error);
      }
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRole">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" value={role} onChange={(e) => setRole(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formCompany">
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formStartDate">
            <Form.Label>Data di Inizio</Form.Label>
            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEndDate">
            <Form.Label>Data di Fine</Form.Label>
            <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between w-100">
          <Button variant="danger" onClick={handleDelete}>
            Elimina
          </Button>

          <div>
            <Button variant="secondary" onClick={onClose} className="me-2">
              Chiudi
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Salva Modifiche
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModifyExperience;
