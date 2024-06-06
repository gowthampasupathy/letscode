import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function MyVerticallyCenteredModal(props) {
  const oldemail=props.email;
  const[password,setpassword]=useState()
  const[confirmpassword,setconfirmpassword]=useState()
  const [error,seterror]=useState()
  const[oldid,setoldid]=useState()
  const[reg,setreg]=useState([])
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(()=>{
    axios.get("${apiUrl}/getuserid/" + oldemail)
    .then((res) => {
      setreg(res.data);
      if (res.data.length > 0) {
        setoldid(res.data[0]._id); 
      }
    })
    .catch((er) => console.log(er));
},
   )
  const validation=(e)=>{
    e.preventDefault()
    if(password!=confirmpassword){
      seterror("Please Enter the same password in both field")
    }else if(password.length<8 && confirmpassword.length<8){
      seterror("*Password Must Contain Minimum 8 Character*")
    }else{
      seterror("")
      handlesubmit()

    }

  }
  const handlesubmit=()=>{
    alert("click")
    axios.put(`${apiUrl}/resetpasseord/${oldid}`,{password})
    .then((result)=>console.log(result))
    .catch((er)=>console.log(er))
  }
  console.log(oldid)

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
          <Form >
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="password"
                className="mt-1"
                placeholder="Enter New Password"
                style={{ width: 300 }}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </Form.Group>
           
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="password"
                className="mt-1"
                placeholder="Confirm  Password"
                style={{ width: 300 }}
                onChange={(e)=>setconfirmpassword(e.target.value)}
              />
            </Form.Group>
            <p style={{color:"red"}}>{error}</p>
           
          </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={validation}  style={{backgroundColor:'black',borderBlock:'black'}}>Submit</Button>
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
