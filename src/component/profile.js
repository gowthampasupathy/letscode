import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import prof from "../asset/prof.png";
import Nav from "./nav";
import java from "../asset/java.png";
import c from "../asset/c.png";
import cpp from "../asset/c++.png";
import cSharp from "../asset/c#.png";
import ruby from "../asset/ruby.png";
import js from "../asset/js.png";
import python from "../asset/python.png";
import App from "./modal";
import React from "react";
import App2 from "./passmodal";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function BasicExample() {
  const{email}=useParams()
  const navigator = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const[info,setinfo]=useState({})
  useEffect(()=>{
    axios.get("http://localhost:3001/info/"+email)
    .then((res)=>setinfo(res.data))
    .catch((er)=>console.log(er))
  })
  return (
    <div>
      <Nav></Nav>
      <Container style={{marginTop:100}}>
        <Row >
            <Col md={3} xs={12}  style={{height:'auto'}}>
            {/* <Card style={{ width: '18rem',margin:'auto',marginTop:30,height:"auto" }}>
                    <Card.Body> */}
                        <Row style={{height:200,width:200,margin:'auto' }}>
                            <Col xs={12} md={12}>
                                <img src={prof} style={{width:'100%'}}></img>
                                <h3 style={{width:'100%',textAlign:'center',marginTop:10}}>{info.name}</h3>
                               
                            </Col>
                        </Row>
                        <Button variant="dark" style={{width:'100%',marginTop:30}} onClick={() => setModalShow(true)}>Edit Profile</Button>
                        <App
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                        <hr></hr>
                        <h4>About</h4>
                        <p>Country
                        <h6>{info.country}</h6></p>
                        <p>Email
                        <h6>{info.email}</h6></p>
                        <p>Contact
                        <h6>{info.contact}</h6></p>
                        <p>College
                        <h6>{info.college}</h6></p>
                        <Button variant="dark" style={{width:'100%'}} onClick={() => setModalShow1(true)}>Reset Password</Button>
                        <App2
                          show={modalShow1}
                          onHide={() => setModalShow1(false)}
                        />

                    {/* </Card.Body>
            </Card>
     */}
            </Col>
            <Col  md={8} xs={12} style={{height:'auto',}}>
                <Row style={{marginTop:30}}>
            <Col xs={12} md={6} style={{padding:10}}>
              <Card style={{backgroundColor:'orange'}}>
                <Card.Header
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Problem Finished
                </Card.Header>
                <div style={{width:"100%",height:155,backgroundColor:'orange',overflowY:'scroll',scrollbarWidth:'none',padding:10,borderRadius:10}}>
                <p  >
                <h5>Total Problem Solved:15</h5>
                    <h5>Easy Level:5</h5>
                    <h5> Medium Level:5</h5>
                    <h5>Hard Level:5</h5>
                </p>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={6} style={{padding:10}}>
              <Card style={{backgroundColor:'orange'}}>
                <Card.Header
                  style={{ backgroundColor: "black", color: "white" }}
                >
                    Tracks Enrolled
                </Card.Header>
                <div style={{width:"100%",height:155,backgroundColor:'orange',overflowY:'scroll',scrollbarWidth:'none',padding:10,borderRadius:10}}>
                <h6> Kick Start For Absolute Beginners </h6>
                    <hr></hr>
                    <h6>C++ - 10 VERY-EASY CHALLENGES </h6>
                    <hr></hr>
                    <h6>PYTHON3.x - 10 AVERAGE CHALLENGES </h6>
                    <hr></hr>
                    <h6>C++ - 10 VERY-EASY CHALLENGES </h6>
                    <hr></hr>
                    <h6>PYTHON3.x - 10 AVERAGE CHALLENGES </h6>
                </div>
              </Card>
            </Col>
                </Row>
                <Row style={{marginTop:30}}>
                <Col xs={12} md={12} style={{padding:10}}>
              <Card style={{backgroundColor:'black',width:"100%"}}>
                <Card.Header
                  style={{ backgroundColor: "orange", color: "black" }}
                >
                   My Badges
                </Card.Header>
                <div style={{width:"100%",height:155,backgroundColor:'black',overflowX:'scroll',scrollbarWidth:'none',padding:10,borderRadius:10}}>
                <p>
                <img src={c} style={{height:150,width:150,padding:10}}></img>
                <img src={java} style={{height:150,width:150,padding:10}}></img>
                <img src={cpp} style={{height:150,width:150,padding:10}}></img>
                <img src={ruby} style={{height:150,width:150,padding:10}}></img>
                <img src={python} style={{height:150,width:150,padding:10}}></img>
                <img src={js} style={{height:150,width:150,padding:10}}></img>
                </p>
                </div>
              </Card>
            </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasicExample;
