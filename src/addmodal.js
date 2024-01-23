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
          Add New Langauge
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter New Language Details</h4>
        <p style={{ marginTop: 30 }}>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Enter Language Name"
                style={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Provide Cover Image URL"
                style={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                as={"textarea"}
                className="mt-1"
                placeholder="Enter Language Description"
                style={{ width: 300 }}
              />
            </Form.Group>
          </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{ backgroundColor: "black", borderBlock: "black" }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default MyVerticallyCenteredModal;
