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
          Password Reset
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter Your New Password</h4>
        <p>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="password"
                className="mt-1"
                placeholder="Enter New Password"
                style={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="password"
                className="mt-1"
                placeholder="Confirm  Password"
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
