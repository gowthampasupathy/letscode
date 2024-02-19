import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic from "./mainlogo.png";
import "./login.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function App() {
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const navigate=useNavigate();
 
  const Submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/register",{name,email,password})
    .then(res=>{
      navigate("/login")
      console.log("created")
    })
    .catch(err=>alert(err))
    
  }
  
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4} style={{ margin: "auto" , }}>
            <Card
              style={{ marginTop: 60, backgroundColor: "black",width:"auto",height:"auto"}}

              className="shadow-lg"
            >
              <Card.Body>
                <Card.Text>
                <div style={{marginTop:20}}>
                <h3 style={{
                      textAlign: "center",
                      color: "white",
                      
                      width:"100%"
                    }}>Welcome To Let's Code</h3>
                  
                  <h5
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: 30,
                      width:"100%"
                    }}
                  >
                    Create Account To Explopre The Platform
                  </h5>
                  <Container style={{ marginTop: 10 }}>
                    <Form style={{ padding: 30 }} onSubmit={Submit} >
                      <Form.Group className="mb-4" controlId="TextInput">
                        <Form.Control
                          type="text"
                          className="mt-1"
                          placeholder="Enter Username"
                          style={{ width: "100%" }}
                          onChange={(e)=>setname(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          className="mt-1"
                          placeholder="Enter email"
                          style={{ width: "100%" }}
                          onChange={(e)=>setemail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="mt-1"
                          style={{ width: "100%" }}
                          onChange={(e)=>setpassword(e.target.value)}
                        />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="ConfirmPassword"
                          className="mt-1"
                          style={{ width: "100%" }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group> */}
                      <Button
                        style={{
                          width: "100%",
                          marginTop: 20,
                          backgroundColor: "orange",
                          borderColor: "orange",
                        }}
                        type="submit"
                        //href="/Exp"
                        
                      >
                        SignUp
                      </Button>
                    </Form>
                    <p
                      style={{ color: "white", marginLeft: 40, marginTop: -25,width:"100%" }}
                    >
                      Already Have An Account ?
                      <a href="/" style={{ color: "white" }}>
                        Login
                      </a>
                    </p>
                  </Container>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
