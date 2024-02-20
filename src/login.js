import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic from "./mainlogo.png";
import "./login.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const navigate=useNavigate()
  //axios.defaults.withCredentials=true
  const Submit =(e)=>{
    e.preventDefault();
    axios.post("https://lets-code-api.onrender.com/login",{email,password},{withCredentials:true})
    .then(res=>{
      if(res.data.status==="Success"){
        if(res.data.ad==="admin"){
          navigate("/admin")
        }else if(res.data.us==="user"){
          navigate("/Exp")
        }else{
          navigate("/")
        }
      }
    })
    .catch(err=>alert(err))
    
  }
  return (
    <>
      <Container>
        <Row>
        <Col md={4} xs={12} style={{ margin:"auto"  }}>
        <Card
          style={{
            width:"100%",
            height:500,
            backgroundColor: "orange",
            marginTop:60
          }}
          className="shadow-lg"
        >
          
            {/* <Col md={6} xs={12}>
              <Card.Img variant="top" src={pic} style={{ width:"100%" ,height:500}} />
            </Col> */}
           
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "-moz-initial",
                      fontWeight: "bold",
                    }}
                  >
                    W E L C O M E
                  </h1>
                  <h3 xs={12} md={12} style={{ textAlign: "center" }}>B A C K</h3>
                  <h5 xs={12} md={12} style={{ textAlign: "center",width:"100%" }}>
                    Login In To Continue Your Coding
                  </h5>
                  <Container style={{ marginTop: 50 }}>
                    <Form style={{ padding: 10 }} onSubmit={Submit}>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicEmail"
                        style={{ marginLeft: 10 ,}}
                      >
                        <Form.Control
                          type="email"
                          className="mt-1"
                          placeholder="Enter email"
                          style={{ width: "100%" }}
                          required
                          onChange={(e)=>setemail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                        style={{ marginLeft: 10, marginTop: 50 }}
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="mt-1"
                          style={{ width: "100%" }}
                          required
                          onChange={(e)=>setpassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <Button
                        style={{
                          width: "100%",
                          marginLeft: 10,
                          marginTop: 30,
                          backgroundColor: "black",
                          borderColor: "black",
                        }}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Form>
                    <Row>
                      <Col md={6} xs={6}><a href="#psss" style={{ color: "black", width:"100%" }}>
                      Forgot Password
                    </a></Col>
                      <Col md={6} xs={6}> <p
                      style={{
                        color: "black",
                        
                        width:"100%"
                      }}
                    >
                      Don't Have An Account ?
                      <a href="/Signup" style={{ color: "black", }}>
                        SignUp
                      </a>
                    </p></Col>
                    </Row>
                    
                   
                  </Container>
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
