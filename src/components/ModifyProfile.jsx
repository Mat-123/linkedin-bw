import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, saveProfile } from "../redux/actions";

const ModifyProfile = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.available);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  });

  useEffect(() => {
    if (show) {
      dispatch(getProfile());
    }
  }, [show, dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveProfile(formData));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Cognome</Form.Label>
            <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control type="text" name="bio" value={formData.bio} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Titoli</Form.Label>
            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formArea">
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formImg">
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} required />
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

export default ModifyProfile;
