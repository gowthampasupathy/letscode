import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Profile Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter Your Infiormation</h4>
        <p>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Enter Username"
                style={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="mt-1"
                placeholder="Enter email"
                style={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Enter College Name"
                style={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="Number"
                className="mt-1"
                placeholder="Enter Phone Number"
                style={{ width: 300 }}
              />
            </Form.Group>
          </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:'black',borderBlock:'black'}}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
