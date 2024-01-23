import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './main.css';
import logo from "./main.png"
import clogo from "./clogo.png"
import jlogo from "./jlogo.jpg"
import cpplogo from "./cpplogo.png"
import pylogo from "./pylogo.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import Navi from './nav'
import "./problem.css";
import {useNavigate } from 'react-router-dom'
function BasicExample() {
  const navigator =useNavigate();
  return (     
  <div> 
     <Navi/>
    <Container>
    <h6  style={{marginTop:100,fontSize:20,color:'GrayText'}}>Welcome To</h6>
    <h1>LetsCode Explore </h1>
    </Container>
    <Container>
        <h3 style={{marginTop:50}}>Available Languages</h3>
    </Container>
    <Container>
      <Row className="flex-wrap"
      >
        <Col xs={12} md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={clogo} style={{height:200,width:200,margin:'auto'}} />
      <Card.Body >
        <Card.Title>C Programming</Card.Title>
        <Card.Text>
        Hands-on Programming Challenges to learn and practise C
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
        <Col xs={12}md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={jlogo} style={{height:200,width:200,margin:'auto'}} />
      <Card.Body>
        <Card.Title>Java Programming </Card.Title>
        <Card.Text>
        Hands-on Programming Challenges to learn and practise Java
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
        <Col xs={12} md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={cpplogo} style={{height:200,width:200,margin:'auto'}}/>
      <Card.Body>
        <Card.Title>C++ Programming </Card.Title>
        <Card.Text>
        Hands-on Programming Challenges to learn and practise C++
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
        <Col xs={12} md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={pylogo} style={{height:200,width:200,margin:'auto'}} />
      <Card.Body>
        <Card.Title>Python Programming</Card.Title>
        <Card.Text>
        SoHands-on Programming Challenges to learn and practise Python
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    
    </div>
  );
}

export default BasicExample;