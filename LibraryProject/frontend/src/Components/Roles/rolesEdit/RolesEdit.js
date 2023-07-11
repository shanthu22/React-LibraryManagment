import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const RolesEdit = (probs) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here "\{^_^}/"
    //\{^_^}/
    handleClose();
  };

  return (
    <div>
      <Button className="btn btn-primary p-1" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Roles Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={probs.EditData.name}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={probs.EditData.id}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={probs.EditData.message}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Penality</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                value={probs.EditData.penality}
              />
            </Form.Group>

            <Button variant="primary mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RolesEdit;
