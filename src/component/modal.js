import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const id = props.id;
  const [info, setInfo] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [college, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [oldemail, setOldEmail] = useState("");
  const [oldid, setOldId] = useState(""); // Update to store oldid
  const [reg, setReg] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get("https://lets-code-api.onrender.com/info/" + id)
      .then((res) => {
        setInfo(res.data);
        setName(res.data.name || "");
        setOldEmail(res.data.email); // Use setOldEmail instead of setoldemail
        setEmail(res.data.email || "");
        setContact(res.data.contact || "");
        setCollege(res.data.college || "");
        setCountry(res.data.country || "");
      })
      .catch((err) => console.log(err));

 
    axios.get(`${apiUrl}getuserid/` + oldemail)
      .then((res) => {
        setReg(res.data);
        if (res.data.length > 0) {
          setOldId(res.data[0]._id); 
        }
      })
      .catch((er) => console.log(er));
  }, [id, oldemail]); 

  const handlesubmit = () => {
    axios.put(`${apiUrl}/updateuserinfo/${id}/${oldid}` , { name, email, contact, college, country })
    .then((res) => {
      console.log(res.data);
      props.onHide()
      
    })
    .catch((error) => {
      console.error(error);
    });
    // props.onHide()
       
  };
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
        <h4>Enter Your Information</h4>
        <p>
          <Form >
            <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Enter Username"
                style={{ width: 300 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="mt-1"
                placeholder="Enter email"
                style={{ width: 300 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCollege">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Enter College Name"
                style={{ width: 300 }}
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicContact">
              <Form.Control
                type="number"
                className="mt-1"
                placeholder="Enter Phone Number"
                style={{ width: 300 }}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCountry">
              <Form.Control
                type="text"
                className="mt-1"
                placeholder="Enter Country Name"
                style={{ width: 300 }}
                defaultValue={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
          </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={handlesubmit} style={{ backgroundColor: 'black', borderBlock: 'black' }}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
